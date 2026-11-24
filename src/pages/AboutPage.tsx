import { Award, ListChecks, ShieldCheck, Star, Waves, Zap } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import { BUSINESS, MAPS_EMBED_SRC, PHOTOS, SITE_URL } from '@/data/business';
import { REVIEWS_OVERVIEW } from '@/data/reviews';
import { usePageMeta } from '@/lib/seo';

const PRINCIPLES = [
  {
    icon: Waves,
    title: '24/7 Rapid Emergency Response',
    body: 'Water damage accelerates by the hour. We maintain emergency dispatch around the clock across Southern Wisconsin to stop flooding and extract water before structural rot and mold set in.',
  },
  {
    icon: ShieldCheck,
    title: 'IICRC-Compliant Protocols',
    body: 'We follow strict IICRC S500 water damage restoration and S520 mold remediation standards, utilizing negative-air containment, HEPA air scrubbers, and botanical antimicrobial treatments.',
  },
  {
    icon: ListChecks,
    title: 'Hassle-Free Insurance Coordination',
    body: 'We document all damage thoroughly with thermal imaging, moisture mapping, and industry-standard Xactimate itemized pricing, working directly with your insurance adjuster.',
  },
  {
    icon: Zap,
    title: 'Advanced Diagnostic Technology',
    body: 'From FLIR infrared thermal cameras to commercial LGR dehumidifiers and air movers, we use state-of-the-art restoration technology to guarantee complete structural drying.',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About WISCo Mold & Water Damage | Certified Restoration Wisconsin',
    description:
      'Learn about WISCo Mold & Water Damage, LLC led by Phil Jackson. 24/7 emergency water extraction, flood cleanup, and certified mold remediation across Madison, Edgerton, and Janesville.',
    path: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          name: 'About WISCo Mold & Water Damage',
          url: `${SITE_URL}/about`,
        },
        {
          '@type': 'WaterDamageRestorationService',
          name: BUSINESS.name,
          telephone: '+1-608-642-1112',
          url: SITE_URL,
          hasMap: BUSINESS.mapsUrl,
          sameAs: [BUSINESS.mapsUrl],
          address: {
            '@type': 'PostalAddress',
            addressLocality: BUSINESS.addressCity,
            addressRegion: BUSINESS.addressState,
            postalCode: BUSINESS.addressZip,
            addressCountry: 'US',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '87',
          },
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="About WISCo Mold & Water Damage"
        title="Restoring Wisconsin Homes & Peace of Mind"
        lead="A dedicated, certified team delivering 24/7 emergency flood water extraction, structural drying, and safe mold remediation across Southern Wisconsin."
        image={{ src: PHOTOS.waterExtraction, alt: 'Technician managing commercial water damage restoration and drying equipment' }}
      >
        <CallButton size="lg" label="24/7 Emergency Call: (608) 642-1112" />
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
          <span>4.9 ★ ({REVIEWS_OVERVIEW.totalReviews} Verified Reviews)</span>
        </a>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Rapid Restoration When Disasters Strike
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                When a pipe bursts during a sub-zero Wisconsin winter, a sump pump fails during a severe summer thunderstorm, or toxic black mold is discovered behind finished walls, homeowners need immediate, reliable assistance.
              </p>
              <p>
                Founded and directed by restoration specialist <strong>Phil Jackson</strong>, <strong>WISCo Mold &amp; Water Damage, LLC</strong> was established to provide homeowners, property managers, and businesses with fast, compassionate, and certified disaster mitigation.
              </p>
              <p>
                Based centrally in Edgerton, Wisconsin, our crews arrive fully equipped with truck-mounted water extraction pumps, commercial LGR dehumidifiers, negative-air containment barriers, and infrared thermal imaging cameras. We treat your home with the utmost care, preventing secondary microbial growth and restoring healthy indoor air quality.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-navy font-bold">
                  <Award className="h-6 w-6 text-gold-600" />
                </span>
                <div>
                  <p className="font-bold text-navy">Certified Mold Remediation &amp; Water Restoration Specialist</p>
                  <p className="text-sm text-ink/70">Top-rated 4.9★ service across Rock, Dane, and Jefferson counties.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src={PHOTOS.heroWaterDamage}
              alt="Water damage restoration equipment drying a residential floor"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full self-center rounded-3xl object-cover shadow-lift"
            />
            {/* Interactive Location Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 w-full">
              <iframe
                title="WISCo Mold & Water Damage Headquarters Map"
                src={MAPS_EMBED_SRC}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Core Principles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How We Restore Your Property Safely
            </h2>
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

      <CallCtaBand
        heading="Facing Water Damage or Suspect Mold Growth?"
        body="Call WISCo Mold & Water Damage 24/7 at (608) 642-1112 for immediate dispatch and consultation."
      />
    </>
  );
}
