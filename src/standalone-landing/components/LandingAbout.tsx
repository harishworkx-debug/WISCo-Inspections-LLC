import { AlertTriangle, Award, CheckCircle2, Shield, ThermometerSnowflake, Waves } from 'lucide-react';
import { LANDING_CONFIG, LANDING_PHOTOS } from '../data/landingData';

export default function LandingAbout() {
  const localChallenges = [
    {
      title: 'Wisconsin Freeze-Thaw Cycles & Burst Water Pipes',
      desc: 'Sub-zero winters frequently cause frozen supply pipes to rupture, sending thousands of gallons through ceilings, walls, and finished hardwood floors.',
    },
    {
      title: 'Spring Hydrostatic Seepage & Sump Pump Overflows',
      desc: 'Rapid snowmelt saturates soil around foundations, forcing water through basement block seams and overwhelming sump pumps during spring thunderstorm outages.',
    },
    {
      title: 'Toxic Black Mold (Stachybotrys) & Spore Proliferation',
      desc: 'Within 48 hours of water intrusion, mold colonies germinate behind wet drywall and subflooring, requiring negative-air containment and certified removal.',
    },
    {
      title: 'Crawl Space Soil Moisture & Floor Joist Rot',
      desc: 'High groundwater tables around Lake Koshkonong and regional rivers cause crawl space humidity to rot structural timbers and create foul musty odors upstairs.',
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
                src={LANDING_PHOTOS.hero}
                alt={`Professional residential restoration specialist in ${LANDING_CONFIG.locationFull}`}
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <Award className="h-4 w-4" />
                  Certified &amp; Insured
                </div>
                <div className="text-sm font-extrabold text-navy mt-1">
                  {LANDING_CONFIG.licenseDisplay}
                </div>
                <div className="text-xs text-slate-700 mt-0.5">
                  {LANDING_CONFIG.standardsBody}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Residential Homeowners Exclusivity
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Dedicated Emergency Water &amp; Mold Restoration for Wisconsin Homeowners
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              When water inundates your home or toxic mold threatens your indoor air quality in <strong className="text-navy">{LANDING_CONFIG.locationFull}</strong>, every minute matters. We specialize exclusively in private residential properties.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our crews arrive equipped with high-power truck-mounted water extraction pumps, hospital-grade HEPA air filtration, and professional structural drying systems. We do <strong className="text-navy font-semibold">NOT service commercial buildings, offices, retail stores, or warehouses</strong>—our teams are 100% focused on protecting homeowners.
            </p>

            {/* Key Ethical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <Shield className="h-4 w-4 text-brand" />
                  100% Residential Only
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  Single-family homes, townhouses, condos, and lakefront cottages only. No commercial properties.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Direct Insurance Claims
                </div>
                <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                  We bill your homeowners insurance provider directly with itemized Xactimate loss records.
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
              Regional Climate &amp; Moisture Hazards
            </div>
            <h3 className="text-2xl font-bold text-navy">
              Emergency Water &amp; Mold Disasters We Resolve Across {LANDING_CONFIG.serviceRegion}
            </h3>
            <p className="text-sm text-slate-700 mt-2">
              Our 24/7 mitigation teams are specifically trained to handle Southern Wisconsin residential property emergencies:
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
