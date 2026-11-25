import { Award, CheckCircle2, FileCheck2, MapPin, ShieldCheck, Thermometer } from 'lucide-react';
import { LANDING_CONFIG, TRUST_PILLARS } from '../data/landingData';

export default function LandingWhyChooseUs() {
  const icons = [ShieldCheck, MapPin, Award, FileCheck2];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Verified Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Why Wisconsin Homeowners Trust Us in {LANDING_CONFIG.locationFull}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            24/7 Rapid emergency response, certified IICRC mitigation protocols, and direct homeowners insurance claims billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-200 p-6 hover:shadow-card hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy text-amber-400 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy leading-snug">{pillar.title}</h3>
                  <div className="text-xs font-bold text-brand mt-1">{pillar.subtitle}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Equipment Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/10 text-amber-400 shrink-0">
              <Thermometer className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Hospital-Grade Restoration Equipment on Every Call</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                High-capacity truck-mounted vacuum extractors, hospital-grade HEPA air scrubbers, LGR dehumidifiers, and FLIR thermal cameras.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-semibold text-emerald-400 border border-emerald-400/30 px-3 py-1.5 rounded-full bg-emerald-950/40">
              IICRC Standards Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
