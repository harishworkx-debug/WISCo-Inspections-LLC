import { ArrowRight, ChevronRight, Home, MapPin } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ServicesPage() {
  usePageMeta({
    title: '10 Professional Home Inspection Services in Wisconsin | WISCo Inspections, LLC',
    description:
      'Explore all 10 inspection services from WISCo Inspections, LLC, including buyer home inspections, pre-listing evaluations, radon testing, mold testing, electrical, basement & crawl space, attic & roof, thermal imaging, and 11-month builder warranty inspections.',
    path: '/services',
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
          <span className="font-semibold text-gold-400">Inspection Services</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Inspection Services"
        title="10 Inspection Services Built Around Your Needs"
        lead="Whether you are buying a home, selling, building new, or troubleshooting moisture and energy concerns, we offer dedicated inspection scopes tailored to Wisconsin properties."
        image={{ src: PHOTOS.outdoorInspector, alt: 'Home inspector with a clipboard performing an outdoor property inspection' }}
      />

      {/* Main Services Grid */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Complete Catalog</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Professional Inspection Scopes
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Select any service below to learn about coverage, limitations, diagnostic tools, and scheduling details:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING HUB: Browse Services by Wisconsin Community */}
      <section className="border-t border-navy-100 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Wisconsin Communities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Browse Inspections by Service Area
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink/75">
                WISCo Inspections provides certified evaluations across Rock, Dane, and Jefferson counties. Select your
                community to access localized inspection services:
              </p>
            </div>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-brand hover:text-white"
            >
              <span>View All 10 Service Areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {SERVICE_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-mist p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand hover:bg-white hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-brand">
                      <MapPin className="h-4 w-4" />
                    </span>
                    {loc.isPrimary && (
                      <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold text-navy">
                        Base
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-navy">
                    <Link to={`/${SERVICES[0].slug}-${loc.slug}`} className="hover:text-brand transition">
                      {loc.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-ink/65">{loc.county}</p>

                  <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-3">
                    {SERVICES.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}-${loc.slug}`}
                          className="block truncate text-xs font-medium text-brand transition hover:text-navy hover:underline"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t border-navy-100 pt-3">
                  <Link
                    to={`/${SERVICES[0].slug}-${loc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-gold-600 transition hover:text-navy"
                  >
                    <span>All {loc.city} Services</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand heading="Not Sure Which Inspection You Need?" body="Call WISCo Inspections at (608) 642-1112 and we will help you choose the right inspection for your property." />
    </>
  );
}
