import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardList,
  Home,
  MapPin,
  Users,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS, type ServiceLocation } from '@/data/locations';
import { SERVICES, type ServiceContent } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

type ServiceLocationPageProps = {
  service: ServiceContent;
  location: ServiceLocation;
};

const SECTION_LABEL = 'text-sm font-bold uppercase tracking-[0.2em] text-brand';

export default function ServiceLocationPage({ service, location }: ServiceLocationPageProps) {
  const path = `/${service.slug}-${location.slug}`;
  const related = service.related
    .map((slug) => SERVICES.find((item) => item.slug === slug))
    .filter((item): item is ServiceContent => Boolean(item));

  const otherLocations = SERVICE_LOCATIONS.filter((l) => l.slug !== location.slug);

  const pageTitle = `${service.name} in ${location.name} | ${BUSINESS.name}`;
  const pageDescription = `Professional ${service.name.toLowerCase()} in ${location.name}. Comprehensive inspection reports for buyers, sellers, and homeowners. Call ${BUSINESS.phoneDisplay}.`;
  const localIntroText = service.localIntro.replace(/Edgerton/g, location.city);

  usePageMeta({
    title: pageTitle,
    description: pageDescription,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: `${service.name} in ${location.name}`,
          serviceType: service.name,
          description: pageDescription,
          url: `${SITE_URL}${path}`,
          provider: {
            '@type': 'HomeInspector',
            name: BUSINESS.name,
            telephone: '+1-608-642-1112',
          },
          areaServed: { '@type': 'City', name: `${location.city}, ${location.stateAbbr}` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Inspection Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: location.name, item: `${SITE_URL}/${SERVICES[0].slug}-${location.slug}` },
            { '@type': 'ListItem', position: 4, name: `${service.name} in ${location.city}`, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    },
  });

  return (
    <>
      {/* Crawlable Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy text-white/70">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 text-xs whitespace-nowrap sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-gold-400">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <Link to="/services" className="transition hover:text-gold-400">
            Services
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <Link to="/service-areas" className="transition hover:text-gold-400">
            Service Areas
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <Link to={`/${SERVICES[0].slug}-${location.slug}`} className="transition hover:text-gold-400">
            {location.city}, WI
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden="true" />
          <span className="font-semibold text-gold-400">{service.name}</span>
        </div>
      </nav>

      <PageHero
        eyebrow={`${location.city}, ${location.stateAbbr}`}
        title={`${service.name} in ${location.name}`}
        lead={service.summary}
        image={{ src: service.image.src, alt: service.image.alt }}
      >
        <CallButton size="lg" label="Call to Discuss Your Inspection" />
        <Link
          to={`/${SERVICES[0].slug}-${location.slug}`}
          className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          All {location.city} Inspections
        </Link>
      </PageHero>

      {/* Overview & Local Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-ink/85 lg:col-span-7">
            <p className={SECTION_LABEL}>Overview</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">What this service is</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-navy-100 bg-mist p-8 shadow-card lg:col-span-5 lg:self-start">
            <p className={SECTION_LABEL}>{location.city}, WI</p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">{localIntroText}</p>
            <CallButton variant="navy" size="lg" className="mt-8 w-full" label={`Call ${BUSINESS.phoneDisplay}`} />
            <div className="mt-6 border-t border-navy-100 pt-4">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand transition hover:text-navy"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>View all 10 Wisconsin service communities</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Service Scope & Who Needs It */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <ClipboardList className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">What the service covers</h2>
            <ul className="mt-6 space-y-4">
              {service.covers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Users className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">Who needs this inspection</h2>
            <ul className="mt-6 space-y-4">
              {service.whoNeedsIt.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inspection Day & Limitations */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card sm:p-10">
            <h2 className="text-2xl font-bold text-navy">What to expect on inspection day</h2>
            <ul className="mt-6 space-y-4">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink/85">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-mist p-8 shadow-card sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-navy">
              <AlertTriangle className="h-6 w-6 text-gold" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">Scope and limitations</h2>
            <ul className="mt-6 space-y-4">
              {service.limitations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/60" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className={SECTION_LABEL}>Questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{service.name} FAQs</h2>
          <div className="mt-10">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services in this City */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={SECTION_LABEL}>Recommended Add-ons</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Related Inspections in {location.city}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE CITY DIRECTORY: All 10 Services in this City */}
      <section className="border-t border-navy-100 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={SECTION_LABEL}>{location.city}, WI Service Directory</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                All 10 Inspection Services Available in {location.name}
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                Complete property due diligence solutions tailored to {location.city} homes and environmental conditions:
              </p>
            </div>
            <Link
              to={`/${SERVICES[0].slug}-${location.slug}`}
              className="inline-flex items-center gap-1 text-sm font-bold text-brand transition hover:text-navy hover:underline"
            >
              <span>{location.city} Inspection Hub</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICES.map((s) => {
              const isCurrent = s.slug === service.slug;
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-${location.slug}`}
                  className={`group flex flex-col justify-between rounded-xl border p-4 text-xs shadow-card transition duration-200 ${
                    isCurrent
                      ? 'border-brand bg-brand/5 ring-1 ring-brand'
                      : 'border-navy-100 bg-white hover:-translate-y-0.5 hover:border-brand hover:shadow-lift'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-brand group-hover:bg-brand group-hover:text-white transition">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {isCurrent && (
                        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-3 font-bold text-navy group-hover:text-brand transition leading-snug">
                      {s.name}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand transition group-hover:text-navy">
                    {location.city} Page <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-LOCATION SPIDER WEB: Same Service Across All Other 9 Wisconsin Cities */}
      <section className="border-t border-navy-100 bg-mist py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={SECTION_LABEL}>Regional Coverage</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {service.name} Across Southern Wisconsin
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                WISCo Inspections provides certified {service.name.toLowerCase()} across these neighboring Wisconsin communities:
              </p>
            </div>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand transition hover:text-navy hover:underline"
            >
              <span>Explore all service areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {otherLocations.map((otherLoc) => (
              <Link
                key={otherLoc.slug}
                to={`/${service.slug}-${otherLoc.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-4 text-xs shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand shrink-0 group-hover:text-navy transition" aria-hidden="true" />
                    <span className="font-bold text-navy group-hover:text-brand transition">{otherLoc.name}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink/65">{otherLoc.county}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand transition group-hover:text-navy">
                  {service.name} in {otherLoc.city} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand />
    </>
  );
}
