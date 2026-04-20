const services = [
  {
    n: "01",
    title: "Home Loans",
    desc: "Strategic foundations for your primary residence with flexible structures designed around your life.",
    tags: ["Owner Occupied Strategy", "Fixed & Variable Optimisation", "Offset Setup"],
    featured: true,
  },
  {
    n: "02",
    title: "First Home Buyer",
    desc: "Navigating grants and government schemes to get you into the market sooner.",
    tags: ["FHB Schemes", "Grant Eligibility"],
  },
  {
    n: "03",
    title: "Refinancing",
    desc: "Lowering interest rates and unlocking equity for your next move.",
    tags: ["Rate Review", "Equity Release"],
  },
  {
    n: "04",
    title: "Investment Loans",
    desc: "Wealth-building structures focusing on tax efficiency and portfolio scaling.",
    tags: ["Portfolio Build", "Tax Efficient"],
  },
  {
    n: "05",
    title: "Construction Loans",
    desc: "Progressive funding that supports your build from slab to settlement.",
    tags: ["Progress Draws", "Builder Liaison"],
  },
  {
    n: "06",
    title: "Personal & Car",
    desc: "Competitive finance for life's significant personal assets and milestones.",
    tags: ["Asset Finance", "Personal Loans"],
  },
];

function ServiceIcon({ n }: { n: string }) {
  const icons: Record<string, React.ReactElement> = {
    "01": <path d="M4 20 L4 9 L12 3 L20 9 L20 20 M9 20 L9 13 L15 13 L15 20" />,
    "02": <path d="M12 4 L4 12 L4 20 L20 20 L20 12 Z M12 4 L20 12 M9 20 L9 14 L15 14 L15 20" />,
    "03": <path d="M4 8 L20 8 M4 8 L8 4 M4 8 L8 12 M20 16 L4 16 M20 16 L16 12 M20 16 L16 20" />,
    "04": <path d="M3 17 L9 11 L13 15 L21 7 M21 7 L21 12 M21 7 L16 7" />,
    "05": <path d="M3 21 L21 21 M5 21 L5 10 L12 5 L19 10 L19 21 M9 21 L9 14 L15 14 L15 21" />,
    "06": <path d="M5 17 L19 17 M3 17 L3 13 L5 9 L19 9 L21 13 L21 17 M7 17 L7 20 M17 17 L17 20 M5 13 L19 13" />,
  };
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[n]}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-[#a6b6f8]/15 blur-[120px]" />

      <div className="relative container-grand">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-20 md:mb-28 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">
              What we do · Index 01
            </div>
            <h2 className="h-display text-grand text-[#041f60]">
              Mortgage solutions
              <br />
              for <span className="italic text-gradient">every stage.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-6 space-y-6">
            <div className="h-px w-16 gradient-bar rounded-full" />
            <p className="text-lg md:text-xl text-[#041f60]/70 font-light leading-relaxed">
              Tailored lending strategies designed for growth and long-term success — not transactional rate-shopping.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[#041f60] font-medium link-underline">
              Speak with a strategist
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Bento asymmetric grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {services.map((s, i) => {
            const span = s.featured
              ? "col-span-12 md:col-span-7 row-span-2"
              : i === 1
              ? "col-span-12 md:col-span-5"
              : i === 2
              ? "col-span-12 md:col-span-5"
              : "col-span-12 md:col-span-4";

            return (
              <article
                key={s.n}
                className={`${span} group relative rounded-[32px] overflow-hidden ${
                  s.featured
                    ? "card-dark p-10 md:p-14 min-h-[560px]"
                    : "card-surface p-8 md:p-10 min-h-[300px]"
                }`}
              >
                {s.featured && (
                  <>
                    <img
                      src="/images/service-interior.jpg"
                      alt="Modern luxury home interior"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#02143f]/95 via-[#02143f]/80 to-[#041f60]/70" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4be4ff]/25 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#5b5299]/20 blur-3xl" />
                    <div className="absolute inset-0 grid-bg-dark opacity-30" />
                  </>
                )}
                {s.n === "02" && (
                  <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full overflow-hidden opacity-25 group-hover:opacity-50 transition-opacity">
                    <img src="/images/first-home.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="relative h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`text-xs font-mono tracking-[0.2em] flex items-center gap-2 ${s.featured ? "text-[#4be4ff]" : "text-[#5b5299]"}`}>
                      <span className={`w-6 h-px ${s.featured ? "bg-[#4be4ff]/40" : "bg-[#5b5299]/40"}`} />
                      {s.n}
                    </div>
                    <div className={`${s.featured ? "text-[#4be4ff]" : "text-[#041f60]/30 group-hover:text-[#4be4ff]"} transition-colors`}>
                      <ServiceIcon n={s.n} />
                    </div>
                  </div>

                  <h3 className={`font-display ${s.featured ? "text-6xl md:text-7xl lg:text-8xl" : "text-4xl md:text-5xl"} leading-[0.95] tracking-tight mb-6 ${s.featured ? "" : "text-[#041f60]"}`}>
                    {s.title}
                  </h3>

                  <p className={`${s.featured ? "text-white/75 text-lg md:text-xl max-w-lg" : "text-[#041f60]/65 text-sm md:text-base"} font-light leading-relaxed mb-8`}>
                    {s.desc}
                  </p>

                  {s.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-3.5 py-2 rounded-full ${
                            s.featured
                              ? "bg-white/8 text-white/85 border border-white/15"
                              : "bg-[#041f60]/5 text-[#041f60]/70 border border-[#041f60]/10"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={`flex items-center justify-between pt-5 border-t ${s.featured ? "border-white/10" : "border-[#041f60]/8"}`}>
                    <div className={`flex items-center gap-2 text-sm font-medium ${s.featured ? "text-[#4be4ff]" : "text-[#041f60]"}`}>
                      <span className="link-underline">Explore solution</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H8M17 7V16" />
                      </svg>
                    </div>
                    {s.featured && (
                      <div className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#4be4ff]/10 border border-[#4be4ff]/30 text-[#4be4ff]">
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 items-center p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-[#041f60]/5 to-[#4be4ff]/5 border border-[#041f60]/8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#5b5299] mb-3">Not sure where to start?</div>
            <h4 className="font-display text-3xl md:text-4xl text-[#041f60] leading-tight">
              Let's map the smartest path together.
            </h4>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href="#contact" className="btn-cyan group">
              Book a free strategy call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
