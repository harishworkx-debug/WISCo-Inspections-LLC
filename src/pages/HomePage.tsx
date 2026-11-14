import { ArrowRight, Eye, FileText, MapPin, ShieldCheck } from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS } from '@/data/business';
import { PRIMARY_LOCATION, SERVICE_LOCATIONS } from '@/data/locations';
import { HOME_PROCESS, SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const TRUST_POINTS = [
  { icon: ShieldCheck, label: 'Independent, visual evaluation' },
  { icon: Eye, label: 'Thorough review of major systems' },
  { icon: FileText, label: 'Clear, useful digital reporting' },
];

const HOME_FAQS = [
  {
    question: 'What is a home inspection?',
    answer:
      'A home inspection is a visual evaluation of the accessible systems and components of a residential property. It documents observed conditions so you can make informed decisions before buying, selling, or remodeling.',
  },
  {
    question: 'Is a home inspection a guarantee or warranty?',
    answer:
      'No. An inspection is an objective visual evaluation of accessible components at the time of the inspection. It is not an insurance policy or guarantee against future wear or concealed defects.',
  },
  {
    question: 'Do I need to attend the inspection?',
    answer:
      'Attending is strongly recommended because the inspector can walk you through findings in person, demonstrate emergency shut-off locations, and answer your specific questions on site.',
  },
  {
    question: 'How can I prepare my home for an inspection?',
    answer:
      'Ensure clear access to the attic hatch, crawl space access, electrical service panel, water heater, and furnace. Unlock any gates or exterior access doors.',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'WISCo Inspections, LLC | Professional Home Inspections in Wisconsin',
    description:
      'WISCo Inspections, LLC provides professional home inspection services in Edgerton, Janesville, Madison, and across Southern Wisconsin. Call (608) 642-1112.',
    path: '/',
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={PHOTOS.heroInspector}
          alt="Home inspector examining the interior of a residential home"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/90 to-brand-700/70" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-gold-400">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Serving 10 Communities Across Rock, Dane & Jefferson Counties
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Home Inspection Services in Wisconsin
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Make confident property decisions with WISCo Inspections, LLC. Based in Edgerton, we offer comprehensive buyer,
            seller, environmental, and specialized inspections across Southern Wisconsin.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton size="lg" />
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Explore All 10 Services
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-8">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Inspection Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">10 Comprehensive Inspection Services</h2>
              <p className="mt-4 text-base text-ink/75">
                From pre-purchase evaluations to certified radon and mold testing, choose the exact inspection scope you need.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-brand transition hover:text-navy"
            >
              View detailed services breakdown <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">How it works</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {HOME_PROCESS.map((step, index) => (
              <li key={step.title} className="border-t-2 border-gold pt-5">
                <span className="text-sm font-bold text-brand">Step {index + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Service Areas</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">10 Communities We Proudly Serve</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
                Based in {PRIMARY_LOCATION.name}, WISCo Inspections covers homes across Rock, Dane, and Jefferson counties. Select your community below to view local inspections.
              </p>
            </div>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-brand hover:text-white"
            >
              Explore All Service Areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                        Base
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy group-hover:text-brand transition">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink/65">{loc.county}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand transition group-hover:text-navy">
                  View inspections <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">Common questions</h2>
          <div className="mt-12">
            <FaqList faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CallCtaBand />
    </>
  );
}
