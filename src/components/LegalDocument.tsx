import type { ReactNode } from 'react';

type LegalSection = { heading: string; body: ReactNode };

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalDocument({ eyebrow, title, updated, sections }: LegalDocumentProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-ink/70">Last updated: {updated}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-navy">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/85">{section.body}</div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
