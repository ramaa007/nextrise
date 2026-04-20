const steps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "Comprehensive financial assessment and goal setting tailored to your trajectory.",
    duration: "Day 1–3",
    points: ["Financial deep-dive", "Goal architecture", "Borrowing capacity"],
  },
  {
    n: "02",
    title: "Loan Structuring",
    desc: "Tailored solutions selected from our extensive lender network with structure-first thinking.",
    duration: "Day 4–7",
    points: ["Lender shortlist", "Structure design", "Rate negotiation"],
  },
  {
    n: "03",
    title: "Approval & Settlement",
    desc: "Seamless process with expert documentation handling end-to-end — no detail missed.",
    duration: "Week 2–4",
    points: ["Pre-approval", "Documentation", "Settlement coordination"],
  },
  {
    n: "04",
    title: "Celebration",
    desc: "Your moment of achievement and property ownership realised — keys in hand.",
    duration: "Settlement",
    points: ["Completion", "Hand-over", "Welcome kit"],
  },
  {
    n: "05",
    title: "Ongoing Partnership",
    desc: "Continuous reviews and active management for long-term financial success.",
    duration: "Year 1+",
    points: ["Annual rate review", "Refinance strategy", "Lifelong support"],
  },
];

export default function Pathway() {
  return (
    <section
      id="pathway"
      className="relative py-32 md:py-44 bg-[#030820] text-white overflow-hidden noise"
    >
      {/* Atmospheric aerial image */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-screen">
        <img src="/images/pathway-aerial.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030820] via-transparent to-[#030820]" />
      </div>

      {/* Aurora */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-[#4be4ff]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#5b5299]/30 blur-[150px]" />
      <div className="absolute inset-0 grid-bg-dark opacity-40" />

      {/* Big background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="font-display text-[32vw] leading-none text-outline-cyan opacity-40 whitespace-nowrap">
          PATHWAY
        </div>
      </div>

      <div className="relative container-grand">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-24 md:mb-32 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow eyebrow-cyan">
              Our journey · Index 02
            </div>
            <h2 className="h-display text-grand">
              The NexRise
              <br />
              <span className="italic text-gradient-cyan">pathway.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-6 space-y-6">
            <div className="h-px w-16 gradient-bar rounded-full" />
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              A streamlined, transparent five-step process designed to compress complexity and accelerate confidence.
            </p>
          </div>
        </div>

        {/* Vertical timeline rail with horizontal cards */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4be4ff]/40 to-transparent md:-translate-x-px" />

          <div className="space-y-16 md:space-y-28">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.n} className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative w-4 h-4">
                      <span className="absolute inset-0 rounded-full bg-[#4be4ff] pulse-dot" />
                      <span className="relative block w-4 h-4 rounded-full bg-[#4be4ff] glow-cyan" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}`}>
                    <div className={`inline-block group ${isLeft ? "md:ml-auto" : ""}`}>
                      <div className={`flex items-baseline gap-5 mb-5 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="font-display text-8xl md:text-9xl lg:text-[10rem] text-gradient-cyan leading-none tabular">
                          {s.n}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 px-3 py-1.5 rounded-full border border-white/15">
                          {s.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 leading-[0.95]">
                        {s.title}
                      </h3>
                      <p className="text-white/65 font-light leading-relaxed text-lg max-w-md">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Visual on opposite side */}
                  <div className={`hidden md:block ${isLeft ? "md:col-start-2 md:pl-20" : "md:col-start-1 md:pr-20"}`}>
                    <div className={`glass-ink rounded-[28px] p-8 ${isLeft ? "" : "md:ml-auto"} max-w-md relative overflow-hidden corner-accent`}>
                      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#4be4ff]/10 blur-2xl" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#4be4ff]">Step {s.n}</div>
                          <div className="flex gap-1">
                            {steps.map((_, j) => (
                              <span
                                key={j}
                                className={`h-1 rounded-full transition-all ${
                                  j <= i ? "w-8 bg-[#4be4ff]" : "w-3 bg-white/15"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          {s.points.map((p, idx) => (
                            <div key={idx} className="flex items-center gap-4 pb-4 border-b border-white/8 last:border-0 last:pb-0">
                              <div className="relative flex-shrink-0">
                                <span className="w-7 h-7 rounded-full bg-[#4be4ff]/15 border border-[#4be4ff]/30 flex items-center justify-center text-[10px] font-mono text-[#4be4ff]">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                              </div>
                              <span className="text-sm text-white/80 flex-1">{p}</span>
                              <svg className="w-3.5 h-3.5 text-[#4be4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#4be4ff] mb-4">Ready to begin?</div>
              <h3 className="font-display text-4xl md:text-5xl tracking-tight">
                Your <span className="italic text-gradient-cyan">strategy call</span> awaits.
              </h3>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#contact" className="btn-cyan group">
                Start your pathway
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
