import { Compass } from 'lucide-react';
import CallButton from '@/components/CallButton';
import { Link } from '@/lib/router';
import { usePageMeta } from '@/lib/seo';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | WISCo Inspections, LLC',
    description: 'The page you were looking for could not be found. Return to WISCo Inspections, LLC home inspection services.',
    path: '/',
  });

  return (
    <section className="flex min-h-[70vh] items-center bg-mist py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold-400">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-brand">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">This page could not be found</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          The address may be mistyped or the page may have moved. You can return to the homepage or call us for help finding
          the inspection you need.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-4 text-base font-semibold text-white transition hover:bg-navy-600"
          >
            Back to Homepage
          </Link>
          <CallButton variant="navy" size="lg" label="Call (608) 642-1112" />
        </div>
      </div>
    </section>
  );
}
