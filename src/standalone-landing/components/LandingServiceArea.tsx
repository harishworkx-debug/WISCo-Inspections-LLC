import { MapPin, Navigation, Phone } from 'lucide-react';
import { LANDING_CONFIG, SERVED_COMMUNITIES } from '../data/landingData';

export default function LandingServiceArea() {
  return (
    <section id="service-area" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
            <Navigation className="h-3.5 w-3.5" />
            Regional Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Service Area Across {LANDING_CONFIG.serviceRegion}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Based centrally in <strong className="text-navy">{LANDING_CONFIG.locationFull}</strong>, we provide responsive, thorough residential inspection services throughout Rock, Dane, and Jefferson counties.
          </p>
        </div>

        {/* Primary Hub Spotlight */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-card mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand/10 text-brand shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                  Primary Headquarters
                </span>
                <h3 className="text-2xl font-bold text-navy">
                  {LANDING_CONFIG.locationCity}, Wisconsin ({LANDING_CONFIG.locationZip})
                </h3>
                <p className="text-sm text-slate-700 mt-1">
                  Spanning Rock & Dane Counties • Prompt same-day or next-day scheduling available for local properties.
                </p>
              </div>
            </div>

            <a
              href={LANDING_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brand hover:bg-brand-700 text-white px-5 py-3 text-sm font-bold shadow transition-colors shrink-0"
            >
              <Phone className="h-4 w-4" />
              <span>Call Local Inspector</span>
            </a>
          </div>

          {/* Clean Google Maps Embed without business parameters */}
          <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 h-72 sm:h-80 w-full relative bg-slate-100">
            <iframe
              title={`Service Area Map of ${LANDING_CONFIG.locationFull}`}
              src={LANDING_CONFIG.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Grid of Genuinely Served Surrounding Communities */}
        <div>
          <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
            <span>Communities Served in Southern Wisconsin</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVED_COMMUNITIES.map((area) => (
              <div
                key={area.city}
                className={`p-4 rounded-xl border transition-all ${
                  area.city === LANDING_CONFIG.locationCity
                    ? 'bg-brand/5 border-brand/30 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-navy text-sm">{area.city}, WI</h4>
                  <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                    {area.zip.split(',')[0]}
                  </span>
                </div>
                <div className="text-xs text-brand font-semibold">{area.county}</div>
                <p className="text-[11px] text-slate-700 mt-2 leading-tight">{area.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
