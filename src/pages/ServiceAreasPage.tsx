import { ArrowRight, ChevronRight, Home, MapPin } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import { MAPS_EMBED_SRC, PHOTOS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ServiceAreasPage() {
  usePageMeta({
    title: 'Mold & Water Damage Service Areas Wisconsin | WISCo',
    description:
      '24/7 Emergency water damage restoration and certified mold remediation across 10 South Central Wisconsin communities: Edgerton, Janesville, Madison, Beloit, Stoughton, Sun Prairie, Fitchburg, and Verona. Call (608) 642-1112.',
    path: '/service-areas',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ItemList',
          name: 'WISCo Mold & Water Damage Service Locations',
          itemListElement: SERVICE_LOCATIONS.map((loc, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: `${loc.name} Water Damage Restoration & Mold Remediation`,
            url: `${SITE_URL}/water-damage-restoration-${loc.slug}`,
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
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
          <span className="font-semibold text-gold-400">Service Areas</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Southern Wisconsin Coverage"
        title="24/7 Water Damage & Mold Remediation Across 10 Communities"
        lead="WISCo Mold & Water Damage is based in Edgerton and actively dispatches emergency mitigation teams throughout Rock, Dane, and Jefferson counties. Select your community below for localized service details and emergency response times."
        image={{ src: PHOTOS.waterExtraction, alt: 'Commercial flood restoration and water extraction equipment' }}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Our Service Locations</h2>
            <p className="mt-3 text-base text-ink/75">
              Select your city to view available restoration options, local property moisture risks, and emergency dispatch details.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {SERVICE_LOCATIONS.map((location) => (
              <article
                key={location.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-navy-100 bg-mist p-8 shadow-card transition duration-300 hover:border-brand hover:bg-white hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                      <MapPin className="h-4 w-4" /> {location.county}
                    </span>
                    <span className="rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5">
                      24/7 Emergency Dispatch
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-navy group-hover:text-brand transition">
                    {location.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{location.intro}</p>

                  <div className="mt-5 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Common Local Moisture &amp; Fungal Risks:
                    </div>
                    <ul className="text-xs text-ink/75 space-y-1">
                      {location.keyConcerns.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-brand font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-navy-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      to={`/mold-remediation-${location.slug}`}
                      className="text-xs font-bold text-brand hover:underline"
                    >
                      Mold Remediation in {location.city} →
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                      to={`/water-damage-restoration-${location.slug}`}
                      className="text-xs font-bold text-brand hover:underline"
                    >
                      Water Damage in {location.city} →
                    </Link>
                  </div>
                  <Link
                    to={`/water-damage-restoration-${location.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy group-hover:text-brand"
                  >
                    View All Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Google Map in Service Areas */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-slate-200 shadow-xl p-6 bg-slate-50">
            <h3 className="text-xl font-bold text-navy mb-2">Central Dispatch Location Map</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Centrally based in Edgerton, WI, enabling 45–60 minute emergency response times across Dane, Rock, and Jefferson counties.
            </p>
            <div className="rounded-xl overflow-hidden h-80 sm:h-96 w-full border border-slate-200">
              <iframe
                title="Service Area Coverage Map"
                src={MAPS_EMBED_SRC}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CallCtaBand
        heading="Have an Active Water Leak or Flooded Basement?"
        body="Call WISCo Mold & Water Damage at (608) 642-1112 for 24/7 emergency water extraction and flood cleanup."
      />
    </>
  );
}
