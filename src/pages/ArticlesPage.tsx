import { ArrowRight, BookOpen, ChevronRight, Home } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import { ARTICLES } from '@/data/articles';
import { PHOTOS } from '@/data/business';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ArticlesPage() {
  usePageMeta({
    title: 'Water Damage & Mold Remediation Guides | WISCo',
    description:
      'Expert guides on Wisconsin water damage restoration, basement flood cleanup, frozen burst pipes, black mold remediation, and insurance claims.',
    path: '/articles',
  });

  return (
    <>
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy text-white/70">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 text-xs whitespace-nowrap sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-gold-400">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <span className="font-semibold text-gold-400">Restoration Guides</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Homeowner Knowledge Center"
        title="Wisconsin Water Damage & Mold Remediation Guides"
        lead="Actionable, practical guides written from actual restoration field experience across Madison, Janesville, Edgerton, and Southern Wisconsin."
        image={{ src: PHOTOS.heroWaterDamage, alt: 'Commercial water damage and mold remediation equipment' }}
      />

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Field Expertise</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              10 In-Depth Restoration &amp; Remediation Articles
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Explore answers to key questions about burst pipes, flooded basements, toxic black mold removal, insurance coverage, and structural drying:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, index) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold text-ink/60">Guide #{index + 1}</span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-md bg-navy-50 px-2.5 py-0.5 text-[11px] font-bold text-brand">
                      {article.mainKeyword}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-navy group-hover:text-brand transition leading-snug">
                      <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-navy-100 pt-4 flex items-center justify-between text-xs font-bold">
                  <span className="text-ink/60">{article.readTime}</span>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-brand group-hover:text-navy transition"
                  >
                    Read Guide <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand
        heading="Dealing with Active Water Leaks or Mold?"
        body="Call WISCo Mold & Water Damage 24/7 at (608) 642-1112 for immediate dispatch across Southern Wisconsin."
      />
    </>
  );
}
