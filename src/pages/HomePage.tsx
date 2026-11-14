import { MapPin, ShieldCheck, Eye, FileText } from 'lucide-react';
import CallButton from '@/components/CallButton';
import CallCtaBand from '@/components/CallCtaBand';
import FaqList from '@/components/FaqList';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS } from '@/data/business';
import { PRIMARY_LOCATION } from '@/data/locations';
import { HOME_PROCESS, SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

const TRUST_POINTS = [
  { icon: ShieldCheck, label: 'Independent, visual evaluation' },
  { icon: Eye, label: 'Thorough review of major systems' },
  { icon: FileText, label: 'Clear, useful reporting' },
];

const HOME_FAQS = [
  {
    question: 'What is a home inspection?',
    answer:
      'A home inspection is a visual evaluation of the accessible systems and components of a residential property. It documents observed conditions so you can make informed decisions.',
  },
  {
    question: 'Is a home inspection a guarantee?',
    answer:
      'No. An inspection is a visual evaluation of accessible components at the time of the inspection. It is not a guarantee against future or concealed defects.',
  },
  {
    question: 'Do I need to attend the inspection?',
    answer:
      'Attending is often helpful because the inspector can explain findings in person. Call to confirm the arrangements for your inspection.',
  },
  {
    question: 'How can I prepare my home for an inspection?',
    answer:
      'Make sure the inspector can reach accessible areas such as the attic, garage, electrical panel, and crawl space entrance. Call to ask about any specific preparation for your property.',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'WISCo Inspections, LLC | Professional Home Inspections in Wisconsin',
    description:
      'WISCo Inspections, LLC provides professional home inspection services in Edgerton, Wisconsin. Call (608) 642-1112 to discuss your inspection needs.',
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
            Serving {PRIMARY_LOCATION.name} and Wisconsin
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Home Inspection Services in {PRIMARY_LOCATION.city}, WI
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Make informed property decisions with WISCo Inspections, LLC. Call to discuss your inspection needs and service
            availability.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton size="lg" />
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Explore Inspection Services
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
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Home Inspection Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Choose the inspection that fits</h2>
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Service Areas</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">Inspections in {PRIMARY_LOCATION.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">Call to confirm coverage for your property.</p>
            </div>
          </div>
          <Link
            to={`/${SERVICES[0].slug}-${PRIMARY_LOCATION.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lift"
          >
            <img
              src={PHOTOS.outdoorInspector}
              alt="Home inspector with a clipboard performing an outdoor property inspection"
              loading="lazy"
              decoding="async"
              className="h-24 w-32 shrink-0 rounded-xl object-cover"
            />
            <span className="flex-1">
              <span className="block text-lg font-bold text-navy">Home Inspection in {PRIMARY_LOCATION.city}, WI</span>
              <span className="mt-1 block text-sm text-ink/70">See all inspections available in this area</span>
            </span>
            <span aria-hidden="true" className="text-2xl text-brand transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
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
