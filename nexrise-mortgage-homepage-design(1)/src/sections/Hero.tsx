export default function Hero() {
  return (
    <section id="home" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* Aurora background */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative container-grand">
        {/* Eyebrow strip */}
        <div className="flex flex-wrap items-center gap-4 mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-[11px] font-mono uppercase tracking-[0.22em] text-[#041f60]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4be4ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4be4ff]"></span>
            </span>
            Strategic Lending · Australia Wide
          </span>
          <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[#5b5299]">
            <span className="h-px w-8 bg-[#041f60]/20" />
            Index 01 — Welcome
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] leading-[0.92] tracking-[-0.04em] text-[#041f60]">
              Borrow
              <br />
              <span className="relative inline-block">
                <span className="italic font-light text-gradient">confidently,</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="14" viewBox="0 0 400 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q 100 1, 200 7 T 398 6" stroke="#4be4ff" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <br />
              build <span className="italic font-light text-[#5b5299]/85">strategically.</span>
            </h1>

            <p className="mt-10 text-lg md:text-xl text-[#041f60]/70 font-light leading-relaxed max-w-xl">
              Clear, strategic mortgage advice for individuals and business owners — expert guidance, modern technology, and access to Australia's leading lenders.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#041f60] text-white font-medium hover:scale-[1.02] transition-all glow-cyan-strong">
                <span>Get Started Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#services" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#041f60]/15 hover:border-[#041f60]/40 hover:bg-[#041f60]/5 transition-all text-[#041f60] font-medium">
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust micro-strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl md:text-3xl font-display text-[#041f60]">40+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#5b5299] mt-1">Lenders</div>
              </div>
              <div className="border-l border-[#041f60]/10 pl-6">
                <div className="text-2xl md:text-3xl font-display text-[#041f60]">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#5b5299] mt-1">Independent</div>
              </div>
              <div className="border-l border-[#041f60]/10 pl-6">
                <div className="text-2xl md:text-3xl font-display text-[#041f60]">AU</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#5b5299] mt-1">Wide</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Image with floating cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl img-treat">
              <img
                src="/images/hero-home.jpg"
                alt="Modern luxury Australian home"
                className="w-full h-full object-cover ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041f60]/85 via-[#041f60]/15 to-transparent" />

              {/* Top tag */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-strong text-[10px] font-mono uppercase tracking-[0.22em] text-[#041f60]">
                ◉ Featured · Modern Living
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] opacity-70 mb-1">Now lending</div>
                <div className="font-display text-2xl md:text-3xl">Premium Australian Homes</div>
              </div>
            </div>

            {/* Floating rate card */}
            <div className="absolute -bottom-8 -left-6 md:-left-12 w-64 p-5 rounded-2xl glass-strong shadow-2xl border border-white/40 float-anim">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5b5299]">Owner Occ · P&I</span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              </div>
              <div className="font-display text-4xl text-[#041f60] tabular">5.74<span className="text-lg align-top">%</span></div>
              <div className="text-[11px] text-[#5b5299] mt-1">From our lender panel</div>
              <div className="mt-3 pt-3 border-t border-[#041f60]/10 flex items-end gap-1 h-10">
                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#4be4ff] to-[#041f60]/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Floating credentials chip */}
            <div className="absolute -top-4 -right-4 md:-right-8 px-5 py-3 rounded-2xl glass-strong shadow-xl border border-white/40 float-anim-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4be4ff] to-[#041f60] flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5b5299]">Verified</div>
                  <div className="text-sm font-medium text-[#041f60]">MFAA · AFCA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
