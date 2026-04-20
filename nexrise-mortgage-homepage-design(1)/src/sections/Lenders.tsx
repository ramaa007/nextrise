const lenders = [
  "CBA", "Westpac", "NAB", "ANZ", "Macquarie", "Suncorp",
  "ING", "St.George", "BankSA", "AMP Bank", "Bankwest", "Pepper",
  "ME Bank", "Bendigo", "Heritage", "BOQ",
];

export default function Lenders() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#fafbff]">
      <div className="container-grand mb-14">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">
              Our premium panel · Index 07
            </div>
            <h2 className="h-display text-5xl md:text-7xl lg:text-8xl text-[#041f60]">
              Lender <span className="italic text-gradient">spectrum.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2 space-y-5">
            <div className="h-px w-16 gradient-bar rounded-full" />
            <p className="text-lg text-[#041f60]/70 font-light leading-relaxed">
              Direct broker access to <span className="text-[#041f60] font-medium">40+ Australian lenders</span> — selected purely on outcomes for your situation.
            </p>
          </div>
        </div>
      </div>

      {/* Two opposing marquees */}
      <div className="relative space-y-5">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, #fafbff 0%, transparent 8%, transparent 92%, #fafbff 100%)",
          }}
        />

        <div className="flex whitespace-nowrap marquee-slow">
          {[...lenders, ...lenders].map((l, i) => (
            <div key={i} className="flex items-center gap-7 px-7">
              <div className="px-10 py-6 rounded-2xl border border-[#041f60]/10 bg-white font-display text-3xl text-[#041f60] hover:border-[#4be4ff] hover:shadow-[0_0_40px_rgba(75,228,255,0.25)] transition-all">
                {l}
              </div>
              <span className="text-[#a6b6f8] text-2xl">·</span>
            </div>
          ))}
        </div>

        <div className="flex whitespace-nowrap marquee-reverse">
          {[...lenders.slice().reverse(), ...lenders.slice().reverse()].map(
            (l, i) => (
              <div key={i} className="flex items-center gap-7 px-7">
                <div className="px-8 py-4 rounded-full bg-[#041f60]/5 font-mono text-base tracking-wider text-[#041f60]/80 hover:bg-[#041f60] hover:text-white transition-all">
                  {l.toUpperCase()}
                </div>
                <span className="text-[#5b5299]/40">●</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom note */}
      <div className="container-grand mt-14">
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#041f60]/10">
          <div className="flex items-center gap-3 text-sm text-[#041f60]/60">
            <span className="w-2 h-2 rounded-full bg-[#4be4ff]" />
            <span>Showing select panel — access to 40+ in total</span>
          </div>
          <a href="#contact" className="text-sm text-[#041f60] font-medium link-underline flex items-center gap-2">
            Compare lenders for your loan
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
