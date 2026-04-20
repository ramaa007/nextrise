const testimonials = [
  {
    name: "Arpit & Nikita Patel",
    role: "Investment Portfolio",
    quote:
      "Strategic advice that changed our entire property approach. The structure was perfect for our portfolio growth.",
    color: "#4be4ff",
  },
  {
    name: "Hardik Patel",
    role: "Refinance Client",
    quote:
      "The digital workflow is incredible. Records were secured in record time without any bank bias.",
    color: "#a6b6f8",
  },
  {
    name: "Divyank Patel",
    role: "First Home Buyer",
    quote:
      "Transparent comparisons that saved us thousands. Simply a smarter way to bank.",
    color: "#5b5299",
  },
  {
    name: "Dinkal & Dharti",
    role: "Construction Loan",
    quote:
      "Absolute clarity from start to finish. We felt supported at every single step of our property journey.",
    color: "#4be4ff",
  },
];

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(/&|\s/)
    .filter(Boolean)
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center font-display text-xl text-[#041f60] flex-shrink-0 shadow-lg"
      style={{ background: `linear-gradient(135deg, ${color}, #ffffff)` }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="voices" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4be4ff]/10 blur-[120px]" />

      <div className="relative container-grand">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-20 md:mb-24 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">
              Client experiences · Index 06
            </div>
            <h2 className="h-display text-grand text-[#041f60]">
              What our
              <br />
              clients <span className="italic text-gradient">say.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-4 space-y-5">
            <div className="h-px w-16 gradient-bar rounded-full" />
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#4be4ff]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2 L14.85 8.6 L22 9.27 L16.5 14.14 L18.18 21.02 L12 17.27 L5.82 21.02 L7.5 14.14 L2 9.27 L9.15 8.6 Z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl text-[#041f60] tabular leading-none">4.98</span>
              <span className="text-sm font-mono text-[#041f60]/60">avg from real clients</span>
            </div>
          </div>
        </div>

        {/* Asymmetric quote grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {testimonials.map((t, i) => {
            const span =
              i === 0
                ? "col-span-12 md:col-span-7"
                : i === 1
                ? "col-span-12 md:col-span-5"
                : i === 2
                ? "col-span-12 md:col-span-5"
                : "col-span-12 md:col-span-7";
            const isFeatured = i === 0;
            return (
              <article
                key={t.name}
                className={`${span} group relative rounded-[32px] p-10 md:p-14 ${
                  isFeatured ? "card-dark" : "card-surface"
                } overflow-hidden`}
              >
                {isFeatured && (
                  <>
                    <img
                      src="/images/family-keys.jpg"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#02143f]/95 via-[#02143f]/80 to-[#041f60]/85" />
                    <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#4be4ff]/25 blur-3xl" />
                    <div className="absolute inset-0 grid-bg-dark opacity-25" />
                  </>
                )}
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <svg
                      className={`w-14 h-14 ${isFeatured ? "text-[#4be4ff]" : "text-[#a6b6f8]"}`}
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path
                        d="M0 30 Q 0 12, 18 6 L20 12 Q 8 16, 8 26 L18 26 L18 42 L0 42 Z M28 30 Q 28 12, 46 6 L48 12 Q 36 16, 36 26 L46 26 L46 42 L28 42 Z"
                        opacity="0.5"
                      />
                    </svg>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg
                          key={s}
                          className={`w-4 h-4 ${isFeatured ? "text-[#4be4ff]" : "text-[#041f60]"}`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2 L14.85 8.6 L22 9.27 L16.5 14.14 L18.18 21.02 L12 17.27 L5.82 21.02 L7.5 14.14 L2 9.27 L9.15 8.6 Z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p
                    className={`font-display ${
                      isFeatured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                    } leading-tight tracking-tight mb-10 ${
                      isFeatured ? "text-white" : "text-[#041f60]"
                    }`}
                  >
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-current/10">
                    <Avatar name={t.name} color={t.color} />
                    <div>
                      <div
                        className={`font-medium text-lg ${
                          isFeatured ? "text-white" : "text-[#041f60]"
                        }`}
                      >
                        {t.name}
                      </div>
                      <div
                        className={`text-xs font-mono uppercase tracking-widest mt-1 ${
                          isFeatured ? "text-[#4be4ff]" : "text-[#5b5299]"
                        }`}
                      >
                        {t.role}
                      </div>
                    </div>
                    <div className="ml-auto text-xs font-mono uppercase tracking-widest text-current/40">
                      Verified
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-4 gap-6 p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-[#041f60] to-[#02143f] text-white relative overflow-hidden noise">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#4be4ff]/15 blur-3xl" />
          {[
            { v: "100%", l: "Independent advice" },
            { v: "40+", l: "Lender panel" },
            { v: "<4hr", l: "Response time" },
            { v: "AU-wide", l: "Service coverage" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`relative ${i > 0 ? "md:border-l border-white/10 md:pl-8" : ""}`}
            >
              <div className="font-display text-5xl md:text-6xl text-gradient-cyan tabular leading-none mb-3">
                {s.v}
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
