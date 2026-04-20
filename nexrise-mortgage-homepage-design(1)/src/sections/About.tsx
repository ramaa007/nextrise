export default function About() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-[#fafbff]">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#a6b6f8]/15 blur-[120px]" />

      <div className="relative container-grand">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: editorial */}
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">
              Who we are · Index 05
            </div>
            <h2 className="h-display text-grand text-[#041f60] mb-8">
              Mortgage advice
              <br />
              built on <span className="italic text-gradient">trust.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#041f60]/70 font-light leading-relaxed max-w-2xl mb-12">
              Helping Australians make better borrowing choices with a transparent
              approach that prioritises results and relationships — not commission tables.
              Every recommendation is independent, every conversation is honest.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mb-10">
              {[
                { k: "MFAA", v: "Mortgage & Finance Association Member" },
                { k: "AFCA", v: "Australian Financial Complaints Authority" },
                { k: "ACL", v: "Australian Credit Licence · 405961" },
                { k: "ASIC", v: "Regulated Australian Lender Network" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-[#041f60]/10 bg-white hover:border-[#4be4ff]/40 hover:shadow-lg hover:shadow-[#4be4ff]/10 transition-all group"
                >
                  <div className="font-display text-3xl text-[#041f60] leading-none w-16 group-hover:text-[#5b5299] transition-colors">{b.k}</div>
                  <div className="text-sm text-[#041f60]/65 leading-snug pt-1">{b.v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#contact" className="btn-primary group">
                Speak with our team
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#voices" className="btn-ghost">
                Read client stories
              </a>
            </div>

            {/* Lifestyle image strip with quote overlay */}
            <div className="relative rounded-[28px] overflow-hidden img-treat max-w-2xl shadow-xl">
              <img
                src="/images/family-keys.jpg"
                alt="Happy Australian family with new home keys"
                className="w-full aspect-[16/8] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#041f60]/85 via-[#041f60]/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#4be4ff] mb-2">Real outcomes</div>
                <div className="font-display text-2xl md:text-3xl leading-snug max-w-md">
                  Helping Australians unlock the door to <span className="italic">their next chapter.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: rotating compass / authority badge */}
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-[460px] h-[460px] max-w-full flex items-center justify-center">
              {/* Outer rotating ring */}
              <svg viewBox="0 0 460 460" className="absolute inset-0 spin-slower">
                <defs>
                  <path id="circle-text" d="M 230,230 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
                </defs>
                <text fontSize="14" fill="#041f60" fontFamily="JetBrains Mono" letterSpacing="6">
                  <textPath href="#circle-text">
                    NEXRISE MORTGAGE · STRATEGIC LENDING · TRUSTED NATIONWIDE · ACL 405961 ·
                  </textPath>
                </text>
              </svg>

              {/* Mid ring */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-[#041f60]/15" />
              <div
                className="absolute w-[340px] h-[340px] rounded-full border border-[#4be4ff]/25 spin-slow"
                style={{ borderStyle: "dashed" }}
              />

              {/* Tick marks */}
              <svg viewBox="0 0 460 460" className="absolute inset-0">
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * Math.PI * 2;
                  const x1 = 230 + Math.cos(angle) * 165;
                  const y1 = 230 + Math.sin(angle) * 165;
                  const x2 = 230 + Math.cos(angle) * 175;
                  const y2 = 230 + Math.sin(angle) * 175;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#041f60"
                      strokeWidth={i % 6 === 0 ? "2" : "1"}
                      opacity={i % 6 === 0 ? "0.5" : "0.2"}
                    />
                  );
                })}
              </svg>

              {/* Inner dark medallion */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#041f60] to-[#02143f] flex items-center justify-center text-white shadow-2xl noise overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4be4ff]/25 via-transparent to-[#5b5299]/30" />
                <div className="relative text-center">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#4be4ff] mb-3">Authorised</div>
                  <div className="font-display text-6xl">NX</div>
                  <div className="font-display text-2xl italic text-white/80 mt-1">mortgage</div>
                  <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-white/50">ACL · 405961</div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute top-2 right-4 chip glass float-y" style={{ animationDelay: "0s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Verified Broker
              </div>
              <div className="absolute bottom-6 -left-2 chip glass float-y" style={{ animationDelay: "-3s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4be4ff]" />
                MFAA Member
              </div>
              <div className="absolute top-1/2 -right-6 chip glass float-y" style={{ animationDelay: "-1.5s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5b5299]" />
                AFCA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
