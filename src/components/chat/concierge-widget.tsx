"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Bot,
  User,
  Zap,
  ChevronDown,
  Minimize2,
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

const STORAGE_KEY = "scarci_concierge_messages_v1";

const INITIAL_MESSAGE: Message = {
  id: "welcome-1",
  role: "assistant",
  content: `👋 **Welcome to Scarci Digital!** I'm your AI Solutions Concierge.

Whether you're looking to build an **e-commerce flagship**, engineer a **custom CRM**, or need a **fast turnaround proposal**, I'm here to assist you instantly.`,
  timestamp: "Just now",
  chips: [
    "💰 Pricing & Scope",
    "⏱️ Project Timelines",
    "🛒 E-Commerce & Shopify",
    "📊 Custom CRM",
    "📅 Book Discovery Call",
  ],
};

export function ConciergeWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const [showTeaser, setShowTeaser] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [showLeadModal, setShowLeadModal] = React.useState(false);

  // Lead capture state
  const [leadContact, setLeadContact] = React.useState("");
  const [leadService, setLeadService] = React.useState("Website / E-Commerce");
  const [leadSubmitted, setLeadSubmitted] = React.useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Load from local storage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHasInteracted(true);
        }
      }
    } catch {
      // ignore
    }
  }, []);

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
        setShowTeaser(true);
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
    if (isOpen) {
      setShowTeaser(false);
      setHasInteracted(true);
      if (typeof window !== "undefined" && window.innerWidth >= 640) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const conversationHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const currentContext = pathname === "/" ? "Home Page" : pathname.replace("/services/", "Service: ");

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
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        chips: data.suggestedChips || [],
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content:
          "Thank you for reaching out! Our team is currently reviewing your project inquiry. For immediate response, feel free to book a direct 30-min discovery call or message us on WhatsApp.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        chips: ["📅 Book Discovery Call", "💬 WhatsApp Direct"],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleChipClick = (chip: string) => {
    if (chip.includes("Book Discovery") || chip.includes("Book 30-min") || chip.includes("Book Strategy")) {
      window.location.href = "/contact";
      return;
    }
    if (chip.includes("WhatsApp")) {
      const phone = "+15551234567";
      const prefill = encodeURIComponent(
        `Hi Scarci Digital! I'm interested in discussing a new digital project.`
      );
      window.open(`https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${prefill}`, "_blank");
      return;
    }
    if (chip.includes("Portfolio") || chip.includes("UrbanThread")) {
      window.location.href = "/portfolio";
      return;
    }
    if (chip.includes("Proposal") || chip.includes("Request Quote")) {
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
          id: `bot-${Date.now()}`,
          role: "assistant",
          content: `✅ **Inquiry Received!** We've recorded your contact info (**${leadContact}**) for **${leadService}**.\n\nOur Solutions Architect will reach out within 2 hours with an initial scope breakdown.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          chips: ["💬 Follow Up on WhatsApp", "📅 Book Time on Calendar"],
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
            onClick={() => setIsOpen(true)}
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
                  Scarci Solutions Concierge
                </p>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  Need an instant project estimate or technical advice? I&apos;m online to help!
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
                // Mobile layout: full screen / safe area aware
                "inset-x-0 bottom-0 top-0 sm:top-auto sm:inset-x-auto sm:bottom-24 sm:right-6",
                // Mobile vs Desktop sizing:
                "w-full sm:w-[410px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh]",
                // Rounded corners:
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
                      Instant reply • Solutions Architect
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
                  <span>Instant Proposal</span>
                </button>
                <button
                  onClick={() => handleChipClick("WhatsApp")}
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-colors text-emerald-300"
                >
                  <span>💬 WhatsApp</span>
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

              {/* Quick Proposal Modal Overlay (if requested) */}
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
                        <p className="text-xs sm:text-sm font-semibold text-white">Proposal Request Queued!</p>
                        <p className="text-[11px] text-slate-400">Our team will reach out via WhatsApp or email within 2 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleLeadSubmit} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-xs font-semibold text-white">Request Fast-Track Proposal</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Work Email or WhatsApp (+1 ...)"
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
                            <option value="Website Development">Website Development</option>
                            <option value="Shopify / E-Commerce">Shopify / E-Commerce</option>
                            <option value="Custom CRM System">Custom CRM System</option>
                            <option value="UI/UX & Branding">UI/UX & Branding</option>
                            <option value="Webflow / CMS">Webflow / CMS</option>
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
                    placeholder="Ask anything or request pricing..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-md shadow-blue-500/30 active:scale-95"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-x-0.5 translate-y-0.5" />
                  </button>
                </form>
                <div className="mt-1 sm:mt-1.5 flex items-center justify-between text-[10px] text-slate-500 px-1 sm:px-2">
                  <span>Scarci Digital • Sister Concern</span>
                  <Link
                    href="/contact"
                    onClick={() => {
                      if (window.innerWidth < 640) setIsOpen(false);
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Form →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer",
          isOpen
            ? "bg-slate-800 border border-white/20 text-white shadow-black/50"
            : "bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(0,102,255,0.5)] border border-blue-400/40"
        )}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" />
        ) : (
          <>
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-[#050B14] rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </>
        )}
      </motion.button>
    </>
  );
}
