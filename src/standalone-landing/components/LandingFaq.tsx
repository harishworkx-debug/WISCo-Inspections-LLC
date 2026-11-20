import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_CONFIG, LANDING_FAQS } from '../data/landingData';

export default function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Homeowner Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Answers to common questions about property inspections, radon testing, and reports in {LANDING_CONFIG.locationFull}.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {LANDING_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left font-bold text-navy hover:text-brand transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-slate-100 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand text-white' : 'text-slate-700'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-slate-700 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Prompt */}
        <div className="mt-10 text-center text-sm text-slate-700">
          Have a question about a specific property or contingency deadline?{' '}
          <a
            href={LANDING_CONFIG.phoneHref}
            className="font-bold text-brand hover:underline inline-flex items-center gap-1"
          >
            Call your local inspector directly at {LANDING_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
