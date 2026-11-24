import { Mail, MapPin, Star, Waves } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { PRIMARY_LOCATION, SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';

const FOOTER_LINK = 'text-xs text-white/75 transition hover:text-gold-400';

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy">
              <Waves className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-base font-bold">{BUSINESS.name}</span>
          </Link>
          <p className="max-w-xs text-xs leading-relaxed text-white/75">
            24/7 Emergency water damage restoration, standing flood water extraction, and certified toxic mold remediation across 10 communities in Rock, Dane, and Jefferson counties.
          </p>
          <div>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-500 shadow"
            >
              24/7 Emergency: {BUSINESS.phoneDisplay}
            </a>
          </div>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/80 transition hover:text-gold-400"
          >
            <span className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
              ))}
            </span>
            <span className="font-bold text-white">4.9 ★</span>
            <span>(87 Verified Reviews)</span>
          </a>
        </div>

        {/* All 10 Restoration Services */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">All 10 Restoration Services</h2>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/${service.slug}-${PRIMARY_LOCATION.slug}`} className={FOOTER_LINK}>
                  {service.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link to="/services" className="text-xs font-bold text-gold-400 transition hover:underline">
                View all restoration services →
              </Link>
            </li>
          </ul>
        </div>

        {/* All 10 Service Areas */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">All 10 Service Areas</h2>
          <ul className="space-y-2">
            {SERVICE_LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/${SERVICES[0].slug}-${loc.slug}`} className={FOOTER_LINK}>
                  {loc.name} {loc.isPrimary && '(Primary Base)'}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link to="/service-areas" className="text-xs font-bold text-gold-400 transition hover:underline">
                Explore all service areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Contact */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Company & Contact</h2>
          <ul className="space-y-2.5 text-xs text-white/75">
            <li>
              <Link to="/about" className={FOOTER_LINK}>
                About WISCo Mold &amp; Water Damage
              </Link>
            </li>
            <li>
              <Link to="/articles" className={FOOTER_LINK}>
                Water Damage &amp; Mold Guides
              </Link>
            </li>
            <li>
              <Link to="/contact" className={FOOTER_LINK}>
                Contact &amp; 24/7 Dispatch
              </Link>
            </li>
            <li>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className={FOOTER_LINK}>
                Google Business Profile
              </a>
            </li>
            <li className="pt-2">
              <a href={BUSINESS.phoneHref} className="font-bold text-white text-sm transition hover:text-gold-400">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span>Edgerton, WI 53534 (Serving Southern WI)</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400 shrink-0" aria-hidden="true" />
              <a href={BUSINESS.websiteUrl} className={FOOTER_LINK}>
                wiscoinspections.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sitewide Local Quick-Links Strip */}
      <div className="border-t border-white/10 bg-navy-950 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
            Southern Wisconsin Mold &amp; Water Damage Directory:
          </p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-white/60">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={`mold-${loc.slug}`}
                to={`/mold-remediation-${loc.slug}`}
                className="hover:text-gold-400 transition"
              >
                Mold Remediation in {loc.city}
              </Link>
            ))}
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={`water-${loc.slug}`}
                to={`/water-damage-restoration-${loc.slug}`}
                className="hover:text-gold-400 transition"
              >
                Water Damage in {loc.city}
              </Link>
            ))}
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={`extract-${loc.slug}`}
                to={`/emergency-water-extraction-${loc.slug}`}
                className="hover:text-gold-400 transition"
              >
                Water Extraction in {loc.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs text-white/65 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
