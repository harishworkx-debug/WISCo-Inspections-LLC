import { ArrowRight } from 'lucide-react';
import CallButton from '@/components/CallButton';
import { PRIMARY_LOCATION } from '@/data/locations';
import type { ServiceContent } from '@/data/services';
import { Link } from '@/lib/router';

export default function ServiceCard({ service }: { service: ServiceContent }) {
  const Icon = service.icon;
  const href = `/${service.slug}-${PRIMARY_LOCATION.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image.src}
          alt={service.image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy transition group-hover:text-brand">
          <Link to={href} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
            {`${service.name} in ${PRIMARY_LOCATION.city}`}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-ink/80">{service.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-brand transition group-hover:text-navy">
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
        <CallButton variant="navy" size="md" className="relative z-10 mt-5 w-full" label="Call to Discuss Your Inspection" />
      </div>
    </article>
  );
}
