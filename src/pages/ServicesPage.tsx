import { ArrowRight, ChevronRight, Home, MapPin, Sparkles } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const SECTION_LABEL = 'text-sm font-bold uppercase tracking-[0.2em] text-brand';

const EDUCATIONAL_GUIDES = [
  { title: 'What Does a Home Inspection Include?', slug: 'home-inspection', anchor: 'Comprehensive 400+ Point Home Inspection Guide' },
  { title: 'How Much Does a Home Inspection Cost?', slug: 'buyer-home-inspection', anchor: 'Buyer Home Inspection Pricing & Scope' },
  { title: 'What Is a Pre-Listing Inspection?', slug: 'pre-listing-inspection', anchor: 'Pre-Listing Seller Inspection Overview' },
  { title: 'Why Is Radon Testing Important in Wisconsin?', slug: 'radon-testing', anchor: 'Wisconsin Radon Gas Testing Protocol' },
  { title: 'Signs of Moisture in a Wisconsin Basement', slug: 'basement-crawl-space-inspection', anchor: 'Basement & Crawl Space Moisture Guide' },
  { title: 'Common Roof Problems Found During Inspections', slug: 'attic-roof-inspection', anchor: 'Attic Ventilation & Roof Inspection Insights' },
  { title: 'What Is Thermal Imaging Used For?', slug: 'thermal-imaging-inspection', anchor: 'Thermal Imaging Infrared Scan Details' },
  { title: 'When Should You Schedule a Warranty Inspection?', slug: 'warranty-inspection', anchor: '11-Month Builder Warranty Checklist' },
];

export default function ServicesPage() {
  usePageMeta({
    title: 'Home Inspection Services Wisconsin | WISCo Inspections',
    description:
      'Professional home inspection and testing services in Wisconsin. Buyer inspections, pre-listing, certified radon testing, diagnostic mold testing, electrical, basement, attic, thermal imaging & builder warranty inspections. Call (608) 642-1112.',
    path: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ItemList',
          name: 'WISCo Home Inspection Services',
          itemListElement: SERVICES.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.name,
            url: `${SITE_URL}/${service.slug}-edgerton-wi`,
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Inspection Services', item: `${SITE_URL}/services` },
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
          <span className="font-semibold text-gold-400">Inspection Services</span>
        </div>
      </nav>

      <PageHero
        eyebrow="WISCo Inspection Services"
        title="Professional Home Inspection & Testing Services"
        lead="Comprehensive, unbiased property evaluations and diagnostic testing across South Central Wisconsin. Focused strictly on objective inspection—never repair, remediation, or mitigation."
        image={{ src: PHOTOS.outdoorInspector, alt: 'Home inspector with a clipboard performing an outdoor property inspection' }}
      />

      {/* Main Services Grid */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className={SECTION_LABEL}>Complete Catalog</p>
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

      {/* SECTION 7B: In-Depth Service to City Internal Linking Hub */}
      <section className="border-t border-navy-100 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={SECTION_LABEL}>City-Wise Keyword Targeting</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              10 Inspection Services Across Wisconsin Communities
            </h2>
            <p className="mt-3 text-base text-ink/75">
              Browse dedicated landing pages for every inspection service across our 10 primary South Central Wisconsin service areas:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.slug}
                  className="rounded-2xl border border-navy-100 bg-mist p-6 shadow-card transition hover:border-brand"
                >
                  <div className="flex items-center gap-3 border-b border-navy-100 pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{s.name}</h3>
                      <p className="text-xs text-ink/70">
                        Primary Keyword: <strong className="text-brand">{s.primaryKeyword}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/60">Local Landing Pages:</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {SERVICE_LOCATIONS.map((loc) => (
                        <Link
                          key={loc.slug}
                          to={`/${s.slug}-${loc.slug}`}
                          className="rounded-lg border border-navy-100 bg-white px-2.5 py-1 text-xs font-medium text-navy shadow-2xs transition hover:border-brand hover:text-brand"
                        >
                          {s.primaryKeyword} {loc.city} WI
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7E: Educational Guides Linking */}
      <section className="border-t border-navy-100 bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className={SECTION_LABEL}>Buyer &amp; Seller Resources</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Educational Home Inspection Guides
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink/75">
              Detailed articles addressing common search intent topics, checklist requirements, and Wisconsin property standards:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EDUCATIONAL_GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-card"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-navy">{guide.title}</h3>
                  <p className="mt-2 text-xs text-ink/70 leading-relaxed">{guide.anchor}</p>
                </div>
                <Link
                  to={`/${guide.slug}-madison-wi`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand transition hover:text-navy hover:underline"
                >
                  <span>Explore Topic</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Services by Wisconsin Community */}
      <section className="border-t border-navy-100 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={SECTION_LABEL}>Wisconsin Communities</p>
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

      <CallCtaBand
        heading="Not Sure Which Inspection You Need?"
        body="Call inspector Phil Jackson at (608) 642-1112 and we will help you choose the right inspection scope for your property."
      />
    </>
  );
}
