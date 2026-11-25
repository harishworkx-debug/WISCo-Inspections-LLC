import {
  Award,
  Check,
  ChevronRight,
  Home,
  MapPin,
  Phone,
  Waves,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import { BUSINESS, MAPS_EMBED_SRC, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS, type ServiceLocation } from '@/data/locations';
import { HOME_PROCESS, SERVICES, type ServiceContent } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

type ServiceLocationPageProps = {
  service: ServiceContent;
  location: ServiceLocation;
};

const SECTION_LABEL = 'text-sm font-bold uppercase tracking-[0.2em] text-brand';

export default function ServiceLocationPage({ service, location }: ServiceLocationPageProps) {
  const path = `/${service.slug}-${location.slug}`;

  // Related services in this city (excluding current)
  const relatedServicesInCity = SERVICES.filter((s) => s.slug !== service.slug);

  // Genuinely nearby cities as specified by location.nearbySlugs
  const nearbyLocations = SERVICE_LOCATIONS.filter((l) => location.nearbySlugs.includes(l.slug));

  const pageTitle = `${service.primaryKeyword} in ${location.name} | ${BUSINESS.name}`;
  const pageDescription = `Emergency ${service.primaryKeyword.toLowerCase()} in ${location.name}. Fast 24/7 water extraction, structural drying, and certified mold remediation by WISCo. Call ${BUSINESS.phoneDisplay}.`;

  usePageMeta({
    title: pageTitle,
    description: pageDescription,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: `${service.primaryKeyword} in ${location.name}`,
          serviceType: service.primaryKeyword,
          description: pageDescription,
          url: `${SITE_URL}${path}`,
          provider: {
            '@type': 'WaterDamageRestorationService',
            name: BUSINESS.name,
            telephone: '+1-608-642-1112',
          },
          areaServed: { '@type': 'City', name: `${location.city}, ${location.stateAbbr}` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Restoration Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: location.name, item: `${SITE_URL}/${SERVICES[0].slug}-${location.slug}` },
            { '@type': 'ListItem', position: 4, name: `${service.primaryKeyword} in ${location.city}`, item: `${SITE_URL}${path}` },
          ],
        },
      ],
    },
  });

  return (
    <>
      {/* 24/7 Emergency Header Strip */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2">
        <Waves className="h-4 w-4 animate-pulse" />
        <span>24/7 Water Damage Emergency Dispatch in {location.city}:</span>
        <a href={BUSINESS.phoneHref} className="underline hover:text-amber-200">
          (608) 642-1112
        </a>
      </div>

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

      {/* Hero Header */}
      <PageHero
        eyebrow={`${location.city}, ${location.stateAbbr} • ${service.primaryKeyword}`}
        title={`${service.name} in ${location.name}`}
        lead={location.contentAngle}
        image={{ src: service.image.src, alt: service.image.alt }}
      >
        <CallButton size="lg" label={`24/7 Call: ${BUSINESS.phoneDisplay}`} />
        <Link
          to={`/${SERVICES[0].slug}-${location.slug}`}
          className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          All {location.city} Services
        </Link>
      </PageHero>

      {/* Target Keywords Ribbon */}
      <section className="border-b border-navy-100 bg-navy-50 py-3 text-xs text-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8">
          <span className="font-bold uppercase tracking-wider text-brand">Service Focus:</span>
          <span className="rounded-full bg-white border border-brand/20 px-3 py-1 font-semibold text-brand">
            {service.primaryKeyword} in {location.city}, WI
          </span>
          {service.supportingKeywords.map((kw) => (
            <span key={kw} className="rounded-full bg-white/70 border border-navy-100 px-3 py-1 text-ink/75">
              {kw} in {location.city}
            </span>
          ))}
        </div>
      </section>

      {/* 1. Emergency Restoration in Location */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-ink/85 lg:col-span-7">
            <p className={SECTION_LABEL}>Rapid Local Restoration</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Professional {service.name} in {location.city}, Wisconsin
            </h2>
            <p>
              When water inundates your property or toxic mold threatens your indoor air quality in <strong>{location.name}</strong>,
              rapid intervention is essential to prevent permanent structural decay and dangerous health hazards.
            </p>
            <p>
              <strong>WISCo Mold &amp; Water Damage</strong> delivers 24/7 emergency response throughout {location.city} and surrounding communities.
              Our crews arrive with truck-mounted water extraction pumps, negative-air containment chambers, high-capacity LGR dehumidifiers,
              and FLIR thermal imaging cameras to restore your residential property quickly and thoroughly.
            </p>
            <div className="rounded-2xl border border-navy-100 bg-mist p-6">
              <h3 className="text-base font-bold text-navy flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" /> {location.city} Property Profile &amp; Moisture Risks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {location.housingProfile}
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-navy-100 bg-mist p-8 shadow-card lg:col-span-5 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy font-bold">
                <Award className="h-6 w-6 text-navy" />
              </span>
              <div>
                <p className="font-extrabold text-navy">4.9 ★ Rating</p>
                <p className="text-xs text-ink/70">87 Verified Local Reviews</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink/80">
              Led by restoration specialist <strong>Phil Jackson</strong>, our technicians adhere strictly to IICRC S500 and S520
              safety guidelines. We bill directly to your insurance company and provide full clearance testing documentation.
            </p>
            <CallButton variant="navy" size="lg" className="mt-6 w-full" label={`Emergency Dispatch: ${BUSINESS.phoneDisplay}`} />
            <div className="mt-4 border-t border-navy-100 pt-4 text-center">
              <Link to="/about" className="text-xs font-bold text-brand hover:underline">
                Learn more about our certified restoration standards →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. What Does This Service Cover? */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={SECTION_LABEL}>Detailed Scope of Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Does {service.name} Include in {location.city}?
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Our certified remediation and restoration protocols address the full spectrum of water and fungal damage:
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.covers.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-5 shadow-xs">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-Step Process */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={SECTION_LABEL}>Restoration Protocol</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our 5-Step Response in {location.city}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl border border-navy-100 bg-mist p-6 shadow-card">
                <span className="text-3xl font-black text-gold-600/40">{p.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Location Map Embed */}
      <section className="bg-mist py-16 border-t border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">Local Service Response</span>
              <h3 className="text-2xl font-bold text-navy">Rapid Dispatch to {location.name}</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Dispatched from our central facility in Edgerton, WI, our mobile mitigation units reach {location.city} within 45 to 60 minutes for active water emergencies.
              </p>
              <div className="pt-2">
                <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 font-bold text-brand hover:underline">
                  <Phone className="h-4 w-4" />
                  Call (608) 642-1112 for 24/7 Dispatch
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-64 sm:h-72 w-full bg-slate-100 shadow-md">
                <iframe
                  title={`${location.city} Service Map`}
                  src={MAPS_EMBED_SRC}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={SECTION_LABEL}>Frequently Asked Questions</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {service.name} Questions in {location.city}
            </h2>
          </div>
          <div className="mt-12 max-w-3xl">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* 6. Other Services in this City & Nearby Communities */}
      <section className="bg-mist py-16 border-t border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-navy mb-6">Other Restoration Services in {location.city}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {relatedServicesInCity.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${location.slug}`}
                className="p-3 rounded-lg border border-navy-100 bg-white hover:border-brand hover:text-brand transition text-xs font-semibold text-navy text-center"
              >
                {s.name} in {location.city}
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-bold text-navy mt-10 mb-4">Nearby Communities Served</h3>
          <div className="flex flex-wrap gap-2">
            {nearbyLocations.map((nl) => (
              <Link
                key={nl.slug}
                to={`/${service.slug}-${nl.slug}`}
                className="px-3 py-1.5 rounded-full border border-navy-100 bg-white hover:border-brand text-xs font-semibold text-navy transition"
              >
                {service.name} in {nl.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand
        heading={`Need ${service.name} in ${location.city}?`}
        body={`Call WISCo Mold & Water Damage 24/7 at ${BUSINESS.phoneDisplay} for immediate on-site response and insurance claim assistance.`}
      />
    </>
  );
}
