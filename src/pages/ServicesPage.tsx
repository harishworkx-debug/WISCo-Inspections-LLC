import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { usePageMeta } from '@/lib/seo';

export default function ServicesPage() {
  usePageMeta({
    title: '10 Professional Home Inspection Services in Wisconsin | WISCo Inspections, LLC',
    description:
      'Explore all 10 inspection services from WISCo Inspections, LLC, including buyer home inspections, pre-listing evaluations, radon testing, mold testing, electrical, basement & crawl space, attic & roof, thermal imaging, and 11-month builder warranty inspections.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        eyebrow="Inspection Services"
        title="10 Inspection Services Built Around Your Needs"
        lead="Whether you are buying a home, selling, building new, or troubleshooting moisture and energy concerns, we offer dedicated inspection scopes tailored to Wisconsin properties."
        image={{ src: PHOTOS.outdoorInspector, alt: 'Home inspector with a clipboard performing an outdoor property inspection' }}
      />
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CallCtaBand heading="Not Sure Which Inspection You Need?" body="Call WISCo Inspections at (608) 642-1112 and we will help you choose the right inspection for your property." />
    </>
  );
}
