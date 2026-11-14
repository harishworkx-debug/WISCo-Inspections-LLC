import CallCtaBand from '@/components/CallCtaBand';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { PHOTOS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { usePageMeta } from '@/lib/seo';

export default function ServicesPage() {
  usePageMeta({
    title: 'Home Inspection Services in Wisconsin | WISCo Inspections, LLC',
    description:
      'Explore home inspection services from WISCo Inspections, LLC, including buyer inspections, pre-listing inspections, radon testing, and mold testing.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        eyebrow="Inspection Services"
        title="Home inspection services built around your decision"
        lead="Whether you are buying, selling, or simply want to understand your home, choose the service that fits and call to discuss it."
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
      <CallCtaBand heading="Not Sure Which Inspection You Need?" body="Call WISCo Inspections and we will talk through your property and goals." />
    </>
  );
}
