import { useState } from 'react';
import { House, Menu, Phone, ShieldCheck, X } from 'lucide-react';
import { LANDING_CONFIG } from '../data/landingData';

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top micro-bar */}
      <div className="bg-navy text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              {LANDING_CONFIG.licenseDisplay}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline">Serving {LANDING_CONFIG.locationFull} & {LANDING_CONFIG.serviceRegion}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-300">{LANDING_CONFIG.hours}</span>
            <a
              href={LANDING_CONFIG.phoneHref}
              className="font-bold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              Direct: {LANDING_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Text-Based Identity ONLY: SERVICE + LOCATION with niche icon */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-amber-400 shadow-md group-hover:bg-brand transition-colors">
              <House className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-navy group-hover:text-brand transition-colors tracking-tight leading-tight">
                {LANDING_CONFIG.nicheTitle} in {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState}
              </span>
              <span className="text-xs text-slate-700 font-medium">
                Licensed Residential Property Inspections
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LANDING_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white shadow hover:bg-brand-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{LANDING_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-navy hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <a
                href={LANDING_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand px-4 py-3 text-base font-bold text-white shadow hover:bg-brand-700"
              >
                <Phone className="h-5 w-5" />
                Call Inspector: {LANDING_CONFIG.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Request Online Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
