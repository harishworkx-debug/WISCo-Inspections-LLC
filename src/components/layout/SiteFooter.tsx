import { House, Mail } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { PRIMARY_LOCATION } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';

const FOOTER_LINK = 'text-sm text-white/75 transition hover:text-gold-400';

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy">
              <House className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-base font-bold">{BUSINESS.name}</span>
          </Link>
          <p className="max-w-xs text-sm text-white/75">
            Professional home inspection services for buyers, sellers, and homeowners in Wisconsin.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:bg-gold-400"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Inspection Services</h2>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/${service.slug}-${PRIMARY_LOCATION.slug}`} className={FOOTER_LINK}>
                  {service.name} in {PRIMARY_LOCATION.city}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className={FOOTER_LINK}>
                All inspection services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Company</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className={FOOTER_LINK}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/service-areas" className={FOOTER_LINK}>
                Service Areas
              </Link>
            </li>
            <li>
              <Link to="/contact" className={FOOTER_LINK}>
                Contact
              </Link>
            </li>
            <li>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className={FOOTER_LINK}>
                Google Maps Listing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Contact</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a href={BUSINESS.phoneHref} className="font-semibold text-white transition hover:text-gold-400">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>Serving {PRIMARY_LOCATION.name} and Wisconsin</li>
            <li className="flex items-center gap-2 pt-2">
              <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />
              <a href={BUSINESS.websiteUrl} className={FOOTER_LINK}>
                wiscoinspections.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/65 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-gold-400">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
