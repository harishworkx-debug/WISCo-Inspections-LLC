import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Home,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import { ARTICLES, type Article } from '@/data/articles';
import { BUSINESS, PHOTOS, SITE_URL } from '@/data/business';
import { PRIMARY_LOCATION } from '@/data/locations';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ArticleDetailPage({ article }: { article: Article }) {
  const path = `/articles/${article.slug}`;
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  usePageMeta({
    title: `${article.title} | ${BUSINESS.name}`,
    description: article.metaDescription,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: article.title,
          description: article.metaDescription,
          url: `${SITE_URL}${path}`,
          datePublished: article.publishDate,
          author: {
            '@type': 'Person',
            name: BUSINESS.inspector,
            jobTitle: 'Licensed Wisconsin Home Inspector #3302-106',
          },
          publisher: {
            '@type': 'Organization',
            name: BUSINESS.name,
            url: SITE_URL,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: `${SITE_URL}/articles` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    },
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
          <Link to="/articles" className="transition hover:text-gold-400">
            Articles &amp; Guides
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <span className="font-semibold text-gold-400 truncate max-w-xs">{article.title}</span>
        </div>
      </nav>

      <PageHero
        eyebrow={`Wisconsin Property Guide • ${article.mainKeyword}`}
        title={article.title}
        lead={article.summary}
        image={{ src: PHOTOS.checklist, alt: article.title }}
      >
        <CallButton size="lg" label={`Call Phil at ${BUSINESS.phoneDisplay}`} />
        <Link
          to={`/${article.targetServiceSlug}-${PRIMARY_LOCATION.slug}`}
          className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          View Commercial Inspection Scope
        </Link>
      </PageHero>

      {/* Main Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Metadata pill bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-6 text-xs text-ink/70">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand font-bold text-sm">
                PJ
              </span>
              <div>
                <p className="font-bold text-navy">Written by Inspector Phil Jackson</p>
                <p className="text-[11px] text-ink/60">Wisconsin Licensed Home Inspector #3302-106</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {article.readTime}
              </span>
              <span className="rounded-full bg-navy-50 px-3 py-1 font-semibold text-brand">
                {article.mainKeyword}
              </span>
            </div>
          </div>

          {/* Section Renderers */}
          <div className="mt-10 space-y-12">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink/85 sm:text-lg">
                    {p}
                  </p>
                ))}
                {sec.checklist && (
                  <div className="mt-6 rounded-2xl border border-navy-100 bg-mist p-6 sm:p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand mb-4">
                      Inspection Points to Verify:
                    </h3>
                    <ul className="space-y-3">
                      {sec.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-navy leading-relaxed">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contextual Commercial Service CTA Box */}
          <div className="mt-14 rounded-2xl border-2 border-gold/40 bg-navy p-8 text-white shadow-lift">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400">
              Need Professional Property Evaluation?
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Schedule Your {article.targetServiceAnchor} with WISCo Inspections
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              WISCo Inspections provides meticulous visual evaluations, digital photo reporting delivered within 24 hours,
              and continuous electronic radon and mold diagnostic testing throughout Madison, Janesville, Edgerton, and
              surrounding Wisconsin communities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CallButton size="md" label={`Call Phil at ${BUSINESS.phoneDisplay}`} />
              <Link
                to={`/${article.targetServiceSlug}-madison-wi`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-5 py-2.5 text-xs font-bold text-white hover:bg-white hover:text-navy transition"
              >
                <span>Madison {article.targetServiceAnchor}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Article Specific FAQs */}
          {article.faqs.length > 0 && (
            <div className="mt-16 border-t border-navy-100 pt-12">
              <h2 className="text-2xl font-bold text-navy">Frequently Asked Questions</h2>
              <div className="mt-6">
                <FaqList faqs={article.faqs} />
              </div>
            </div>
          )}

          {/* Related Articles */}
          <div className="mt-16 border-t border-navy-100 pt-12">
            <h2 className="text-2xl font-bold text-navy">Related Home Inspection Guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {otherArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/articles/${rel.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-mist p-5 shadow-xs transition hover:border-brand hover:bg-white"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                      {rel.mainKeyword}
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-navy group-hover:text-brand transition leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand transition group-hover:text-navy">
                    Read guide <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CallCtaBand
        heading="Book Your Wisconsin Property Inspection Today"
        body={`Call inspector Phil Jackson directly at ${BUSINESS.phoneDisplay} to discuss your property and confirm immediate scheduling.`}
      />
    </>
  );
}
