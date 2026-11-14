import { Award, Eye, ListChecks, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import { BUSINESS, PHOTOS } from '@/data/business';
import { REVIEWS_OVERVIEW } from '@/data/reviews';
import { usePageMeta } from '@/lib/seo';

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: '100% Independent & Unbiased',
    body: 'Our only role is to document what we observe about a property and explain it clearly. We do not sell repair services or accept contractor referral fees.',
  },
  {
    icon: Eye,
    title: 'Methodical System Evaluation',
    body: 'We evaluate accessible areas systematically, including the foundation, roof, structure, exterior drainage, electrical panels, plumbing, and HVAC systems.',
  },
  {
    icon: ListChecks,
    title: 'Clear, Digital Reporting',
    body: 'Findings are delivered within 24 hours with annotated color photos, video clips, and plain-English defect categories you can immediately share with contractors.',
  },
  {
    icon: MessageCircle,
    title: 'Open Communication & Walkthrough',
    body: 'Questions are always welcome. Inspector Phil Jackson takes the time to walk you through findings in person and remains available for follow-up questions after closing.',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About WISCo Inspections, LLC | Inspector Phil Jackson | Edgerton, WI',
    description:
      'Learn about Phil Jackson and WISCo Inspections, LLC, a top-rated 4.9★ home inspection company serving Edgerton, Janesville, Madison, and Southern Wisconsin.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Meet Inspector Phil Jackson & WISCo Inspections"
        lead="A thoughtful, independent approach to residential home inspections and environmental testing across Southern Wisconsin."
        image={{ src: PHOTOS.crawlSpace, alt: 'Inspector checking a crawl space entrance during a home inspection' }}
      >
        <CallButton size="lg" />
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          <div className="flex gap-0.5 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>
          <span>4.9 ★ ({REVIEWS_OVERVIEW.totalReviews} Reviews)</span>
        </a>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Philosophy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Information you can act on</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                A home inspection should leave you confident and well-informed, not overwhelmed with technical jargon.
                Founded by Wisconsin licensed inspector <strong>Phil Jackson</strong>, WISCo Inspections was built on the
                premise that buyers, sellers, and homeowners deserve an objective, detailed evaluation with explanations they
                can actually use.
              </p>
              <p>
                Whether inspecting a century-old historic craftsman in Madison or an 11-month builder warranty home in Sun
                Prairie, Phil approaches every property with the same meticulous attention to detail. Every inspection concludes
                with a thorough on-site walkthrough and a comprehensive digital report delivered within 24 hours.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-navy font-bold">
                  <Award className="h-6 w-6 text-gold-600" />
                </span>
                <div>
                  <p className="font-bold text-navy">Over 85+ Five-Star Reviews</p>
                  <p className="text-sm text-ink/70">Top-rated home inspector in Rock, Dane & Jefferson counties.</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={PHOTOS.doorframe}
            alt="Inspector with a clipboard checking the alignment of a doorframe"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full self-center rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Core Principles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">How we evaluate a property</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/80">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand heading="Talk Directly with Inspector Phil Jackson" body="Call (608) 642-1112 to discuss your property, get a prompt quote, and schedule your inspection." />
    </>
  );
}
