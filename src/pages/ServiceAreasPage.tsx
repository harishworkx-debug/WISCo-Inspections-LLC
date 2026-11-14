import { ArrowRight, ChevronRight, Home, MapPin } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import { PHOTOS } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ServiceAreasPage() {
  usePageMeta({
    title: '10 Home Inspection Service Areas in Southern Wisconsin | WISCo Inspections, LLC',
    description:
      'Explore the 10 Southern Wisconsin communities served by WISCo Inspections, LLC across Rock, Dane, and Jefferson counties. Call (608) 642-1112.',
    path: '/service-areas',
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
        eyebrow="Service Areas"
        title="10 Service Areas Across Southern Wisconsin"
        lead="WISCo Inspections, LLC is based in Edgerton and actively inspects properties throughout Rock, Dane, and Jefferson counties. Call to confirm availability for your address."
        image={{ src: PHOTOS.heroInspector, alt: 'Home inspector examining the interior of a residential home' }}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Our Service Locations</h2>
            <p className="mt-3 text-base text-ink/75">
              Select your city to view available inspection options, local property considerations, and scheduling details.
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
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-400">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
                        {location.county}
                      </span>
                      {location.isPrimary && (
                        <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                          Primary Base
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-navy">
                    <Link
                      to={`/${SERVICES[0].slug}-${location.slug}`}
                      className="transition group-hover:text-brand"
                    >
                      {location.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/80">{location.intro}</p>

                  <div className="mt-5">
                    <Link
                      to={`/${SERVICES[0].slug}-${location.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:text-navy"
                    >
                      View Home Inspection in {location.city}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="relative z-10 mt-8 border-t border-navy-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/65">
                    All 10 Inspections Available in {location.city}:
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {SERVICES.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/${service.slug}-${location.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition hover:text-navy hover:underline"
                        >
                          <ArrowRight className="h-3 w-3 text-gold shrink-0" aria-hidden="true" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand heading="Is Your Property in Our Service Area?" body="Call (608) 642-1112 to confirm coverage and schedule your inspection today." />
    </>
  );
}
