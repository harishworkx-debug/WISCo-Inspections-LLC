import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown, Menu, Phone, Waves, X } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { PRIMARY_LOCATION, SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { Link, usePathname } from '@/lib/router';
import CallButton from '@/components/CallButton';

type OpenMenu = 'services' | 'areas' | null;

const NAV_LINK = 'rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10';
const DROPDOWN_ITEM = 'block rounded-lg px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-brand-50 hover:text-brand';

function Dropdown({
  open,
  onOpen,
  onClose,
  onToggle,
  label,
  children,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  label: string;
  children: ReactNode;
}) {
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      onClose();
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className={`${NAV_LINK} inline-flex items-center gap-1`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-1.5 w-80">
          <div className="max-h-[75vh] overflow-y-auto rounded-xl border border-navy-100 bg-white p-2 shadow-lift">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPath, setLastPath] = useState(path);

  if (lastPath !== path) {
    setLastPath(path);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const openServices = () => setOpenMenu('services');
  const openAreas = () => setOpenMenu('areas');
  const closeMenu = () => setOpenMenu(null);
  const toggleMenu = (menu: Exclude<OpenMenu, null>) =>
    setOpenMenu((current) => (current === menu ? null : menu));

  const serviceLinks = SERVICES.map((service) => ({
    to: `/${service.slug}-${PRIMARY_LOCATION.slug}`,
    label: service.name,
  }));

  const areaLinks = SERVICE_LOCATIONS.map((location) => ({
    to: `/${SERVICES[0].slug}-${location.slug}`,
    label: location.name,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold text-navy">
            <Waves className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-bold tracking-tight">WISCo Mold &amp; Water Damage</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-400">Residential Restoration · Wisconsin</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={NAV_LINK}>
            Home
          </Link>
          <Link to="/about" className={NAV_LINK}>
            About Us
          </Link>
          <Link to="/articles" className={NAV_LINK}>
            Guides &amp; Articles
          </Link>
          <Dropdown
            open={openMenu === 'services'}
            onOpen={openServices}
            onClose={closeMenu}
            onToggle={() => toggleMenu('services')}
            label="Restoration Services"
          >
            {serviceLinks.map((item) => (
              <Link key={item.to} to={item.to} className={DROPDOWN_ITEM} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
            <Link
              to="/services"
              className={`${DROPDOWN_ITEM} mt-1 border-t border-navy-100 pt-3 text-brand font-bold`}
              onClick={closeMenu}
            >
              View all 10 restoration services →
            </Link>
          </Dropdown>
          <Dropdown
            open={openMenu === 'areas'}
            onOpen={openAreas}
            onClose={closeMenu}
            onToggle={() => toggleMenu('areas')}
            label="Service Areas"
          >
            {areaLinks.map((item) => (
              <Link key={item.to} to={item.to} className={DROPDOWN_ITEM} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
            <Link
              to="/service-areas"
              className={`${DROPDOWN_ITEM} mt-1 border-t border-navy-100 pt-3 text-brand font-bold`}
              onClick={closeMenu}
            >
              View all 10 service areas →
            </Link>
          </Dropdown>
          <Link to="/contact" className={NAV_LINK}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden lg:block">
            <CallButton label="Call (608) 642-1112" size="md" />
          </div>
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition active:scale-95 lg:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-navy px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/" className={`${NAV_LINK} py-3`}>
              Home
            </Link>
            <Link to="/about" className={`${NAV_LINK} py-3`}>
              About Us
            </Link>
            <Link to="/articles" className={`${NAV_LINK} py-3`}>
              Guides &amp; Articles
            </Link>
            <p className="px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-wider text-gold-400">Restoration Services</p>
            {serviceLinks.map((item) => (
              <Link key={item.to} to={item.to} className={`${NAV_LINK} py-2 font-medium`}>
                {item.label}
              </Link>
            ))}
            <Link to="/services" className={`${NAV_LINK} py-2 font-semibold text-gold-400`}>
              View all services →
            </Link>

            <p className="px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-wider text-gold-400">Service Areas</p>
            {areaLinks.map((item) => (
              <Link key={item.to} to={item.to} className={`${NAV_LINK} py-2 font-medium`}>
                {item.label}
              </Link>
            ))}
            <Link to="/service-areas" className={`${NAV_LINK} py-2 font-semibold text-gold-400`}>
              View all service areas →
            </Link>

            <Link to="/contact" className={`${NAV_LINK} py-3`}>
              Contact
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3.5 font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Emergency Call: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
