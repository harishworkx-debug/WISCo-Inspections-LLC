import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import CallButton from '@/components/CallButton';
import PageHero from '@/components/PageHero';
import { BUSINESS, MAPS_EMBED_SRC, SITE_URL } from '@/data/business';
import { PRIMARY_LOCATION } from '@/data/locations';
import { usePageMeta } from '@/lib/seo';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact WISCo Mold & Water Damage | 24/7 Emergency Dispatch',
    description:
      'Contact WISCo Mold & Water Damage, LLC. Call (608) 642-1112 for 24/7 emergency water extraction, flood damage restoration, and certified mold remediation across Southern Wisconsin.',
    path: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact WISCo Mold & Water Damage, LLC',
      url: `${SITE_URL}/contact`,
      mainEntity: {
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
      },
    },
  });

  return (
    <>
      <PageHero
        eyebrow="24/7 Emergency Dispatch"
        title="Contact WISCo Mold & Water Damage"
        lead="Phone is the fastest way to reach our emergency crews. Call (608) 642-1112 immediately for standing water, burst pipes, and mold remediation."
      >
        <CallButton size="lg" label={`Emergency Call: ${BUSINESS.phoneDisplay}`} />
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-navy-100 bg-mist p-8 shadow-card">
              <h2 className="text-2xl font-bold text-navy">{BUSINESS.name}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Emergency Dispatch Phone</p>
                    <a href={BUSINESS.phoneHref} className="text-xl font-bold text-navy transition hover:text-brand">
                      {BUSINESS.phoneDisplay}
                    </a>
                    <span className="block text-xs font-bold text-red-600 uppercase mt-0.5">24/7 Live Emergency Line</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Headquarters & Service Area</p>
                    <p className="text-base font-semibold text-navy">{PRIMARY_LOCATION.name}, and all Southern Wisconsin</p>
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
                    >
                      View Google Maps Location
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink/70">Availability</p>
                    <p className="text-base font-semibold text-navy">Open 24/7 for Water Emergencies</p>
                    <p className="text-xs text-ink/75 mt-0.5">Mon–Sat 7:00 AM – 7:00 PM for Mold Consultations</p>
                  </div>
                </li>
              </ul>
              <CallButton variant="navy" size="lg" className="mt-8 w-full" label="Call (608) 642-1112 Now" />
            </div>

            <div className="flex gap-4 rounded-2xl border border-gold/40 bg-gold-100 p-6">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-navy">
                Have an insurance claim? We work directly with all homeowners insurance carriers to document damage, provide itemized estimates, and handle billing.
              </p>
            </div>
          </div>

          {/* Interactive Google Map of Location */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-xl font-bold text-navy mb-2">Our Location &amp; Regional Service Coverage</h3>
              <p className="text-xs sm:text-sm text-ink/75 mb-4">
                Based in Edgerton, WI 53534. Serving Rock County, Dane County, Jefferson County, and surrounding communities with average 45-60 minute on-site response.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-80 sm:h-96 w-full relative bg-slate-100 shadow-inner">
                <iframe
                  title="WISCo Mold & Water Damage Headquarters Location"
                  src={MAPS_EMBED_SRC}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
