import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  FileCheck,
  House,
  Layers,
  MapPin,
  Phone,
  ShieldAlert,
  Star,
  Thermometer,
  Waves,
  Wind,
  Zap,
} from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import ServiceCard from '@/components/ServiceCard';
import { BUSINESS, MAPS_EMBED_SRC, PHOTOS, SITE_URL } from '@/data/business';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { REVIEWS_OVERVIEW } from '@/data/reviews';
import { HOME_PROCESS, SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const STATS = [
  { value: '24/7', label: 'Emergency Response', sub: 'Rapid dispatch across Southern WI' },
  { value: '4.9 ★', label: '87 Verified Reviews', sub: 'Top-rated mold & water mitigation' },
  { value: '100%', label: 'Certified Remediation', sub: 'IICRC-compliant safety standards' },
  { value: 'Direct', label: 'Insurance Billing', sub: 'We work with all major carriers' },
];

const VALUE_PILLARS = [
  {
    icon: Waves,
    title: '24/7 Emergency Water Extraction',
    description:
      'Water damage escalates every minute. Our rapid response crews arrive promptly with truck-mounted vacuum pumps and submersible units to extract standing water before secondary structural damage begins.',
  },
  {
    icon: ShieldAlert,
    title: 'Certified Mold Remediation',
    description:
      'We establish strict negative-pressure containment zones, operate commercial HEPA air scrubbers, safely remove colonized materials, and apply EPA-registered antimicrobials to permanently eradicate toxic mold colonies.',
  },
  {
    icon: Thermometer,
    title: 'Infrared Thermal Leak Detection',
    description:
      'We use high-resolution FLIR infrared thermal imaging cameras and digital moisture meters to locate hidden moisture trapped behind walls, under subfloors, and beneath tile showers without destructive demolition.',
  },
  {
    icon: FileCheck,
    title: 'Hassle-Free Insurance Billing',
    description:
      'We document every stage of your loss with moisture mapping logs, thermal photography, and industry-standard Xactimate itemized estimates, billing your homeowners insurance company directly.',
  },
];

const RESTORATION_SYSTEMS = [
  {
    title: 'Basement & Sump Pump Floods',
    icon: House,
    items: [
      'High-capacity standing water extraction & trash pumping',
      'Sump pump failure cleanup & backup systems assistance',
      'Antimicrobial washdown of concrete slabs & block walls',
      'Removal of saturated carpet, pad, and flood-cut drywall',
      'Industrial LGR dehumidifiers to dry dense masonry',
    ],
  },
  {
    title: 'Toxic Black Mold Removal',
    icon: ShieldAlert,
    items: [
      'Negative-air containment chambers with 6-mil poly barriers',
      'Continuous HEPA air filtration capturing 99.97% of spores',
      'Safe removal of contaminated drywall, insulation & paneling',
      'Antimicrobial timber sealing to inhibit fungal rebound',
      'Post-remediation air quality clearance testing verification',
    ],
  },
  {
    title: 'Burst Pipe & Plumbing Disasters',
    icon: Droplets,
    items: [
      'Emergency main water shut-off and containment',
      'Rapid extraction of pressurized winter burst pipe water',
      'Multi-level ceiling, wall cavity, and floor drying',
      'Moisture mapping behind tile, cabinetry & baseboards',
      'Thermal imaging documentation for immediate insurance claims',
    ],
  },
  {
    title: 'Crawl Space Encapsulation & Mold',
    icon: Layers,
    items: [
      'Standing water extraction & dirt floor re-grading',
      'Antimicrobial treatment of rotting floor joists & beams',
      'Removal of wet, contaminated fiberglass insulation batts',
      'Installation of 12-20 mil reinforced vapor barrier liners',
      'Dedicated low-temperature crawl space dehumidification',
    ],
  },
  {
    title: 'Attic Mold & Roof Leak Cleanup',
    icon: Wind,
    items: [
      'Remediation of black mold on plywood sheathing & rafters',
      'Ice dam moisture extraction and drying inside eaves',
      'Application of clear or white fungicidal protective coatings',
      'Removal of moisture-compressed blown-in insulation',
      'Bathroom exhaust duct inspection to ensure exterior venting',
    ],
  },
  {
    title: 'Commercial Structural Dehumidification',
    icon: Zap,
    items: [
      'Commercial Low Grain Refrigerant (LGR) dehumidifiers',
      'High-velocity axial air movers creating circular vortex airflow',
      'Specialty vacuum floor mat drying systems for hardwood',
      'Cabinet and wall cavity injection drying systems',
      'Daily digital psychrometric moisture logs until dry standard',
    ],
  },
];

const EXTENDED_FAQS = [
  {
    question: 'How fast can WISCo respond to an emergency water damage call?',
    answer:
      'We offer 24/7 emergency dispatch across Southern Wisconsin, including Edgerton, Janesville, Madison, Beloit, Stoughton, Sun Prairie, Fitchburg, and surrounding communities. For active flooding and pipe bursts, our emergency crews mobilize immediately with commercial extraction gear.',
  },
  {
    question: 'Does homeowners insurance cover water damage and mold remediation?',
    answer:
      'Yes, most homeowners insurance policies cover sudden and accidental water losses (such as frozen pipe bursts, water heater failures, or appliance leaks) as well as the resulting mold remediation. We work directly with your insurance adjuster, providing digital thermal images, drying logs, and itemized Xactimate estimates to ensure your claim is processed smoothly.',
  },
  {
    question: 'How long does structural drying take after a flood or water leak?',
    answer:
      'Residential structural drying typically takes between 3 to 5 days using commercial LGR dehumidifiers and high-velocity axial air movers. Our certified technicians take daily psychrometric moisture readings to verify that framing, subflooring, and concrete have completely returned to dry standard before removing equipment.',
  },
  {
    question: 'Why is toxic black mold (Stachybotrys) dangerous, and how is it removed?',
    answer:
      'Stachybotrys chartarum releases airborne mycotoxins that can cause severe respiratory distress, chronic coughing, sinus infections, and asthma attacks. We remove black mold under strict IICRC S520 guidelines: setting up airtight plastic containment zones with negative air pressure, running HEPA scrubbers, removing contaminated materials in sealed bags, and applying EPA-registered antimicrobial sealants.',
  },
  {
    question: 'Can you save wet hardwood floors and carpets after water damage?',
    answer:
      'Yes, if water extraction begins promptly! For hardwood, we use negative-pressure drying mats that draw moisture up through the wood pores, often restoring cupped boards. Clean water (Category 1) carpet can frequently be saved if dried within 24 to 48 hours, although the under-padding is typically replaced for sanitary reasons.',
  },
  {
    question: 'What are the warning signs of hidden mold in a Wisconsin home?',
    answer:
      'Key warning signs include a persistent earthy or sour musty odor, unexplained coughing or allergy symptoms at home, peeling wallpaper, yellow water staining on ceilings, white efflorescence salt crystals on basement block walls, or past history of plumbing or ice dam leaks. We pinpoint hidden mold using infrared thermal cameras and calibrated moisture meters.',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'WISCo Mold & Water Damage | 24/7 Water Damage Restoration & Mold Remediation Wisconsin',
    description:
      '24/7 Emergency water extraction, flood damage restoration, and certified mold remediation across Edgerton, Janesville, Madison, and Southern Wisconsin. Call (608) 642-1112 for immediate dispatch.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WaterDamageRestorationService',
      name: BUSINESS.name,
      alternateName: BUSINESS.shortName,
      telephone: '+1-608-642-1112',
      url: SITE_URL,
      hasMap: BUSINESS.mapsUrl,
      sameAs: [BUSINESS.mapsUrl],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.addressCity,
        addressRegion: BUSINESS.addressState,
        postalCode: BUSINESS.addressZip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.8352,
        longitude: -89.0675,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '87',
      },
    },
  });

  return (
    <>
      {/* 24/7 Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-md flex items-center justify-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span>24/7 Emergency Water Extraction &amp; Flood Response:</span>
        <a href={BUSINESS.phoneHref} className="underline hover:text-amber-200 transition">
          Call (608) 642-1112 Now
        </a>
      </div>

      {/* 1. Main Service Introduction & Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={PHOTOS.heroWaterDamage}
          alt="Professional water damage restoration and mold remediation in Wisconsin"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/95 to-brand-800/80" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-gold-400 backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Edgerton, Janesville, Madison &amp; Southern Wisconsin
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
              <span className="text-white/80">({REVIEWS_OVERVIEW.totalReviews} Verified Customer Reviews)</span>
            </a>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mold Remediation &amp; Water Damage Restoration in Wisconsin
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/90">
            <p>
              When water inundates your home or toxic mold threatens your indoor air quality, every hour matters.
              <strong className="text-white font-semibold"> WISCo Mold &amp; Water Damage</strong> provides 24/7 emergency water extraction,
              rapid structural drying, and certified mold removal across South Central Wisconsin.
            </p>
            <p>
              From winter burst pipes and sump pump basement floods to hidden black mold infestations behind walls and crawl spaces,
              our certified technicians deploy industrial HEPA air scrubbers, LGR dehumidifiers, and thermal imaging cameras
              to restore your property cleanly and safely.
            </p>
            <p>
              We bill directly to your homeowners insurance company and guide you through every step of the restoration process.
            </p>
          </div>

          {/* Quick Service Focus Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-gold-400">Emergency Services:</span>
            <Link to="/mold-remediation-madison-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Mold Remediation Madison WI
            </Link>
            <Link to="/water-damage-restoration-janesville-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Water Damage Restoration Janesville
            </Link>
            <Link to="/emergency-water-extraction-edgerton-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              24/7 Flood Extraction Edgerton
            </Link>
            <Link to="/basement-water-damage-stoughton-wi" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 transition">
              Basement Flood Cleanup
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton size="lg" label={`Call (608) 642-1112 - 24/7 Dispatch`} />
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

      {/* 2. Why Choose WISCo Mold & Water Damage? */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">The WISCo Restoration Standard</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Choose WISCo Mold &amp; Water Damage?
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Restoring a flooded home or remediating toxic mold requires specialized equipment, strict containment protocols,
              and meticulous psychrometric drying science. Here is why Wisconsin homeowners trust WISCo:
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
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold-400 shadow-md transition duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. All 10 Core Services Catalog */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Complete Remediation Catalog</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Comprehensive Mold &amp; Water Damage Services
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              From immediate water extraction to certified mold abatement and structural drying, explore our complete catalog of restoration services across Southern Wisconsin:
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-card transition hover:bg-brand hover:shadow-lift"
            >
              View Detailed Service Catalog <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The 5-Step Emergency Restoration Process */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Rapid Restoration Protocol</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our 5-Step Emergency Response &amp; Mitigation Process
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              We follow strict IICRC S500 water damage and S520 mold remediation standards to ensure your home is restored quickly and safely:
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_PROCESS.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-navy-100 bg-mist p-6 shadow-card transition hover:border-brand hover:shadow-lift"
              >
                <span className="text-3xl font-black text-gold-600/40">{p.step}</span>
                <h3 className="mt-2 text-base font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/75">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Major Systems Restored Reference */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Structural Solutions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Specialized Damage Restoration Solutions
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Every area of your home presents unique water and fungal risks. Here is how we mitigate specific damage zones:
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {RESTORATION_SYSTEMS.map((sys) => {
              const Icon = sys.icon;
              return (
                <div key={sys.title} className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
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

      {/* 6. Interactive Google Map Location & Service Area Spotlight */}
      <section className="bg-white py-20 lg:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <MapPin className="h-4 w-4" /> Headquarters &amp; Service Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Central Base in Edgerton, Serving All Southern Wisconsin
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Located centrally in <strong className="text-navy font-semibold">Edgerton, WI (53534)</strong>, WISCo Mold &amp; Water Damage dispatches emergency mitigation teams rapidly across Rock, Dane, and Jefferson counties.
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-bold text-navy">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>24/7 Emergency Dispatch Available</span>
                </div>
                <p className="text-xs text-slate-600">
                  Average response time: 45–60 minutes across Madison, Janesville, Stoughton, Sun Prairie, Beloit, Fitchburg, and Verona.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    Emergency Dispatch: {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl h-80 sm:h-96 w-full relative bg-slate-100">
                <iframe
                  title="WISCo Mold & Water Damage Location Map"
                  src={MAPS_EMBED_SRC}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                <span>📍 Edgerton, WI 53534</span>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Areas Grid */}
      <section className="bg-navy text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">10 Communities Served</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rapid Response Service Areas in Southern Wisconsin
            </h2>
            <p className="mt-4 text-lg text-white/80">
              We provide 24/7 flood extraction and certified mold remediation across 10 primary Southern Wisconsin cities:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/water-damage-restoration-${loc.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-gold-400 hover:bg-white/10"
              >
                <div className="font-bold text-white group-hover:text-gold-400 transition">{loc.name}</div>
                <div className="text-xs text-slate-300 mt-1">{loc.county}</div>
                <div className="text-[11px] text-emerald-400 mt-2 font-semibold">24/7 Emergency Dispatch</div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-white transition"
            >
              Explore all community damage profiles &amp; local service details →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Homeowner Answers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Frequently Asked Questions About Water Damage &amp; Mold
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Clear answers regarding emergency flood pumping, mold containment, insurance claims, and structural drying:
            </p>
          </div>

          <div className="mt-14 max-w-3xl mx-auto">
            <FaqList faqs={EXTENDED_FAQS} />
          </div>

          <div className="mt-12 text-center text-sm text-slate-600">
            Have an active water emergency or suspect toxic mold?{' '}
            <a href={BUSINESS.phoneHref} className="font-bold text-brand hover:underline">
              Call our 24/7 dispatch line directly at {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 9. Strong Contact & Booking Call-to-Action */}
      <CallCtaBand
        heading="Need Immediate Water Extraction or Mold Remediation?"
        body="Call WISCo Mold & Water Damage at (608) 642-1112 for 24/7 emergency dispatch, insurance guidance, and certified on-site mitigation."
      />
    </>
  );
}
