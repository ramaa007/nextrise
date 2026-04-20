import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden bg-[#030820] text-white noise">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#4be4ff]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5b5299]/30 blur-[120px]" />
      <div className="absolute inset-0 grid-bg-dark opacity-40" />

      {/* Background ticker */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none opacity-20">
        <div className="flex whitespace-nowrap marquee">
          {Array(6).fill("Book your strategy call · ").map((t, i) => (
            <span key={i} className="font-display text-[14vw] leading-none italic text-outline-cyan">{t}</span>
          ))}
        </div>
      </div>

      <div className="relative container-grand pt-32">
        {/* Cinematic CTA banner */}
        <div className="relative rounded-[36px] overflow-hidden mb-16 md:mb-24 img-treat shadow-2xl border border-white/10">
          <img
            src="/images/cta-home.jpg"
            alt="Modern Australian home at golden hour"
            className="w-full aspect-[21/8] md:aspect-[21/7] object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02143f]/95 via-[#02143f]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030820] via-transparent to-transparent" />
          <div className="absolute inset-0 grid-bg-dark opacity-20" />

          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-20 max-w-3xl">
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#4be4ff] mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#4be4ff]/60" />
              The next chapter
            </div>
            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-5">
              Your dream home,
              <br />
              <span className="italic text-gradient-cyan">strategically financed.</span>
            </h3>
            <p className="text-white/70 text-base md:text-lg max-w-xl font-light leading-relaxed">
              From first home to portfolio expansion — Pragnesh and the NexRise team are ready to architect your borrowing strategy.
            </p>
            <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4be4ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4be4ff]"></span>
              </span>
              Booking now · 4hr response
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: editorial */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#4be4ff] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#4be4ff]/40" />
              Begin · Index 08
            </div>
            <h2 className="h-display text-grand mb-8">
              Book your
              <br />
              strategy <span className="italic text-gradient-cyan">call.</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-md">
              Tell us about your goals. We'll respond within 4 business hours with a tailored next step.
            </p>

            <div className="space-y-5">
              {[
                { l: "Phone", v: "0404 786 459", h: "tel:0404786459", ic: <path d="M3 5 Q 3 3, 5 3 L 8 3 L 10 8 L 8 10 Q 11 14, 14 16 L 16 14 L 21 16 L 21 19 Q 21 21, 19 21 Q 9 21, 3 5 Z" /> },
                { l: "Email", v: "hello@nexrisemortgage.com.au", h: "mailto:hello@nexrisemortgage.com.au", ic: <path d="M3 7 L12 13 L21 7 M3 7 L3 19 L21 19 L21 7 L12 13 Z" /> },
                { l: "Office", v: "Fitzgibbon QLD 4018, Australia", h: "#", ic: <path d="M12 21 Q 5 14, 5 9 A 7 7 0 0 1 19 9 Q 19 14, 12 21 Z M12 11 A 2 2 0 1 0 12 7 A 2 2 0 0 0 12 11 Z" /> },
              ].map((c) => (
                <a key={c.l} href={c.h} className="group flex items-center gap-5 py-4 border-b border-white/10 hover:border-[#4be4ff]/40 transition-colors">
                  <div className="w-12 h-12 rounded-full glass-ink border border-[#4be4ff]/20 flex items-center justify-center text-[#4be4ff] group-hover:bg-[#4be4ff] group-hover:text-[#041f60] transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {c.ic}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">{c.l}</div>
                    <div className="text-base text-white group-hover:text-[#4be4ff] transition-colors">{c.v}</div>
                  </div>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#4be4ff] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative glass-ink rounded-[32px] p-10 md:p-14 border border-[#4be4ff]/10 overflow-hidden corner-accent">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#4be4ff]/15 blur-3xl" />

              {!submitted ? (
                <form
                  className="relative space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="text-xs font-mono uppercase tracking-widest text-[#4be4ff] mb-2">
                    01 / Your details
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" id="name" type="text" required placeholder="Jane Doe" />
                    <Field label="Phone" id="phone" type="tel" required placeholder="04XX XXX XXX" />
                  </div>
                  <Field label="Email" id="email" type="email" required placeholder="you@email.com" />

                  <div className="text-xs font-mono uppercase tracking-widest text-[#4be4ff] mb-2 pt-4">
                    02 / Loan interest
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2">
                    {["Home Loan", "Refinance", "Investment", "First Home", "Construction", "Personal"].map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="interest" className="peer sr-only" />
                        <div className="text-center text-sm py-3 rounded-xl border border-white/10 hover:border-[#4be4ff]/50 peer-checked:bg-[#4be4ff] peer-checked:text-[#041f60] peer-checked:border-[#4be4ff] transition-all">
                          {opt}
                        </div>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
                      Your finance goals
                    </label>
                    <textarea
                      id="goals"
                      rows={4}
                      placeholder="Tell us about your situation and what you'd like to achieve..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4be4ff] focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="sr-only peer"
                        required
                      />
                      <div className="w-5 h-5 rounded-md border border-white/30 peer-checked:bg-[#4be4ff] peer-checked:border-[#4be4ff] transition-colors flex items-center justify-center">
                        {agreed && (
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#041f60]" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-white/60 leading-snug">
                      I agree to the <a href="#" className="text-[#4be4ff] underline">Privacy Policy</a> and{" "}
                      <a href="#" className="text-[#4be4ff] underline">Terms</a>.
                    </span>
                  </label>

                  <button type="submit" className="btn-cyan w-full justify-center group">
                    Submit Request
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              ) : (
                <div className="relative text-center py-16">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#4be4ff]/20 flex items-center justify-center mb-6 glow-cyan">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#4be4ff]" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <div className="font-display text-4xl mb-3">Request received.</div>
                  <p className="text-white/60 max-w-sm mx-auto">
                    Thank you. A NexRise specialist will respond within 4 business hours.
                  </p>
                </div>
              )}
            </div>

            {/* Comparison rate warning */}
            <div className="mt-6 glass-ink rounded-2xl p-5 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="text-[#4be4ff] flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v4M12 17h.01M10.3 3.86l-8.49 14.7A2 2 0 003.55 22h16.9a2 2 0 001.74-3.44L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  <strong className="text-white/70 font-medium">Mandatory Comparison Rate Warning:</strong> Comparison rates help you identify the true cost of a loan. Warning: this comparison rate applies only to the examples given. Different amounts and terms will result in different comparison rates. Costs such as redraw fees or early repayment fees, and cost savings such as fee waivers, are not included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4be4ff] focus:bg-white/10 transition-all"
      />
    </div>
  );
}
