"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Calendar,
  CheckCircle2,
  RotateCcw,
  Bot,
  User,
  Zap,
  Minimize2,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  chips?: string[];
}

const STORAGE_KEY = "scarci_concierge_messages_v2";

const INITIAL_MESSAGE: Message = {
  id: "welcome-1",
  role: "assistant",
  content: `👋 **Welcome to Scarci Digital!** I'm your Technical Solutions Concierge.

We design and engineer **custom software, startup MVPs, SaaS platforms, client portals, and bespoke CRMs** with 100% IP ownership.

*(Looking for marketing, SEO, or Meta ads? Those are powered by our sister concern, Scarci Solutions).* How can I help with your product today?`,
  timestamp: "Just now",
  chips: [
    "🚀 Startup MVPs ($12.5k+)",
    "⚡ Custom CRMs ($12.5k+)",
    "🔒 Client Portals ($10k+)",
    "📱 Mobile Apps ($12.5k+)",
    "☁️ SaaS Platforms ($20k+)",
    "📅 Request Architecture Call",
  ],
};

function formatNowTime(): string {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ConciergeWidget() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const [showTeaser, setShowTeaser] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [showLeadModal, setShowLeadModal] = React.useState(false);

  // Lead capture state
  const [leadContact, setLeadContact] = React.useState("");
  const [leadService, setLeadService] = React.useState(
    "Startup MVP ($12.5k–$45k)"
  );
  const [leadSubmitted, setLeadSubmitted] = React.useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const loadedFromStorageRef = React.useRef(false);
  const idCounterRef = React.useRef(1);

  const nextMessageId = (prefix: string) => {
    idCounterRef.current += 1;
    return `${prefix}-${idCounterRef.current}`;
  };

  const openWidget = () => {
    if (!loadedFromStorageRef.current) {
      loadedFromStorageRef.current = true;
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMessages(parsed);
          }
        }
      } catch {
        // ignore
      }
    }
    setShowTeaser(false);
    setHasInteracted(true);
    setIsOpen(true);
  };

  // Save to local storage
  React.useEffect(() => {
    if (messages.length > 1) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Show proactive teaser bubble after 4 seconds if not opened
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasInteracted) {
        let alreadySaved = false;
        try {
          alreadySaved = Boolean(localStorage.getItem(STORAGE_KEY));
        } catch {
          // ignore
        }
        if (!alreadySaved) {
          setShowTeaser(true);
        }
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen, hasInteracted]);

  // Lock body scroll on small screens when open
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to bottom on new message
  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened on desktop/tablet
  React.useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.innerWidth >= 640) {
      const focusTimer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: nextMessageId("usr"),
      role: "user",
      content: text,
      timestamp: formatNowTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const conversationHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const currentContext =
        pathname === "/"
          ? "Home Page"
          : pathname.replace("/services/", "Service: ");

      const res = await fetch("/api/concierge/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: conversationHistory,
          pageContext: currentContext,
        }),
      });

      if (!res.ok) throw new Error("API response error");

      const data = await res.json();

      const botMsg: Message = {
        id: nextMessageId("bot"),
        role: "assistant",
        content: data.reply,
        timestamp: formatNowTime(),
        chips: data.suggestedChips || [],
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: nextMessageId("bot"),
        role: "assistant",
        content:
          "Thank you for reaching out! Feel free to explore our custom software capabilities or discuss your project scope directly on our Contact page—we reply within 1 business day.",
        timestamp: formatNowTime(),
        chips: ["📅 Discuss Project Scope", "🚀 Startup MVPs", "⚡ Custom CRMs"],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleChipClick = (chip: string) => {
    if (
      chip.includes("Book Discovery") ||
      chip.includes("Book 30-min") ||
      chip.includes("Book Strategy") ||
      chip.includes("Book Time")
    ) {
      setIsOpen(false);
      router.push("/contact");
      return;
    }
    if (chip.includes("Compare Plans")) {
      setIsOpen(false);
      router.push("/pricing#monthly-plans");
      return;
    }
    if (
      chip.includes("Portfolio") ||
      chip.includes("Case Studies") ||
      chip.includes("UrbanThread")
    ) {
      setIsOpen(false);
      router.push("/portfolio");
      return;
    }
    if (chip.includes("Proposal") || chip.includes("Request Custom Quote")) {
      setShowLeadModal(true);
      return;
    }

    handleSendMessage(chip);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadContact.trim()) return;

    setIsSubmittingLead(true);
    try {
      const res = await fetch("/api/concierge/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactInfo: leadContact,
          serviceInterest: leadService,
          sourceUrl: pathname,
        }),
      });

      if (res.ok) {
        setLeadSubmitted(true);
        const confirmationMsg: Message = {
          id: nextMessageId("bot"),
          role: "assistant",
          content: `✅ **Inquiry Received!** We've recorded your contact info (**${leadContact}**) for **${leadService}**.\n\nOur US account & engineering lead will reach out within 1 business day with next steps.`,
          timestamp: formatNowTime(),
          chips: ["📅 Book Time on Calendar", "📋 Compare Plans Page"],
        };
        setMessages((prev) => [...prev, confirmationMsg]);
        setTimeout(() => {
          setShowLeadModal(false);
          setLeadSubmitted(false);
          setLeadContact("");
        }, 2500);
      }
    } catch {
      alert("Submission error. Please email hello@scarcidigital.com");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  return (
    <>
      {/* Teaser Bubble (Proactive engagement) */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-[320px] bg-[#0A1628]/95 border border-blue-500/30 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl cursor-pointer group"
            onClick={openWidget}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
              }}
              className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Scarci Digital Concierge
                </p>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  Have questions about custom software, MVPs, or technical architecture?
                  Ask me anything!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window Modal / Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on mobile for focus and clean dismissal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className={cn(
                "fixed z-50 flex flex-col overflow-hidden shadow-2xl shadow-black/80 bg-[#0A1628]/98 backdrop-blur-2xl border border-white/10",
                "inset-x-0 bottom-0 top-0 sm:top-auto sm:inset-x-auto sm:bottom-24 sm:right-6",
                "w-full sm:w-[410px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh]",
                "rounded-none sm:rounded-3xl"
              )}
            >
              {/* Header */}
              <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-gradient-to-r from-blue-950/70 via-[#0A1628] to-[#0A1628] border-b border-white/10 flex items-center justify-between shrink-0 pt-[max(0.875rem,env(safe-area-inset-top))]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-[#0A1628] rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      Scarci AI Concierge
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30 px-1.5 py-0.2 rounded">
                        Live
                      </span>
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Instant guidance &bull; Plans &amp; Custom Builds
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    onClick={handleResetChat}
                    title="Reset conversation"
                    className="p-2 sm:p-1.5 rounded-lg hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
                    aria-label="Reset chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close"
                    className="p-2 sm:p-1.5 rounded-lg hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5 sm:hidden" />
                    <Minimize2 className="w-4 h-4 hidden sm:block" />
                  </button>
                </div>
              </div>

              {/* Quick Action Navigation Bar */}
              <div className="px-3 py-2 bg-white/[0.02] border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] text-slate-300 no-scrollbar touch-pan-x">
                <Link
                  href="/pricing#commercial-models"
                  onClick={() => {
                    if (window.innerWidth < 640) setIsOpen(false);
                  }}
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-colors text-emerald-300"
                >
                  <Layers className="w-3 h-3 text-emerald-400" />
                  <span>Models &amp; Milestones</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => {
                    if (window.innerWidth < 640) setIsOpen(false);
                  }}
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-200"
                >
                  <Calendar className="w-3 h-3 text-blue-400" />
                  <span>Book 30-min Call</span>
                </Link>
                <button
                  onClick={() => setShowLeadModal(true)}
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 transition-colors text-blue-300"
                >
                  <Zap className="w-3 h-3 text-blue-400" />
                  <span>Request Proposal</span>
                </button>
              </div>

              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 sm:space-y-4 overscroll-contain">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex flex-col gap-1",
                      m.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex gap-2 max-w-[92%] sm:max-w-[88%]",
                        m.role === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      {m.role === "assistant" ? (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-700/60 border border-slate-600/40 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" />
                        </div>
                      )}

                      <div
                        className={cn(
                          "rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-[13px] leading-relaxed shadow-sm whitespace-pre-line",
                          m.role === "user"
                            ? "bg-blue-600 text-white rounded-br-xs font-normal"
                            : "bg-white/[0.06] border border-white/10 text-slate-200 rounded-bl-xs"
                        )}
                      >
                        {m.content}
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-500 px-8 sm:px-9">
                      {m.timestamp}
                    </span>

                    {/* Suggestion Chips */}
                    {m.chips && m.chips.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1.5 pl-8 sm:pl-9 max-w-[98%] sm:max-w-[95%]">
                        {m.chips.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleChipClick(chip)}
                            className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 hover:bg-blue-600/20 active:bg-blue-600/30 text-slate-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-1"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 pl-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-600/20 border border-blue-400/20 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Proposal Modal Overlay */}
              <AnimatePresence>
                {showLeadModal && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    className="p-3.5 sm:p-4 bg-[#07101E] border-t border-white/10 shadow-2xl relative shrink-0"
                  >
                    <button
                      onClick={() => setShowLeadModal(false)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-white p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {leadSubmitted ? (
                      <div className="py-3 text-center space-y-1.5">
                        <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          Inquiry Recorded!
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Our US lead will follow up via email within 1 business
                          day.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleLeadSubmit} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-xs font-semibold text-white">
                            Request Plan Onboarding or Custom Scope
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="Work Email or US Phone (+1 ...)"
                          value={leadContact}
                          onChange={(e) => setLeadContact(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                        />
                        <div className="flex flex-col sm:flex-row gap-2">
                          <select
                            value={leadService}
                            onChange={(e) => setLeadService(e.target.value)}
                            className="w-full sm:flex-1 px-3 py-2 rounded-xl bg-[#0A1628] border border-white/10 text-slate-300 text-xs focus:outline-none focus:border-blue-500"
                          >
                            <optgroup label="Digital Product Engineering">
                              <option value="Startup MVP ($12.5k–$45k)">
                                Startup MVP ($12.5k–$45k)
                              </option>
                              <option value="Custom CRM ($12.5k–$45k)">
                                Custom CRM ($12.5k–$45k)
                              </option>
                              <option value="Client Portal ($10k–$45k)">
                                Client Portal ($10k–$45k)
                              </option>
                              <option value="Mobile App ($12.5k–$60k)">
                                Mobile App ($12.5k–$60k)
                              </option>
                              <option value="SaaS Platform ($20k–$75k+)">
                                SaaS Platform ($20k–$75k+)
                              </option>
                              <option value="Business Software & AI ($7.5k–$75k+)">
                                Business Software &amp; AI ($7.5k–$75k+)
                              </option>
                            </optgroup>
                            <optgroup label="Post-Launch Support">
                              <option value="Software Maintenance ($500–$1,500/mo)">
                                Software Maintenance Retainer
                              </option>
                            </optgroup>
                          </select>
                          <Button
                            type="submit"
                            size="sm"
                            variant="glow"
                            disabled={isSubmittingLead}
                            className="w-full sm:w-auto text-xs py-2 justify-center"
                          >
                            {isSubmittingLead ? "Sending..." : "Submit"}
                          </Button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Bar */}
              <div className="p-2.5 sm:p-3 bg-[#0A1628] border-t border-white/10 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about MVPs, custom CRMs, SaaS, or tech stack..."
                    disabled={isTyping}
                    className="flex-1 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    aria-label="Send message"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-x-0.5 translate-y-0.5" />
                  </button>
                </form>
                <div className="mt-1 sm:mt-1.5 flex items-center justify-between text-[10px] text-slate-500 px-1 sm:px-2">
                  <span>Powered by Scarci Digital</span>
                  <span>Sister Concern of Scarci Solutions</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => (isOpen ? setIsOpen(false) : openWidget())}
        aria-label="Open Scarci AI Concierge"
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer",
          isOpen
            ? "bg-slate-800 border border-white/20 text-white shadow-black/50 sm:flex hidden"
            : "bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white shadow-[0_0_30px_rgba(0,102,255,0.55)] border border-blue-400/40"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-blue-600 animate-pulse" />
          </div>
        )}
      </motion.button>
    </>
  );
}
