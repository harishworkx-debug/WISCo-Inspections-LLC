import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lead, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {image && (
        <>
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" aria-hidden="true" />
        </>
      )}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold-400">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{lead}</p>
        {children && <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">{children}</div>}
      </div>
    </section>
  );
}
