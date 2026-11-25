import { House, Phone, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG } from '../data/landingData';

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Identity Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                <House className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  {LANDING_CONFIG.nicheTitle} in {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState}
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  100% Residential Homeowner Restoration Services
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Providing 24/7 emergency water extraction, structural drying, and certified mold remediation exclusively for residential homeowners in {LANDING_CONFIG.locationFull} and surrounding Southern Wisconsin communities.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="h-4 w-4" />
              <span>{LANDING_CONFIG.licenseDisplay} • IICRC Standards</span>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Restoration Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Homeowner Restoration
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-amber-400 transition-colors">
                  Service Area & Maps
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Emergency Dispatch
                </a>
              </li>
            </ul>
          </div>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Request an Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Contact</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <div>
                <span className="text-slate-400 block text-xs">Direct Phone:</span>
                <a
                  href={LANDING_CONFIG.phoneHref}
                  className="text-amber-400 hover:text-amber-300 font-bold text-base inline-flex items-center gap-1.5"
                >
                  <Phone className="h-4 w-4" />
                  {LANDING_CONFIG.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Central Service Base:</span>
                <span className="text-white font-medium">
                  {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState} {LANDING_CONFIG.locationZip}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Operational Hours:</span>
                <span className="text-slate-300">{LANDING_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Residential Exclusivity Notice */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-300">
          <p>
            <strong className="text-white">Residential Homeowners Exclusivity:</strong> Emergency water damage restoration and mold remediation services are provided exclusively to residential homeowners and private properties (single-family homes, townhouses, and condos). We do not service commercial facilities, offices, retail stores, or warehouses.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {LANDING_CONFIG.nicheTitle} in {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
