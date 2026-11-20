import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Star } from 'lucide-react';
import { LANDING_CONFIG, LANDING_PHOTOS } from '../data/landingData';

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-800 to-navy-900 text-white pt-12 pb-16 lg:pt-18 lg:pb-24">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-300 backdrop-blur-sm border border-white/15">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{LANDING_CONFIG.licenseDisplay}</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 text-white">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {LANDING_CONFIG.reviewSummary.rating}★ Rating ({LANDING_CONFIG.reviewSummary.count})
              </span>
            </div>

            {/* Strict Niche + Location H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_CONFIG.nicheTitle} in{' '}
              <span className="text-amber-400 underline decoration-brand decoration-wavy decoration-2">
                {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState}
              </span>
            </h1>

            {/* Natural Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              State-licensed, independent property inspections and environmental diagnostics in{' '}
              <strong className="text-white font-semibold">{LANDING_CONFIG.locationFull}</strong> and throughout{' '}
              {LANDING_CONFIG.serviceRegion}. Detailed 400+ point evaluations with same-day digital reporting and zero repair upsells.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>400+ point structural & mechanical checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>24-Hour interactive digital report</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Continuous digital radon & mold testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Unbiased — zero repair conflict</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={LANDING_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 text-base font-extrabold text-navy shadow-lg hover:bg-amber-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-5 w-5 fill-navy" />
                <span>Call Inspector: {LANDING_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-4 text-base font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <span>Request Inspection Online</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="text-xs text-slate-400">
              ⚡ Direct telephone access to your licensed inspector. Flexible weekday and Saturday appointment slots.
            </p>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={LANDING_PHOTOS.hero}
                  alt="State-licensed home inspector performing a property inspection in Edgerton, Wisconsin"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-navy/90 border border-white/10 text-xs text-white">
                  <div className="flex items-center justify-between font-bold">
                    <span>Diagnostic Home Inspection</span>
                    <span className="text-emerald-400">WI Lic. #3302-106</span>
                  </div>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    Roof, foundation, electrical, plumbing, heating, radon & moisture diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">400+</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Checkpoints Inspected</div>
            <div className="text-[11px] text-slate-300">Foundation to roofline</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">24-Hr</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Report Turnaround</div>
            <div className="text-[11px] text-slate-300">Digital photos & ratings</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Unbiased Inspection</div>
            <div className="text-[11px] text-slate-300">No repair conflict of interest</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">4.9 ★</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">87 Local Reviews</div>
            <div className="text-[11px] text-slate-300">Serving Southern Wisconsin</div>
          </div>
        </div>
      </div>
    </section>
  );
}
