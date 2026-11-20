import { requireAdmin } from "@/lib/admin-auth";
import { readFaqs } from "@/lib/content";
import { deleteFaqAction, moveFaqAction, saveFaqAction } from "@/app/admin/actions";
import { ActionForm, ConfirmForm, SubmitButton, fieldClass, labelClass } from "@/components/admin/form-controls";
import { ReorderButtons } from "@/components/admin/reorder-buttons";

export const metadata = { title: "FAQs" };

export default async function AdminFaqsPage() {
  await requireAdmin();
  const faqs = await readFaqs();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white">FAQs</h1>
        <p className="text-sm text-slate-400 mt-1">
          Shown on the home page and used by the chat assistant. Avoid mentioning prices.
        </p>
      </div>

      <ul className="space-y-3">
        {faqs.map((faq, idx) => (
          <li key={faq.id} className="rounded-xl border border-white/10 bg-[#0A1628]">
            <details>
              <summary className="list-none [&::-webkit-details-marker]:hidden p-4 flex items-center gap-4 cursor-pointer">
                <span className="flex-1 font-medium text-white">{faq.question}</span>
                <span className="text-xs text-blue-400">Edit</span>
              </summary>
              <div className="p-4 pt-0 space-y-4">
                <ActionForm action={saveFaqAction} className="space-y-3">
                  <input type="hidden" name="id" value={faq.id} />
                  <div>
                    <label className={labelClass}>Question</label>
                    <input name="question" defaultValue={faq.question} required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Answer</label>
                    <textarea name="answer" rows={4} defaultValue={faq.answer} required className={`${fieldClass} resize-y`} />
                  </div>
                  <SubmitButton>Save</SubmitButton>
                </ActionForm>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <ReorderButtons action={moveFaqAction} id={faq.id} isFirst={idx === 0} isLast={idx === faqs.length - 1} />
                  <ConfirmForm action={deleteFaqAction} id={faq.id} message="Delete this FAQ?">
                    Delete
                  </ConfirmForm>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>

      <section className="rounded-xl border border-dashed border-white/15 p-5">
        <h2 className="font-semibold text-white mb-4">Add a question</h2>
        <ActionForm action={saveFaqAction} className="space-y-3">
          <input type="hidden" name="id" value="" />
          <div>
            <label className={labelClass}>Question</label>
            <input name="question" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Answer</label>
            <textarea name="answer" rows={4} required className={`${fieldClass} resize-y`} />
          </div>
          <SubmitButton>Add FAQ</SubmitButton>
        </ActionForm>
      </section>
    </div>
  );
}
