import { AlertTriangle, Check, ClipboardList, Users } from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS, SITE_URL } from '@/data/business';
import type { ServiceLocation } from '@/data/locations';
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

  usePageMeta({
    title: service.seoTitle,
    description: service.metaDescription,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: `${service.name} in ${location.name}`,
          serviceType: service.name,
          description: service.metaDescription,
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
            { '@type': 'ListItem', position: 3, name: `${service.name} in ${location.city}`, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.stateAbbr}`}
        title={`${service.name} in ${location.name}`}
        lead={service.summary}
        image={{ src: service.image.src, alt: service.image.alt }}
      >
        <CallButton size="lg" label="Call to Discuss Your Inspection" />
        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          All Inspection Services
        </Link>
      </PageHero>

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
            <p className="mt-4 text-base leading-relaxed text-ink/85">{service.localIntro}</p>
            <CallButton variant="navy" size="lg" className="mt-8 w-full" label={`Call ${BUSINESS.phoneDisplay}`} />
          </aside>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <ClipboardList className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">What the service covers</h2>
            <ul className="mt-6 space-y-4">
              {service.covers.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Users className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">Who may need this service</h2>
            <ul className="mt-6 space-y-4">
              {service.whoNeedsIt.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={SECTION_LABEL}>What to expect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Your inspection, step by step</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {service.whatToExpect.map((item, index) => (
              <li key={item} className="rounded-2xl border border-navy-100 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="text-4xl font-bold text-gold-700">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-4 text-base leading-relaxed text-ink/85">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-l-4 border-gold bg-white p-8 shadow-card sm:p-10">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-gold-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-navy">Limitations and important information</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {service.limitations.map((item) => (
                <li key={item} className="text-base leading-relaxed text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className={SECTION_LABEL}>Questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{service.name} FAQs</h2>
          <div className="mt-10">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={SECTION_LABEL}>Related services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Other inspections in {location.city}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand />
    </>
  );
}
