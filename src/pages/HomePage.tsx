import {
  AlertCircle,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Droplets,
  Eye,
  FileCheck,
  House,
  Layers,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Star,
  Thermometer,
  UserCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS, PHOTOS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { REAL_REVIEWS, REVIEWS_OVERVIEW } from '@/data/reviews';
import { HOME_PROCESS, SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const STATS = [
  { value: '4.9 ★', label: '87 Google Reviews', sub: 'Top-rated Wisconsin inspector' },
  { value: '400+', label: 'Checkpoints Evaluated', sub: 'Thorough system review' },
  { value: '24-Hr', label: 'Report Turnaround', sub: 'Fast digital delivery' },
  { value: '100%', label: 'Independent & Unbiased', sub: 'Zero repair conflict' },
];

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: '100% Unbiased & Independent',
    description:
      'We do not offer repair, remodeling, or remediation services. Because we never profit from fixing issues, our evaluations are completely honest, objective, and solely focused on your best interest.',
  },
  {
    icon: Thermometer,
    title: 'Advanced Diagnostic Tools',
    description:
      'We utilize calibrated infrared thermal imaging cameras, pinless moisture meters, continuous digital radon monitors, and combustible gas sniffers to detect hidden issues without destructive testing.',
  },
  {
    icon: FileCheck,
    title: 'Same-Day Digital Reporting',
    description:
      'Receive a comprehensive, mobile-friendly digital report within 24 hours. Features high-resolution annotated photographs, color-coded severity ratings, and an instant summary tool for contract negotiations.',
  },
  {
    icon: Eye,
    title: 'On-Site Walkthrough & Education',
    description:
      'We encourage you to join us on site. We take the time to explain key findings, locate emergency shut-off valves (water, gas, electric), and discuss routine maintenance advice tailored to Wisconsin properties.',
  },
];

const RECENT_INSIGHTS = [
  {
    icon: Layers,
    title: 'Freeze-Thaw & Foundation Pressure',
    subtitle: 'Basement Seepage & Hydrostatic Force',
    description:
      'Wisconsin soils expand and contract dramatically during deep winter freezes and rapid spring thaws. This hydrostatic pressure leads to foundation bowing, step cracks in concrete blocks, and basement water intrusion that requires careful inspection.',
    link: '/basement-crawl-space-inspection-madison-wi',
    linkLabel: 'Explore Basement & Crawl Space Inspections',
  },
  {
    icon: ShieldAlert,
    title: 'Winter Ice Dams & Attic Airflow',
    subtitle: 'Thermal Bypass & Roof Degradation',
    description:
      'Warm indoor air escaping into under-insulated attic spaces melts snowpack on upper roof slopes. The water refreezes at cold eaves, creating ice dams that force water under shingles into ceiling cavities and wall framing.',
    link: '/attic-roof-inspection-madison-wi',
    linkLabel: 'Learn About Attic & Roof Structure Evaluations',
  },
  {
    icon: Droplets,
    title: 'High Radon Gas in Glacial Soils',
    subtitle: 'Rock & Dane County Zone 1 Concern',
    description:
      'Glacial deposits throughout Southern Wisconsin naturally generate elevated concentrations of odorless radon gas. Radon is the leading cause of lung cancer among non-smokers, making continuous electronic radon testing essential.',
    link: '/radon-testing-madison-wi',
    linkLabel: 'View Certified Radon Testing Information',
  },
  {
    icon: Zap,
    title: 'Historic & Mid-Century Wiring',
    subtitle: 'Electrical Safety & Aging Infrastructure',
    description:
      'Many communities around Madison, Janesville, and Edgerton feature vintage homes with ungrounded outlets, active knob-and-tube wiring, cloth-covered conductors, or obsolete electrical service panels that present modern safety concerns.',
    link: '/electrical-inspection-madison-wi',
    linkLabel: 'Inspect Electrical Systems & Panels',
  },
];

const INSPECTION_SYSTEMS = [
  {
    title: 'Foundation & Structural Systems',
    icon: Layers,
    items: [
      'Poured concrete, block, and stone foundation walls',
      'Structural columns, support posts, and carrying beams',
      'Floor joists, subflooring, and sill plate integrity',
      'Crawl space vapor barriers, ventilation, and soil clearance',
      'Efflorescence, moisture penetration, and settlement cracks',
    ],
  },
  {
    title: 'Roofing, Attics & Exterior Drainage',
    icon: House,
    items: [
      'Roof covering shingles, flashing, and valley transitions',
      'Chimney masonry, crown condition, and flue caps',
      'Soffit, ridge, and gable attic ventilation airflow',
      'Attic insulation depth, thermal R-value, and exhaust ducting',
      'Gutters, downspouts, and perimeter ground grading slopes',
    ],
  },
  {
    title: 'Electrical Distribution & Service',
    icon: Zap,
    items: [
      'Main service panel amperage and entrance cables',
      'Circuit breaker sizing matched to conductor wire gauge',
      'Panel bonding, system grounding, and ground rods',
      'GFCI & AFCI safety receptacle verification',
      'Testing outlets for correct polarity, grounding, and safety',
    ],
  },
  {
    title: 'Plumbing & Water Heating Systems',
    icon: Droplets,
    items: [
      'Visible supply piping (copper, PEX, galvanized checks)',
      'Waste drainage lines, traps, and vent stacks',
      'Water heater capacity, age, burner, and TPR relief valve',
      'Sump pump operation, float travel, and check valves',
      'Functional flow and drainage at all fixtures and faucets',
    ],
  },
  {
    title: 'Heating & Air Conditioning (HVAC)',
    icon: Thermometer,
    items: [
      'Furnace and boiler operational checks and burner chambers',
      'Carbon monoxide risk and flue draft ventilation',
      'Air conditioning compressor, lineset, and temperature delta',
      'Ductwork connections, insulation, and airflow balance',
      'Thermostat functionality and filter maintenance condition',
    ],
  },
  {
    title: 'Interiors, Windows & Life Safety',
    icon: ShieldCheck,
    items: [
      'Interior walls, ceilings, and flooring conditions',
      'Thermal windows, double-hung sash balance, and latches',
      'Exterior door weatherstripping and threshold seals',
      'Stairway stringers, tread depth, and handrail stability',
      'Smoke alarm and carbon monoxide detector placement',
    ],
  },
];

const REPORT_FEATURES = [
  {
    title: 'Color-Coded Defect Categories',
    description:
      'Items are sorted into intuitive tiers: Safety Hazards, Major Defects, Recommended Repairs, and Routine Maintenance.',
  },
  {
    title: 'High-Resolution Photos & Annotations',
    description:
      'Clear arrows, highlight rings, and side-by-side thermal images show you exactly what is wrong and where it is located.',
  },
  {
    title: 'Interactive Repair Request Tool',
    description:
      'Easily generate an executive punch list with one click to share directly with your realtor, sellers, or contractors.',
  },
  {
    title: 'Accessible on Mobile & Desktop',
    description:
      'Read your report on your smartphone, tablet, or laptop anytime. Downloadable as a clean, print-ready PDF.',
  },
];

const EXTENDED_FAQS = [
  {
    question: 'How do I choose the best home inspector in Madison, WI and South Central Wisconsin?',
    answer:
      'Look for a state-licensed, unbiased inspector who does not perform repairs or mitigation (preventing any conflict of interest), uses advanced diagnostics like infrared thermal imaging and continuous radon monitors, and provides same-day digital reports. WISCo Inspections is led by Phil Jackson (WI License #3302-106) with a 4.9★ Google rating across 87 verified reviews.',
  },
  {
    question: 'What is the typical home inspection cost in Madison, WI?',
    answer:
      'Home inspection pricing in the Madison area depends on the square footage, age of the property, foundation type (basement vs. crawl space), and any specialized add-ons requested (such as continuous radon testing or mold air sampling). We believe in transparent, upfront quotes with no surprise fees. Call (608) 642-1112 to get an immediate, exact quote for your property.',
  },
  {
    question: 'What does a home inspection include in Wisconsin?',
    answer:
      'A comprehensive Wisconsin home inspection evaluates over 400 accessible checkpoints across the entire property. This includes the roof, exterior drainage, foundation walls, grading, attic framing and insulation, electrical distribution panels and branch wiring, plumbing supply and waste lines, heating and cooling (HVAC) systems, water heaters, and built-in appliances.',
  },
  {
    question: 'Do you offer a home inspection checklist for first-time buyers?',
    answer:
      'Yes! We specialize in working with first-time homebuyers. During our on-site walk-through, inspector Phil Jackson guides you through the property, demonstrating the main emergency shut-offs (water, gas, electric), explaining maintenance cycles, and categorizing findings into safety hazards, major defects, and routine preventative upkeep.',
  },
  {
    question: 'Should I get a pre-listing home inspection before selling my Wisconsin home?',
    answer:
      'A pre-listing inspection gives sellers significant advantages. Identifying repair needs and deferred maintenance before putting your home on the MLS gives you time to complete repairs with your own contractors at normal rates, avoids last-minute buyer renegotiations, and helps substantiate your asking price with a clean disclosure report.',
  },
  {
    question: 'When should I test a home for radon in Wisconsin?',
    answer:
      'Radon testing is strongly recommended whenever purchasing a home in Wisconsin, as Dane, Rock, and surrounding counties are classified by the EPA as High Radon Potential Zones (Zone 1). You should also test every two years, before finishing a basement, or after major energy-efficiency upgrades. We conduct 48-hour continuous electronic radon testing.',
  },
  {
    question: 'What are the signs of hidden mold in a Wisconsin home?',
    answer:
      'Common warning signs include persistent musty or earthy odors, visible discoloration or staining along drywall and baseboards, white powdery efflorescence on basement masonry, peeling paint, or past history of roof, plumbing, or ice dam leaks. Our mold testing combines moisture meter diagnostics with laboratory air spore trap and swab sampling.',
  },
  {
    question: 'What is involved in a home inspection for older houses in Wisconsin?',
    answer:
      'Older and historic homes (pre-1975) throughout Madison, Janesville, and Edgerton require specialized scrutiny for ungrounded circuits, knob-and-tube or cloth wiring, galvanized plumbing pipes, cast iron drain lines, structural beam deflection, and stone or concrete block foundation settlement.',
  },
  {
    question: 'Is a home inspection needed for new construction in Wisconsin?',
    answer:
      'Yes. Municipal code inspectors verify only minimum building codes at specific rough-in stages and spend very little time on overall finish quality. An independent inspection evaluates insulation completeness in attics, HVAC duct seals, flashing at roof penetrations, drainage slope, and plumbing fixture installation.',
  },
  {
    question: 'When should I schedule an 11-month builder warranty inspection?',
    answer:
      'Schedule your warranty inspection during month 10 or 11 of your first year of ownership. This allows inspector Phil Jackson to thoroughly document framing settlement, drywall pops, exterior grade slope, and mechanical issues, giving your builder ample time to perform repairs before the 1-year warranty expires.',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'WISCo Inspections | Professional Home Inspector in Wisconsin',
    description:
      'Professional home inspection and environmental testing across Madison and South Central Wisconsin. Meticulous 400+ point evaluations by licensed inspector Phil Jackson. Call (608) 642-1112.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HomeInspector',
      name: 'WISCo Inspections, LLC',
      telephone: '+1-608-642-1112',
      url: SITE_URL,
      hasMap: BUSINESS.mapsUrl,
      sameAs: [BUSINESS.mapsUrl],
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.addressCity,
        addressRegion: BUSINESS.addressState,
        postalCode: BUSINESS.addressZip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.8364,
        longitude: -89.0734,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '87',
      },
    },
  });

  return (
    <>
      {/* 1. Main Service Introduction & Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={PHOTOS.heroInspector}
          alt="Home inspector examining the interior of a residential home"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/95 to-brand-800/80" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-gold-400 backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Madison, WI &amp; South Central Wisconsin
            </span>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/80 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-gold hover:bg-navy"
            >
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <span className="font-bold text-gold-400">4.9 ★</span>
              <span className="text-white/80">({REVIEWS_OVERVIEW.totalReviews} Google Reviews)</span>
            </a>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Home Inspections in Madison &amp; South Central Wisconsin
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/90">
            <p>
              WISCo Inspections helps homebuyers and homeowners understand the condition of their properties through
              professional home inspection services across Madison and surrounding South Central Wisconsin communities.
            </p>
            <p>
              Whether you are purchasing an existing home, preparing to sell your property, or looking for additional
              testing such as radon or mold, a thorough inspection can help you make informed decisions. Our inspection
              process focuses on identifying visible concerns, documenting important findings, and explaining the
              condition of the home's major systems.
            </p>
            <p>
              From the foundation and basement to the roof, attic, electrical components and other accessible areas,
              WISCo Inspections provides information that helps clients better understand their properties.
            </p>
          </div>

          {/* Keyword Focus Pill Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-gold-400">Target Focus:</span>
            <Link to="/home-inspection-madison-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Home Inspector Madison WI
            </Link>
            <Link to="/buyer-home-inspection-madison-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Buyer Home Inspection
            </Link>
            <Link to="/radon-testing-madison-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Radon Testing Wisconsin
            </Link>
            <Link to="/pre-listing-inspection-madison-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Pre-Listing Inspection
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Explore All 10 Services
            </Link>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 md:grid-cols-4 lg:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 p-4 backdrop-blur-xs">
                <p className="text-3xl font-extrabold text-gold-400 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-white">{stat.label}</p>
                <p className="text-xs text-white/70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Choose WISCo Inspections? */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The WISCo Standard</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Choose WISCo Inspections?
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              A home inspection is only as good as the thoroughness, diagnostic technology, and objectivity of the inspector.
              Here is how inspector Phil Jackson protects your Wisconsin real estate investment:
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col rounded-2xl border border-navy-100 bg-mist p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:bg-white hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-400 shadow-sm transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Offered (All 10 Specialized Scopes) */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Complete Service Catalog</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                10 Specialized Inspection Services
              </h2>
              <p className="mt-4 text-base text-ink/75">
                Targeting separate keyword clusters for every property need. We perform testing and objective evaluation only—never
                remediation or mitigation—ensuring unbiased findings for buyers and homeowners.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-brand hover:text-white"
            >
              View Full Services Page <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How the Inspection Process Works */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Simple &amp; Predictable</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How the Inspection Process Works
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              From your initial call to closing day, we keep the process transparent, communicative, and aligned with your real estate timeline.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {HOME_PROCESS.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col justify-between rounded-xl border border-navy-100 bg-mist p-6 shadow-card"
              >
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-navy">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.body}</p>
                </div>
                <div className="mt-4 border-t border-navy-100 pt-3 text-xs font-semibold text-brand">
                  Step {index + 1} of 5
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Meet the Inspector: Phil Jackson */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <UserCheck className="h-4 w-4" aria-hidden="true" />
                <span>Wisconsin Licensed Home Inspector #3302-106</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Meet Your Inspector: Phil Jackson
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Hi, I'm Phil Jackson, founder and lead inspector at WISCo Inspections, LLC. As a Wisconsin licensed home
                inspector and proud owner-operator, I treat every home evaluation as if my own family were buying the property.
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                With over 85+ verified five-star Google reviews and hundreds of residential inspections completed across Madison,
                Edgerton, Janesville, and surrounding communities, my priority is to provide thorough, objective evaluations
                and clear explanations you can actually understand and use.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-navy">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  <span><strong>Independent &amp; Objective:</strong> Zero repair conflicts, remediation, or contractor upsells.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  <span><strong>Personalized Walk-Through:</strong> On-site explanations and emergency shut-off locations.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  <span><strong>Fast Digital Reports:</strong> Delivered within 24 hours with annotated photos and summaries.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CallButton size="md" label={`Call Phil at ${BUSINESS.phoneDisplay}`} />
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
                >
                  Read Inspector Bio &amp; Story <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-navy-100 shadow-lift">
                <img
                  src={PHOTOS.outdoorInspector}
                  alt="Wisconsin Home Inspector Phil Jackson on site with inspection equipment"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-navy-100 bg-white p-5 shadow-card hidden sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy font-bold">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-extrabold text-navy">4.9 ★ Rating</p>
                    <p className="text-xs text-ink/70">87 Verified Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials (4.9★, 87 Reviews) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </span>
                <span>Verified Google Reviews</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                4.9 ★ Rating Based on {REVIEWS_OVERVIEW.totalReviews} Real Client Reviews
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink/75">
                Read authentic, unedited feedback from Wisconsin home buyers, sellers, and families who trusted inspector
                Phil Jackson and WISCo Inspections, LLC.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-5 py-2.5 text-sm font-bold text-brand shadow-sm transition hover:bg-brand hover:text-white"
              >
                Read All {REVIEWS_OVERVIEW.totalReviews} Reviews on Google <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:bg-gold-400"
              >
                Write a Review
              </a>
            </div>
          </div>

          {/* Popular Google Review Topics */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-y border-navy-100 py-4">
            <span className="text-xs font-bold uppercase tracking-wider text-ink/60">Frequently Mentioned:</span>
            {REVIEWS_OVERVIEW.topics.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-xs border border-navy-100"
              >
                <span>{t.label}</span>
                <span className="rounded-full bg-navy/10 px-1.5 py-0.5 text-[10px] text-ink/70">{t.count}</span>
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {REAL_REVIEWS.map((r) => (
              <div
                key={r.author}
                className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-mist p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-bold text-brand text-sm">
                        {r.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-navy leading-tight">{r.author}</p>
                        <p className="text-xs text-ink/60">
                          {r.isLocalGuide && <span className="font-semibold text-amber-700">Local Guide · </span>}
                          {r.reviewCountText || 'Verified Review'}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-ink/50">{r.timeAgo}</span>
                  </div>

                  <div className="mt-4 flex gap-1 text-gold">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink/80">"{r.quote}"</p>
                </div>

                <div className="mt-6 border-t border-navy-100 pt-3">
                  {r.service && (
                    <span className="inline-block rounded-md bg-navy/5 px-2.5 py-1 text-xs font-semibold text-navy">
                      {r.service}
                    </span>
                  )}
                  {r.positiveTraits && (
                    <p className="mt-2 text-[11px] text-ink/60">
                      <span className="font-semibold text-brand">Positive:</span> {r.positiveTraits.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Cities Served (Madison WI + 9 Surrounding Communities) */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Service Areas &amp; City Hubs</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                10 Communities We Proudly Serve Across Wisconsin
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
                Headquartered in Edgerton and actively inspecting across Madison, Dane, Rock, and Jefferson counties.
                Select your city below to access localized inspection services and regional guidance.
              </p>
            </div>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-brand hover:text-white"
            >
              Explore All 10 Service Areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Primary City Spotlight: Madison, WI */}
          <div className="mt-8 rounded-2xl border-2 border-gold/40 bg-white p-6 shadow-card md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  Primary Regional Target City
                </span>
                <h3 className="mt-2 text-2xl font-bold text-navy">Home Inspector Madison WI</h3>
                <p className="mt-1 text-sm text-ink/75">
                  Complete property inspection, buyer evaluations, radon testing, and thermal imaging across Madison and Dane County.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/home-inspection-madison-wi"
                  className="rounded-full bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-brand transition"
                >
                  Home Inspection Madison
                </Link>
                <Link
                  to="/buyer-home-inspection-madison-wi"
                  className="rounded-full border border-navy/20 bg-mist px-4 py-2 text-xs font-bold text-navy hover:bg-navy hover:text-white transition"
                >
                  Buyer Inspection
                </Link>
                <Link
                  to="/radon-testing-madison-wi"
                  className="rounded-full border border-navy/20 bg-mist px-4 py-2 text-xs font-bold text-navy hover:bg-navy hover:text-white transition"
                >
                  Radon Testing
                </Link>
                <Link
                  to="/mold-testing-madison-wi"
                  className="rounded-full border border-navy/20 bg-mist px-4 py-2 text-xs font-bold text-navy hover:bg-navy hover:text-white transition"
                >
                  Mold Testing
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${SERVICES[0].slug}-${loc.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-brand group-hover:text-white transition">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {loc.isPrimary && (
                      <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                        Primary Base
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy group-hover:text-brand transition">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink/65">{loc.county}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand transition group-hover:text-navy">
                  View {loc.city} inspections <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          {/* Direct Internal Link Anchors (Section 7A) */}
          <div className="mt-8 rounded-xl border border-navy-100 bg-white p-5 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
              Quick Wisconsin City Inspection Links:
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link to="/home-inspection-madison-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Madison WI
              </Link>
              <Link to="/home-inspection-edgerton-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Edgerton WI
              </Link>
              <Link to="/home-inspection-janesville-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Janesville WI
              </Link>
              <Link to="/home-inspection-beloit-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Beloit WI
              </Link>
              <Link to="/home-inspection-sun-prairie-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Sun Prairie WI
              </Link>
              <Link to="/home-inspection-fitchburg-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Fitchburg WI
              </Link>
              <Link to="/home-inspection-verona-wi" className="rounded-full bg-mist px-3 py-1 font-semibold text-brand hover:bg-brand hover:text-white transition">
                Home Inspection Verona WI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (Targeting Long-Tail Keywords) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Wisconsin Property FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-ink/75">
              Targeted guidance on inspection costs, checklists, older homes, radon timing, and 11-month builder warranties in Wisconsin.
            </p>
          </div>
          <div className="mt-12">
            <FaqList faqs={EXTENDED_FAQS} />
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-ink/75">
              Have a specific question about your property?{' '}
              <a href={BUSINESS.phoneHref} className="font-bold text-brand hover:underline">
                Call inspector Phil Jackson directly at {BUSINESS.phoneDisplay}
              </a>
              —we are happy to help!
            </p>
          </div>
        </div>
      </section>

      {/* 9. Recent Inspection Insights (Wisconsin Climate, Structural & Environmental Guidance) */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Field Insights &amp; Regional Expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Recent Inspection Insights &amp; Wisconsin Property Challenges
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Wisconsin’s sub-zero winters, humid summers, and glacial soils present specific structural and environmental
              risks that generic checklists often overlook.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {RECENT_INSIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition duration-300 hover:border-gold hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-gold-600">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-ink/80">{item.description}</p>
                  </div>
                  <div className="mt-6 border-t border-navy-100 pt-4">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-navy transition"
                    >
                      {item.linkLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 400+ Systems Checked Reference */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">400+ Point Evaluation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Major Systems Evaluated During Your Inspection
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              We leave no stone unturned. Our non-invasive visual evaluations thoroughly inspect the primary components that
              determine a home’s safety, structural integrity, and longevity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INSPECTION_SYSTEMS.map((sys) => {
              const Icon = sys.icon;
              return (
                <div key={sys.title} className="rounded-2xl border border-navy-100 bg-mist p-7 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-navy">{sys.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {sys.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Digital Reporting Deliverable */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">Actionable Clarity</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Modern Digital Inspection Reports Built for Action
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Nobody wants to sift through a confusing 60-page PDF filled with boilerplate disclaimers. Our modern digital
                reports are formatted clearly so you and your real estate agent can immediately identify safety hazards and
                negotiate repairs with confidence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {REPORT_FEATURES.map((feat) => (
                  <div key={feat.title} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                    <h3 className="text-base font-bold text-gold-400">{feat.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">{feat.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <CallButton size="md" label="Call to Discuss Your Report" />
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lift backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-navy font-bold text-sm">
                    WISCo
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Sample Property Inspection Summary</p>
                    <p className="text-xs text-white/70">Delivered within 24 Hours via Email &amp; SMS</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Ready to Share
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-3.5">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                    <AlertCircle className="h-4 w-4" /> Safety Hazard
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">Electrical Panel: Double-Tapped 20A Circuit Breaker</p>
                  <p className="mt-0.5 text-xs text-white/70">Requires licensed electrician review before closing.</p>
                </div>

                <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Wrench className="h-4 w-4" /> Action Item
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">Plumbing: Sump Pump Discharge Check Valve Missing</p>
                  <p className="mt-0.5 text-xs text-white/70">Risk of groundwater backflow into basement pit.</p>
                </div>

                <div className="rounded-lg border border-blue-500/30 bg-blue-950/20 p-3.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <Clock className="h-4 w-4" /> Maintenance Advice
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">Exterior: Extend Downspouts 6 Feet Away From Foundation</p>
                  <p className="mt-0.5 text-xs text-white/70">Prevents hydrostatic pressure on basement masonry.</p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-white/60">
                Full reports include interactive photo galleries, thermal overlays, and repair cost estimate guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Strong Contact and Booking Section */}
      <CallCtaBand
        heading="Ready to Schedule Your Wisconsin Home Inspection?"
        body="Call inspector Phil Jackson at (608) 642-1112 to discuss your property, confirm immediate availability, and receive a prompt quote."
      />
    </>
  );
}
