const items = [
  "Strategic Optimization",
  "NexRise Edge",
  "Objective Lending Authority",
  "Modern Architecture",
  "Portfolio Growth",
  "Zero Bias Clarity",
  "Digital Velocity",
];

export default function Marquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-[#041f60] text-white">
      <div className="absolute inset-0 noise" />
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-3xl md:text-5xl italic text-white/90">{t}</span>
            <svg className="w-6 h-6 text-[#4be4ff] flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
