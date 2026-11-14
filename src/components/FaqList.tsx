import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/data/services';

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-navy transition hover:bg-brand-50">
            {faq.question}
            <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-6 pb-6 text-base leading-relaxed text-ink/80">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
