import { ArrowRight, MapPin } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import { PHOTOS } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function ServiceAreasPage() {
  usePageMeta({
    title: 'Home Inspection Service Areas in Wisconsin | WISCo Inspections, LLC',
    description:
      'See the Wisconsin location WISCo Inspections, LLC serves for home inspections, and find the inspection services available in each area.',
    path: '/service-areas',
  });

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Home inspections across Wisconsin"
        lead="WISCo Inspections, LLC is based in and serves Edgerton, Wisconsin. Call to confirm coverage for your property."
        image={{ src: PHOTOS.heroInspector, alt: 'Home inspector examining the interior of a residential home' }}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Current service locations</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICE_LOCATIONS.map((location) => (
              <article
                key={location.slug}
                className="group relative flex flex-col rounded-2xl border border-navy-100 bg-mist p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:bg-white hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-400">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-navy">
                  <Link
                    to={`/${SERVICES[0].slug}-${location.slug}`}
                    className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
                  >
                    {location.name}
                  </Link>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">{location.intro}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition group-hover:text-navy">
                  View home inspection in {location.city}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <ul className="relative z-10 mt-6 divide-y divide-navy-100 border-t border-navy-100">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/${service.slug}-${location.slug}`}
                        className="flex items-center justify-between py-3.5 text-base font-semibold text-brand transition hover:text-navy"
                      >
                        {service.name} in {location.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand heading="Is Your Property in Our Service Area?" body="Call to confirm coverage and availability for your home." />
    </>
  );
}
