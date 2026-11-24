import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-100 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(23,40,61,0.12)] backdrop-blur md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3.5 text-base font-bold text-white shadow-md transition active:scale-[0.98]"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        24/7 Emergency: {BUSINESS.phoneDisplay}
      </a>
    </div>
  );
}
