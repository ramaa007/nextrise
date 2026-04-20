const advantages = [
  {
    n: "01",
    title: "Unrivalled Lender Access",
    desc: "Direct access to 40+ lenders ensures you secure the best possible structure and rate for your unique situation.",
    stat: "40+",
    statLabel: "Lenders",
    icon: <path d="M3 12 L21 12 M3 6 L21 6 M3 18 L21 18" />,
  },
  {
    n: "02",
    title: "Expert Strategic Advice",
    desc: "Personalised guidance tailored to your long-term financial architecture — not just today's market rate.",
    stat: "1:1",
    statLabel: "Personal Service",
    icon: <path d="M12 2 L2 7 L12 12 L22 7 Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12" />,
  },
  {
    n: "03",
    title: "A Partner for Life",
    desc: "Committed to your well-being beyond settlement with ongoing rate reviews and proactive check-ins.",
    stat: "End-to-End",
    statLabel: "Support",
    icon: <path d="M21 11.5 A 9 9 0 1 1 12 2.5 M21 4 L12 13 L9 10" />,
  },
];

const pillars = [
  {
    title: "Strategy First",
    desc: "A smarter, clearer way designed around your future — not today's market rate. Every recommendation is reverse-engineered from your long-term goals.",
  },
  {
    title: "Digital Velocity",
    desc: "Streamlined workflows secure your mortgage faster with less paperwork. Modern technology means fewer surprises and quicker outcomes.",
  },
  {
    title: "Zero Bias Clarity",
    desc: "Objective comparisons across 40+ lenders ensuring choice based on pure results — never on commission tables or institutional preference.",
  },
];

export default function WhyChoose() {
  return (
    <section id="edge" className="relative py-32 md:py-44 overflow-hidden panel-soft">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="aurora opacity-30" />

      <div className="relative container-grand">
        {/* Section A: The advantage */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-20 md:mb-28 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">
              Our advantage · Index 03
            </div>
            <h2 className="h-display text-grand text-[#041f60]">
              Why choose
              <br />
              <span className="italic text-gradient">NexRise.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-6 space-y-6">
            <div className="h-px w-16 gradient-bar rounded-full" />
            <p className="text-lg md:text-xl text-[#041f60]/70 font-light leading-relaxed">
              We're not just brokers. We're long-term partners committed to building your financial future.
            </p>
          </div>
        </div>

        {/* Three angled cards — bigger */}
        <div className="grid md:grid-cols-3 gap-6 mb-32 md:mb-44">
          {advantages.map((a, i) => (
            <div
              key={a.n}
              className="card-surface group relative overflow-hidden p-10 md:p-12"
              style={{ transform: `translateY(${i * 16}px)` }}
            >
              {/* Decorative number watermark */}
              <div className="absolute -top-8 -right-4 font-display text-[12rem] leading-none text-[#041f60]/4 select-none">
                {a.n}
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className="text-xs font-mono tracking-[0.25em] text-[#5b5299] flex items-center gap-2">
                    <span>→</span>
                    <span>{a.n}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#041f60]/5 group-hover:bg-[#4be4ff]/15 flex items-center justify-center text-[#041f60] group-hover:text-[#041f60] transition-all">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {a.icon}
                    </svg>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-7xl md:text-8xl text-gradient leading-none tabular">{a.stat}</span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#041f60]/50">{a.statLabel}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-[#041f60] tracking-tight mb-4 leading-tight">
                  {a.title}
                </h3>
                <p className="text-base text-[#041f60]/65 font-light leading-relaxed">
                  {a.desc}
                </p>
              </div>

              <div className="absolute -bottom-1 left-0 right-0 h-1 gradient-bar opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Section B: The Difference + Principal */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: pillars */}
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">
              The difference · Index 04
            </div>
            <h2 className="h-display text-5xl md:text-7xl text-[#041f60] mb-10">
              Strategy, speed,
              <br />
              and <span className="italic text-gradient">clarity.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#041f60]/70 font-light leading-relaxed max-w-xl mb-14">
              Advice focused on long-term outcomes — not quick transactions.
            </p>

            <div className="space-y-1">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="group grid grid-cols-12 gap-4 py-8 border-t border-[#041f60]/12 hover:bg-[#041f60]/2 transition-colors"
                >
                  <div className="col-span-2 md:col-span-1 font-mono text-sm text-[#5b5299]/60 pt-2">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h4 className="font-display text-3xl md:text-4xl text-[#041f60] tracking-tight group-hover:text-[#5b5299] transition-colors leading-tight">
                      {p.title}
                    </h4>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-base text-[#041f60]/70 font-light leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              ))}
              <div className="border-t border-[#041f60]/12" />
            </div>
          </div>

          {/* Right: Principal broker portrait card */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-32">
              <div className="card-dark relative overflow-hidden p-8 md:p-10 noise corner-accent">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#4be4ff]/30 blur-3xl" />
                <div className="absolute inset-0 grid-bg-dark opacity-40" />

                <div className="relative">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#4be4ff] mb-8 flex items-center gap-2">
                    <span className="w-6 h-px bg-[#4be4ff]/50" />
                    Principal broker
                  </div>

                  {/* Broker portrait */}
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-8 img-treat">
                    <img
                      src="/images/broker-portrait.jpg"
                      alt="Pragnesh Patel — Principal Broker"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02143f] via-[#02143f]/30 to-transparent" />
                    {/* Decorative ring */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 250" fill="none">
                      <circle cx="100" cy="100" r="80" stroke="#4be4ff" strokeWidth="0.5" opacity="0.25" />
                    </svg>
                    <div className="absolute top-4 right-4 chip chip-dark text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4be4ff] animate-pulse" />
                      Available now
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur text-[10px] font-mono uppercase tracking-widest text-white/85 border border-white/10">
                      Brisbane · QLD
                    </div>
                  </div>

                  <div className="font-display text-4xl mb-1">Pragnesh Patel</div>
                  <div className="text-sm text-white/60 mb-8">Licensed Mortgage Specialist · NexRise Founder</div>

                  <blockquote className="font-display text-2xl italic text-white/85 leading-snug border-l-2 border-[#4be4ff] pl-5 mb-8">
                    "Strategy, speed, and clarity define every client journey we manage at NexRise."
                  </blockquote>

                  <div className="grid grid-cols-3 gap-3 text-center mb-6">
                    {[
                      { v: "40+", l: "Lenders" },
                      { v: "1:1", l: "Service" },
                      { v: "AU", l: "Wide" },
                    ].map((s) => (
                      <div key={s.l} className="rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#4be4ff]/30 transition-colors">
                        <div className="font-display text-2xl text-[#4be4ff]">{s.v}</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center justify-between pt-5 border-t border-white/10 text-sm group/cta"
                  >
                    <span className="text-white/80 group-hover/cta:text-[#4be4ff] transition-colors">
                      Book directly with Pragnesh
                    </span>
                    <svg className="w-4 h-4 text-[#4be4ff] group-hover/cta:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
