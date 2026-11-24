import CallButton from '@/components/CallButton';
import { BUSINESS } from '@/data/business';

type CallCtaBandProps = {
  heading?: string;
  body?: string;
};

export default function CallCtaBand({
  heading = 'Need Emergency Water Extraction or Mold Remediation?',
  body = 'Call WISCo Mold & Water Damage, LLC for 24/7 emergency dispatch and certified mitigation.',
}: CallCtaBandProps) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg text-white/90">{body}</p>
          <p className="mt-6 text-2xl font-bold text-white">{BUSINESS.phoneDisplay}</p>
        </div>
        <CallButton size="lg" variant="gold" label={`Call ${BUSINESS.phoneDisplay}`} />
      </div>
    </section>
  );
}
