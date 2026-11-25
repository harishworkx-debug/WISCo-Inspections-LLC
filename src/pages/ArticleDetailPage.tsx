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
            name: BUSINESS.specialist,
            jobTitle: 'Certified Mold Remediation & Water Restoration Specialist',
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

      {/* Article Hero */}
      <PageHero
        eyebrow={`Restoration Guide • ${article.mainKeyword}`}
        title={article.title}
        lead={article.summary}
        image={{ src: PHOTOS.heroWaterDamage, alt: article.title }}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-400" />
            {article.readTime}
          </span>
          <span>•</span>
          <span>Updated: {article.publishDate}</span>
          <span>•</span>
          <span className="font-semibold text-gold-400">WISCo Technical Team</span>
        </div>
      </PageHero>

      {/* Main Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-ink/85">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-ink/80">
                    {p}
                  </p>
                ))}
                {section.checklist && section.checklist.length > 0 && (
                  <div className="my-6 rounded-2xl border border-navy-100 bg-mist p-6">
                    <ul className="space-y-3">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-3 text-sm sm:text-base text-navy">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contextual Service Callout */}
          <div className="mt-14 rounded-2xl border-2 border-gold/40 bg-navy p-8 text-white shadow-lift">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400">
              Need Professional Restoration Assistance?
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Get 24/7 Emergency Assistance from WISCo Mold &amp; Water Damage
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              WISCo Mold &amp; Water Damage provides 24/7 emergency water extraction, residential structural drying,
              and certified mold remediation across Madison, Janesville, Edgerton, and surrounding Southern Wisconsin communities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CallButton size="md" label={`Emergency Call: ${BUSINESS.phoneDisplay}`} />
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
            <h2 className="text-2xl font-bold text-navy">Related Restoration Guides</h2>
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
        heading="Have Water Damage or Mold in Your Home?"
        body={`Call WISCo Mold & Water Damage 24/7 at ${BUSINESS.phoneDisplay} for immediate on-site response and insurance claim support.`}
      />
    </>
  );
}
