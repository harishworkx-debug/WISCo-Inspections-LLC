import { Eye, ListChecks, MessageCircle, ShieldCheck } from 'lucide-react';
import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import CallButton from '@/components/CallButton';
import { PHOTOS } from '@/data/business';
import { usePageMeta } from '@/lib/seo';

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Independence',
    body: 'Our role is to document what we observe about a property, and to explain it clearly.',
  },
  {
    icon: Eye,
    title: 'Careful observation',
    body: 'We evaluate accessible areas methodically, including the roof, structure, exterior, interior, and major systems.',
  },
  {
    icon: ListChecks,
    title: 'Clear reporting',
    body: 'Findings are written so you can understand what was observed, what needs attention, and what it means for you.',
  },
  {
    icon: MessageCircle,
    title: 'Open conversation',
    body: 'Questions are welcome. Call us to talk through your property before anything is scheduled.',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About WISCo Inspections, LLC | Home Inspections in Wisconsin',
    description:
      'Learn about WISCo Inspections, LLC, a home inspection company serving Wisconsin, and our approach to independent, clear property evaluations.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A thoughtful approach to home inspections"
        lead="WISCo Inspections, LLC helps buyers, sellers, and homeowners understand the condition of residential properties in Wisconsin."
        image={{ src: PHOTOS.crawlSpace, alt: 'Inspector checking a crawl space entrance during a home inspection' }}
      >
        <CallButton size="lg" />
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Philosophy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Information you can act on</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                A home inspection should leave you better informed, not confused. We believe the most useful inspection is one
                that explains what was seen, why it matters, and what questions to ask next.
              </p>
              <p>
                Every property has a history and a condition of its own. We approach each home individually, based on the
                inspection scope agreed during your phone call.
              </p>
            </div>
          </div>
          <img
            src={PHOTOS.doorframe}
            alt="Inspector with a clipboard checking the alignment of a doorframe"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full self-center rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Approach</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">How we evaluate a property</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/80">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallCtaBand heading="Talk With WISCo Inspections" body="Call to discuss your property, the inspection you need, and what to expect." />
    </>
  );
}
