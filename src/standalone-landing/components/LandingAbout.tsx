import { AlertTriangle, Award, Shield, ThermometerSnowflake, Wrench } from 'lucide-react';
import { LANDING_CONFIG, LANDING_PHOTOS } from '../data/landingData';

export default function LandingAbout() {
  const localChallenges = [
    {
      title: 'Wisconsin Freeze-Thaw Cycles & Hydrostatic Foundation Pressure',
      desc: 'Sub-zero winters and sudden spring thaws subject Wisconsin basement walls (block, poured, and stone) to immense lateral hydraulic pressure, causing seasonal hairline movement, weeping seams, and efflorescence.',
    },
    {
      title: 'Attic Thermal Bypasses & Damaging Ice Dams',
      desc: 'Inadequate ceiling insulation or unsealed recessed lighting allows conditioned indoor heat to melt rooftop snow. The runoff refreezes at cold eaves, creating ice dams that force water under shingles into finished ceilings.',
    },
    {
      title: 'Regional Soil Radon Gas Concentrations (EPA Zone 1)',
      desc: 'Southern Wisconsin sits on uranium-bearing glacial deposits and dolomite bedrock. When soil gas migrates through basement floor joints and sump pits, radioactive decay products can reach dangerous indoor levels.',
    },
    {
      title: 'Vintage Electrical Infrastructure & Sump Pump Redundancy',
      desc: 'Older regional homes frequently feature ungrounded two-prong circuits, obsolete fuse boxes, or lack secondary battery-backup sump pumps essential during spring storm power outages.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={LANDING_PHOTOS.inspectorRoof}
                alt={`Professional home inspector in ${LANDING_CONFIG.locationFull}`}
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <Award className="h-4 w-4" />
                  Wisconsin State Licensed
                </div>
                <div className="text-sm font-extrabold text-navy mt-1">
                  {LANDING_CONFIG.licenseDisplay}
                </div>
                <div className="text-xs text-slate-700 mt-0.5">
                  InterNACHI Standards of Practice & Code of Ethics
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700 uppercase tracking-wider">
              Local Building Knowledge & Ethics
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Independent Property Inspections Tailored to Southern Wisconsin Homes
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Purchasing or maintaining a home in <strong className="text-navy">{LANDING_CONFIG.locationFull}</strong> requires an inspector who truly understands upper Midwest construction methods, historic framing, and local environmental conditions.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We provide completely independent, objective property evaluations. Because we <strong className="text-navy font-semibold">never perform repairs, contracting, or remediation</strong>, you are guaranteed an impartial inspection with zero sales pitch and zero conflict of interest.
            </p>

            {/* Key Ethical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <Shield className="h-4 w-4 text-brand" />
                  100% Diagnostic Neutrality
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  We evaluate without bias. We never quote repairs or profit from identified defects.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <Wrench className="h-4 w-4 text-brand" />
                  Same-Day Digital Delivery
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  Detailed interactive digital reports delivered within 24 hours with high-res photos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Challenges Box */}
        <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-2">
              <ThermometerSnowflake className="h-3.5 w-3.5 text-amber-600" />
              Regional Climate & Construction Factors
            </div>
            <h3 className="text-2xl font-bold text-navy">
              Critical Concerns We Inspect Across {LANDING_CONFIG.serviceRegion}
            </h3>
            <p className="text-sm text-slate-700 mt-2">
              Our 400+ point inspection checklist is specifically customized to target common failure points in Wisconsin properties:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localChallenges.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
