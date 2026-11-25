import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS, SITE_URL } from '@/data/business';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const SECTION_LABEL = 'text-sm font-bold uppercase tracking-[0.2em] text-brand';

const EDUCATIONAL_GUIDES = [
  { title: 'How to Handle Sudden Water Damage in Wisconsin', slug: 'how-to-handle-water-damage-wisconsin-home', anchor: 'Emergency Water Damage Action Guide' },
  { title: 'Mold Remediation vs. Mold Testing', slug: 'mold-remediation-vs-mold-testing', anchor: 'Mold Remediation Protocols & Testing' },
  { title: '10 Warning Signs of Hidden Mold Behind Drywall', slug: 'signs-of-hidden-mold-behind-drywall', anchor: 'Hidden Mold Detection Guide' },
  { title: 'Emergency Action After a Frozen Pipe Bursts', slug: 'frozen-pipe-burst-winter-emergency-steps', anchor: 'Winter Burst Pipe Cleanup' },
  { title: 'Does Homeowners Insurance Cover Water & Mold?', slug: 'does-homeowners-insurance-cover-water-mold-damage', anchor: 'Insurance Claims & Coverage Guide' },
  { title: 'Basement Flooding & Sump Pump Failure Cleanup', slug: 'basement-flooding-sump-pump-failure-guide', anchor: 'Flooded Basement Restoration Guide' },
  { title: 'Black Mold (Stachybotrys): Hazards & Removal', slug: 'black-mold-stachybotrys-health-risks-removal', anchor: 'Toxic Black Mold Removal Guide' },
  { title: 'How Long Does Structural Drying Take?', slug: 'how-long-does-structural-drying-take', anchor: 'Structural Drying Timelines & Equipment' },
];

export default function ServicesPage() {
  usePageMeta({
    title: 'Mold Remediation & Water Damage Services Wisconsin | WISCo',
    description:
      'Certified mold remediation, 24/7 emergency water extraction, flood damage restoration, structural drying, and crawl space mitigation across Southern Wisconsin. Call (608) 642-1112.',
    path: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ItemList',
          name: 'WISCo Mold & Water Damage Services',
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
            { '@type': 'ListItem', position: 2, name: 'Restoration Services', item: `${SITE_URL}/services` },
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
          <span className="font-semibold text-gold-400">Restoration Services</span>
        </div>
      </nav>

      <PageHero
        eyebrow="WISCo Restoration Catalog"
        title="Residential Mold Remediation & Water Damage Services"
        lead="Comprehensive emergency flood water extraction, certified mold abatement, and residential structural drying across South Central Wisconsin. Fast 24/7 dispatch."
        image={{ src: PHOTOS.heroWaterDamage, alt: 'Residential water damage restoration and mold remediation equipment' }}
      />

      {/* Main Services Grid */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Our 10 Core Services</h2>
            <p className="mt-3 text-base text-ink/75">
              Select a service below to explore procedures, equipment details, local considerations, and emergency scheduling.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Guides Cross-Link Band */}
      <section className="bg-white py-16 border-t border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className={SECTION_LABEL}>Homeowner Knowledge Base</p>
              <h2 className="text-2xl font-bold text-navy mt-1">Water Damage &amp; Mold Guides</h2>
            </div>
            <Link to="/articles" className="text-sm font-bold text-brand hover:underline inline-flex items-center gap-1">
              Browse all restoration articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATIONAL_GUIDES.map((g) => (
              <Link
                key={g.slug}
                to={`/articles/${g.slug}`}
                className="p-4 rounded-xl border border-navy-100 bg-mist hover:border-brand hover:bg-white transition flex flex-col justify-between"
              >
                <div className="text-sm font-bold text-navy mb-2">{g.title}</div>
                <div className="text-xs text-brand font-semibold flex items-center gap-1">
                  Read Guide <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand
        heading="Need Immediate Emergency Extraction or Mold Inspection?"
        body="Call WISCo Mold & Water Damage 24/7 at (608) 642-1112 for rapid dispatch across Rock, Dane, and Jefferson counties."
      />
    </>
  );
}
