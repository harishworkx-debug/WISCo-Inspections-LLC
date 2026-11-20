import { useState } from 'react';
import { Calendar, CheckCircle2, Clock, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG, LANDING_SERVICES } from '../data/landingData';

export default function LandingContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Edgerton',
    service: 'buyer-inspection',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate interactive booking inquiry submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
            <Calendar className="h-3.5 w-3.5" />
            Schedule & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Contact Your Local Home Inspector in {LANDING_CONFIG.locationFull}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Reach out directly by phone for immediate inspection availability, or submit your property details below for a fast response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Call & Credentials Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Call Highlight Box */}
            <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-800 text-white p-6 sm:p-8 shadow-xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full mb-4">
                Fastest Response
              </span>
              <h3 className="text-2xl font-bold">Call the Inspector Directly</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Have a fast-approaching inspection contingency deadline? Call now to check schedule availability or ask technical questions.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                <a
                  href={LANDING_CONFIG.phoneHref}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy font-extrabold text-lg transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 fill-navy" />
                  <span>{LANDING_CONFIG.phoneDisplay}</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Clock className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Service Hours:</div>
                    <div className="text-xs text-slate-300 mt-0.5">{LANDING_CONFIG.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Central Base:</div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {LANDING_CONFIG.locationCity}, {LANDING_CONFIG.locationState} {LANDING_CONFIG.locationZip}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credential Guarantees */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-navy">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>State Credentials & Standards</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-2 mt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{LANDING_CONFIG.licenseDisplay}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Adherence to Wisconsin DSPS Home Inspection Administrative Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Full Compliance with InterNACHI Code of Ethics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Independent & Unbiased: No Repair or Remediation Conflicts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-navy">Request Property Inspection Quote</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 mb-6">
                Fill out the property info below and we will confirm scheduling and pricing promptly.
              </p>

              {submitted ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Inquiry Received Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                    Thank you! Your inspection request has been logged. We will review your property details and contact you shortly at{' '}
                    <strong className="underline">{formData.phone || 'your phone number'}</strong>.
                  </p>
                  <p className="text-xs text-slate-700 mt-4">
                    Need immediate confirmation? Call directly at{' '}
                    <a href={LANDING_CONFIG.phoneHref} className="font-bold text-navy underline">
                      {LANDING_CONFIG.phoneDisplay}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        city: 'Edgerton',
                        service: 'buyer-inspection',
                        preferredDate: '',
                        notes: '',
                      });
                    }}
                    className="mt-5 text-xs font-bold text-brand hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(608) 555-0123"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        City / Community <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy bg-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      >
                        <option value="Edgerton">Edgerton, WI (53534)</option>
                        <option value="Janesville">Janesville, WI</option>
                        <option value="Madison">Madison, WI</option>
                        <option value="Beloit">Beloit, WI</option>
                        <option value="Stoughton">Stoughton, WI</option>
                        <option value="Sun Prairie">Sun Prairie, WI</option>
                        <option value="Fitchburg">Fitchburg, WI</option>
                        <option value="Verona">Verona, WI</option>
                        <option value="Milton">Milton, WI</option>
                        <option value="Fort Atkinson">Fort Atkinson, WI</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Property Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main St, Edgerton, WI"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy bg-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      >
                        {LANDING_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1">
                      Property Details & Special Requests (Approx Sq Ft, Age, Sump Pump, etc.)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. 2,200 sq ft single family home built in 1978, contingency deadline is next Friday."
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-navy focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-brand hover:bg-brand-700 text-white font-bold py-3.5 px-6 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Inspection Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-700 text-center">
                    🔒 Your information is confidential and strictly used for scheduling your property evaluation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
