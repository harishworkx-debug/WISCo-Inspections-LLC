import { CheckCircle2, ChevronRight } from 'lucide-react';
import { LANDING_SERVICES, LANDING_CONFIG } from '../data/landingData';

export default function LandingServices() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-3">
            Comprehensive Diagnostic Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Professional Home Inspection Services in {LANDING_CONFIG.locationFull}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Every inspection is an objective, non-invasive evaluation of your home&apos;s physical structures and mechanical systems, adhering to strict Wisconsin standards.
          </p>
        </div>

        {/* 6 Responsive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-lift transition-all duration-300 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={`${service.title} in ${LANDING_CONFIG.locationCity}, Wisconsin`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-md bg-navy/85 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-amber-300 border border-white/10">
                  {service.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Checkpoints */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      Key Evaluation Points:
                    </div>
                    <ul className="space-y-2">
                      {service.checkpoints.map((cp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full rounded-lg bg-navy/5 hover:bg-brand hover:text-white px-4 py-2.5 text-xs font-bold text-navy transition-colors"
                  >
                    <span>Request This Inspection</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl bg-navy text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Need a Custom Inspection Package or Fast Turnaround?</h3>
            <p className="text-sm text-slate-300 mt-1">
              Bundle your buyer inspection with continuous digital radon and mold testing for complete peace of mind.
            </p>
          </div>
          <a
            href={LANDING_CONFIG.phoneHref}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy px-6 py-3 text-sm font-extrabold shadow transition-colors"
          >
            Call {LANDING_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
