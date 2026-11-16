import {
  AlertTriangle,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  Home,
  MapPin,
  ShieldAlert,
  Users,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import { BUSINESS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS, type ServiceLocation } from '@/data/locations';
import { HOME_PROCESS, SERVICES, type ServiceContent } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

type ServiceLocationPageProps = {
  service: ServiceContent;
  location: ServiceLocation;
};

const SECTION_LABEL = 'text-sm font-bold uppercase tracking-[0.2em] text-brand';

const EDUCATIONAL_GUIDES = [
  { title: 'What Does a Home Inspection Include?', slug: 'home-inspection', anchor: 'Comprehensive 400+ Point Home Inspection Guide' },
  { title: 'How Much Does a Home Inspection Cost?', slug: 'buyer-home-inspection', anchor: 'Buyer Home Inspection Pricing & Contingencies' },
  { title: 'What Is a Pre-Listing Inspection?', slug: 'pre-listing-inspection', anchor: 'Seller Pre-Listing Inspection Benefits' },
  { title: 'Why Is Radon Testing Important in Wisconsin?', slug: 'radon-testing', anchor: 'Continuous Radon Testing in EPA Zone 1 Soils' },
  { title: 'Signs of Moisture in a Wisconsin Basement', slug: 'basement-crawl-space-inspection', anchor: 'Basement & Crawl Space Hydrostatic Pressure' },
  { title: 'Common Roof Problems Found During Inspections', slug: 'attic-roof-inspection', anchor: 'Attic Ventilation & Ice Dam Prevention' },
  { title: 'What Is Thermal Imaging Used For?', slug: 'thermal-imaging-inspection', anchor: 'Thermal Imaging Infrared Camera Scans' },
  { title: 'When Should You Schedule a Warranty Inspection?', slug: 'warranty-inspection', anchor: '11-Month Builder Warranty Checklist' },
];

export default function ServiceLocationPage({ service, location }: ServiceLocationPageProps) {
  const path = `/${service.slug}-${location.slug}`;

  // Related services in this city (excluding current)
  const relatedServicesInCity = SERVICES.filter((s) => s.slug !== service.slug);

  // Genuinely nearby cities as specified by location.nearbySlugs
  const nearbyLocations = SERVICE_LOCATIONS.filter((l) => location.nearbySlugs.includes(l.slug));

  const pageTitle = `${service.primaryKeyword} in ${location.name} | ${BUSINESS.name}`;
  const pageDescription = `Buying or selling in ${location.name}? Schedule ${service.primaryKeyword.toLowerCase()} with WISCo Inspections. Meticulous, unbiased property evaluations by licensed inspector Phil Jackson. Call ${BUSINESS.phoneDisplay}.`;

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
            { '@type': 'ListItem', position: 4, name: `${service.primaryKeyword} in ${location.city}`, item: `${SITE_URL}${path}` },
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

      {/* Hero Header */}
      <PageHero
        eyebrow={`${location.city}, ${location.stateAbbr} • ${service.primaryKeyword}`}
        title={`${service.name} in ${location.name}`}
        lead={location.contentAngle}
        image={{ src: service.image.src, alt: service.image.alt }}
      >
        <CallButton size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
        <Link
          to={`/${SERVICES[0].slug}-${location.slug}`}
          className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          All {location.city} Inspections
        </Link>
      </PageHero>

      {/* Target Keywords Ribbon */}
      <section className="border-b border-navy-100 bg-navy-50 py-3 text-xs text-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8">
          <span className="font-bold uppercase tracking-wider text-brand">Keyword Focus:</span>
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

      {/* 1. Understand Your Property Before Closing */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-ink/85 lg:col-span-7">
            <p className={SECTION_LABEL}>Local Real Estate Due Diligence</p>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Understand Your {location.city} Property Before Closing
            </h2>
            <p>
              Purchasing or selling a home in <strong>{location.name}</strong> is one of the most substantial financial decisions
              you will make. An independent, thorough property inspection provides the objective clarity you need to move forward
              with confidence, negotiate repairs appropriately, or plan your maintenance budget.
            </p>
            <p>
              WISCo Inspections provides dedicated <strong>{service.primaryKeyword.toLowerCase()}</strong> services tailored
              specifically to {location.city} properties. From accessible foundations and attics to electrical distribution panels
              and heating systems, we evaluate the home as a complete interconnected system.
            </p>
            <div className="rounded-2xl border border-navy-100 bg-mist p-6">
              <h3 className="text-base font-bold text-navy flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" /> {location.city} Housing Profile &amp; Architecture
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
                <p className="text-xs text-ink/70">87 Verified Client Reviews</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink/80">
              Inspector <strong>Phil Jackson</strong> is state-licensed in Wisconsin (WI License #3302-106). We operate on a strict
              independent standard: <strong>we never perform repair or remediation work</strong>, ensuring our findings are 100% objective
              and solely focused on your peace of mind.
            </p>
            <CallButton variant="navy" size="lg" className="mt-6 w-full" label={`Call Phil at ${BUSINESS.phoneDisplay}`} />
            <div className="mt-4 border-t border-navy-100 pt-4 text-center">
              <Link to="/about" className="text-xs font-bold text-brand hover:underline">
                Learn more about our independent inspection standard →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. What Does This Service Cover? */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={SECTION_LABEL}>Detailed Scope</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Does a {service.name} Cover in {location.city}?
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Our non-invasive visual evaluation examines accessible components across more than 400 individual checkpoints,
              highlighting immediate safety hazards, deferred maintenance, and major defects.
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

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Who Needs This Inspection?</h3>
              <ul className="mt-4 space-y-3">
                {service.whoNeedsIt.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-navy">
                <AlertTriangle className="h-5 w-5 text-gold-600" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Scope &amp; Limitations</h3>
              <ul className="mt-4 space-y-3">
                {service.limitations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specific Local Property Concerns in {location.city} */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={SECTION_LABEL}>Local Housing Considerations</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Specific Property Concerns We Inspect in {location.city}
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Southern Wisconsin properties endure severe seasonal freeze-thaw cycles, high soil moisture, and regional glacial
              radon migration. Here are primary conditions inspector Phil Jackson evaluates in {location.city}:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {location.keyConcerns.map((concern, idx) => (
              <div
                key={concern}
                className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-mist p-6 shadow-card"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-gold-400 font-bold text-xs">
                      #{idx + 1}
                    </span>
                    <ShieldAlert className="h-5 w-5 text-brand" />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-navy">{concern}</p>
                </div>
                <p className="mt-4 border-t border-navy-100 pt-3 text-xs text-ink/65">
                  Documented with annotated photos and severity ratings in your digital report.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Inspection Process on Site */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className={SECTION_LABEL}>Predictable &amp; Thorough</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How the Inspection Process Works
            </h2>
            <p className="mt-3 text-base text-ink/75">
              From initial scheduling through closing day negotiations, we keep the process simple, transparent, and focused on your timeline.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {HOME_PROCESS.map((step, index) => (
              <li key={step.title} className="flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-navy">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75">{step.body}</p>
                </div>
                <div className="mt-4 border-t border-navy-100 pt-3 text-[11px] font-semibold text-brand">
                  Step {index + 1} of 5
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. FAQs tailored to this service & city */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={SECTION_LABEL}>Answers for {location.city} Clients</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {service.name} FAQs for {location.name}
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Common questions about inspection scheduling, duration, report deliverables, and contingency timelines.
            </p>
          </div>
          <div className="mt-10">
            <FaqList faqs={service.faqs} />
          </div>
          <div className="mt-8 text-center text-sm text-ink/75">
            Have questions about a specific property in {location.city}?{' '}
            <a href={BUSINESS.phoneHref} className="font-bold text-brand hover:underline">
              Call Phil Jackson directly at {BUSINESS.phoneDisplay}
            </a>
            .
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKING HUB: All 9 Other Services in this City (Section 7C) */}
      <section className="border-t border-navy-100 bg-mist py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={SECTION_LABEL}>{location.city}, WI Inspection Hub</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Related Inspection Services in {location.name}
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                Targeting separate keyword clusters for each property need in {location.city}. Click any service to view localized scopes:
              </p>
            </div>
            <Link
              to={`/${SERVICES[0].slug}-${location.slug}`}
              className="inline-flex items-center gap-1 text-sm font-bold text-brand transition hover:text-navy hover:underline"
            >
              <span>{location.city} Inspection Overview</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {relatedServicesInCity.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-${location.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-4 text-xs shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-brand group-hover:bg-brand group-hover:text-white transition">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-3 font-bold text-navy group-hover:text-brand transition leading-snug">
                      {s.primaryKeyword} {location.city} WI
                    </p>
                    <p className="mt-1 text-[11px] text-ink/65">{s.name}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand transition group-hover:text-navy">
                    View local scope <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CROSS-LOCATION INTERNAL LINKING: Genuinely Nearby Cities (Section 7D) */}
      <section className="border-t border-navy-100 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={SECTION_LABEL}>Nearby Service Areas</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {service.name} in Nearby Wisconsin Communities
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                WISCo Inspections actively serves these neighboring communities surrounding {location.city}:
              </p>
            </div>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand transition hover:text-navy hover:underline"
            >
              <span>View all 10 service areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {nearbyLocations.map((nearby) => (
              <Link
                key={nearby.slug}
                to={`/${service.slug}-${nearby.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-mist p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-white hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand shrink-0 group-hover:text-navy transition" aria-hidden="true" />
                    <span className="font-bold text-navy group-hover:text-brand transition">{nearby.name}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/65">{nearby.county}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand transition group-hover:text-navy">
                  {service.name} in {nearby.city} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDUCATIONAL GUIDES INTERNAL LINKING (Section 7E) */}
      <section className="border-t border-navy-100 bg-mist py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className={SECTION_LABEL}>Educational Resources</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Wisconsin Home Inspection Knowledge Guides
            </h2>
            <p className="mt-2 text-sm text-ink/75">
              Read our educational inspection resources to better understand property defects, costs, and inspection planning:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EDUCATIONAL_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={`/${guide.slug}-${location.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-lift"
              >
                <div>
                  <h3 className="text-sm font-bold text-navy group-hover:text-brand transition">{guide.title}</h3>
                  <p className="mt-2 text-xs text-ink/70 leading-relaxed">{guide.anchor}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:text-navy transition">
                  Read Guide <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Call CTA Band */}
      <CallCtaBand
        heading={`Ready to Schedule Your Inspection in ${location.city}?`}
        body={`Call inspector Phil Jackson at (608) 642-1112 to discuss your property, check availability, and receive a prompt quote.`}
      />
    </>
  );
}
