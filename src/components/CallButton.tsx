import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

type CallButtonProps = {
  label?: string;
  variant?: 'gold' | 'navy' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
};

const variants = {
  gold: 'bg-gold text-navy hover:bg-gold-400 shadow-[0_6px_18px_rgba(217,164,65,0.35)]',
  navy: 'bg-navy text-white hover:bg-navy-600',
  outline: 'border-2 border-white/80 text-white hover:bg-white hover:text-navy',
};

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
};

export default function CallButton({ label, variant = 'gold', size = 'md', className = '' }: CallButtonProps) {
  return (
    <a
      href={BUSINESS.phoneHref}
      aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phoneDisplay}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label ?? `Call ${BUSINESS.phoneDisplay}`}</span>
    </a>
  );
}
