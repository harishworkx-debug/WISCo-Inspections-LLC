import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import CallButton from '@/components/CallButton';
import PageHero from '@/components/PageHero';
import { BUSINESS, MAPS_EMBED_SRC, SITE_URL } from '@/data/business';
import { PRIMARY_LOCATION } from '@/data/locations';
import { usePageMeta } from '@/lib/seo';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact WISCo Inspections | Schedule a Wisconsin Home Inspection',
    description:
      'Contact licensed Wisconsin home inspector Phil Jackson at WISCo Inspections, LLC. Call (608) 642-1112 for prompt scheduling across Madison, Edgerton, Janesville, and Southern WI.',
    path: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact WISCo Inspections, LLC',
      url: `${SITE_URL}/contact`,
      mainEntity: {
        '@type': 'HomeInspector',
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
      },
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call WISCo Inspections"
        lead="Phone is the best way to reach us. Call to discuss your property, the inspection you need, and availability."
      >
        <CallButton size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-navy-100 bg-mist p-8 shadow-card">
              <h2 className="text-2xl font-bold text-navy">{BUSINESS.name}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Phone</p>
                    <a href={BUSINESS.phoneHref} className="text-xl font-bold text-navy transition hover:text-brand">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Service area</p>
                    <p className="text-base font-semibold text-navy">{PRIMARY_LOCATION.name}, and across Wisconsin</p>
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
                    >
                      View our Google Maps listing
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Scheduling</p>
                    <p className="text-base text-ink/85">Availability and inspection timing are confirmed when you call.</p>
                  </div>
                </li>
              </ul>
              <CallButton variant="navy" size="lg" className="mt-8 w-full" label="Call Now" />
            </div>
            <div className="flex gap-4 rounded-2xl border border-gold/40 bg-gold-100 p-6">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-navy">
                Please call to discuss your property. We will walk you through the next steps during the conversation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-card">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <iframe
                  src={MAPS_EMBED_SRC}
                  title={`Map showing ${BUSINESS.name}`}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-ink/70">
              Use the map to find our listing on Google. For the fastest response, call {BUSINESS.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
