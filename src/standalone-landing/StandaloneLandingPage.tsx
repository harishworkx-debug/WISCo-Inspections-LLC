import { useEffect } from 'react';
import { Phone } from 'lucide-react';
import LandingAbout from './components/LandingAbout';
import LandingContact from './components/LandingContact';
import LandingFaq from './components/LandingFaq';
import LandingFooter from './components/LandingFooter';
import LandingHeader from './components/LandingHeader';
import LandingHero from './components/LandingHero';
import LandingServices from './components/LandingServices';
import LandingServiceArea from './components/LandingServiceArea';
import LandingWhyChooseUs from './components/LandingWhyChooseUs';
import { LANDING_CONFIG, SERVED_COMMUNITIES } from './data/landingData';

export default function StandaloneLandingPage() {
  useEffect(() => {
    // Isolated SEO configuration
    const pageTitle = `${LANDING_CONFIG.nicheTitle} in ${LANDING_CONFIG.locationCity}, ${LANDING_CONFIG.locationState} | 24/7 Emergency Restoration`;
    const pageDescription = `Certified residential mold remediation and emergency water damage restoration in ${LANDING_CONFIG.locationFull}. 24/7 rapid water extraction, structural drying, and direct insurance billing for Wisconsin homeowners. Call ${LANDING_CONFIG.phoneDisplay}.`;

    const previousTitle = document.title;
    document.title = pageTitle;

    // Helper to upsert meta tags
    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      return el;
    };

    upsertMeta('name', 'description', pageDescription);
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', pageDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', window.location.href);

    // Canonical link handling
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;

    // Dynamic JSON-LD Schema (Isolated, zero company name)
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'WaterDamageRestorationService',
      name: `${LANDING_CONFIG.nicheTitle} in ${LANDING_CONFIG.locationCity}, ${LANDING_CONFIG.locationState}`,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
      telephone: '+1-608-642-1112',
      url: window.location.origin + '/',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: LANDING_CONFIG.locationCity,
        addressRegion: LANDING_CONFIG.locationState,
        postalCode: LANDING_CONFIG.locationZip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: LANDING_CONFIG.coordinates.lat,
        longitude: LANDING_CONFIG.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '19:00',
        },
      ],
      areaServed: SERVED_COMMUNITIES.map((c) => ({
        '@type': 'City',
        name: `${c.city}, WI`,
      })),
    };

    const schemaScript = document.createElement('script');
    schemaScript.id = 'standalone-landing-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    // Cleanup upon unmount
    return () => {
      document.title = previousTitle;
      if (prevCanonical && canonical) {
        canonical.href = prevCanonical;
      }
      const existingScript = document.getElementById('standalone-landing-schema');
      existingScript?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-brand selection:text-white flex flex-col">
      {/* 1. Header with text identity, anchor nav, and direct call button */}
      <LandingHeader />

      {/* Main Single-Page Anchor Flow */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <LandingHero />

        {/* 3. Services Section (#services) */}
        <LandingServices />

        {/* 4. About Section (#about) */}
        <LandingAbout />

        {/* 5. Service Area Section (#service-area) */}
        <LandingServiceArea />

        {/* 6. Why Choose Us Section (#why-us) */}
        <LandingWhyChooseUs />

        {/* 7. FAQ Section (#faq) */}
        <LandingFaq />

        {/* 8. Contact & Quote Section (#contact) */}
        <LandingContact />
      </main>

      {/* 9. Standalone Footer */}
      <LandingFooter />

      {/* Sticky Mobile Direct Call Floating Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-navy/95 backdrop-blur-md border-t border-navy-700 p-3 sm:hidden shadow-2xl">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <a
            href={LANDING_CONFIG.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 px-4 text-sm font-extrabold text-navy shadow hover:bg-amber-300 transition-colors"
          >
            <Phone className="h-4 w-4 fill-navy" />
            <span>Call Inspector: {LANDING_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white/10 border border-white/20 py-3 px-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}
