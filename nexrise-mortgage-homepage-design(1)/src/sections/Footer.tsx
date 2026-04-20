export default function Footer() {
  return (
    <footer className="relative bg-[#020616] text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />

      {/* Massive brand mark */}
      <div className="relative container-grand pt-24 pb-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <a href="#top" className="flex items-center gap-3 mb-6 group">
              <span className="relative w-12 h-12 rounded-full bg-[#4be4ff] flex items-center justify-center text-[#041f60]">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M4 20 L4 8 L12 4 L20 8 L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M4 14 L20 14" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </span>
              <span className="font-display text-3xl">NexRise<span className="italic text-[#4be4ff]">.</span></span>
            </a>
            <p className="text-white/55 font-light leading-relaxed max-w-md mb-8">
              Your trusted partner in achieving financial success across Australia. We combine cutting-edge technology with personalised service to deliver exceptional outcomes.
            </p>
            <div className="flex gap-3">
              {["Li", "Fb", "Ig", "Tw"].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-xs font-mono text-white/60 hover:bg-[#4be4ff] hover:text-[#041f60] hover:border-[#4be4ff] transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#4be4ff] mb-5">Navigate</div>
            <ul className="space-y-3 text-sm">
              {[
                { l: "Home", h: "#top" },
                { l: "Services", h: "#services" },
                { l: "Pathway", h: "#pathway" },
                { l: "Edge", h: "#edge" },
                { l: "Voices", h: "#voices" },
                { l: "Contact", h: "#contact" },
              ].map((l) => (
                <li key={l.l}>
                  <a href={l.h} className="text-white/65 hover:text-[#4be4ff] transition-colors link-underline">
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#4be4ff] mb-5">Reach us</div>
            <ul className="space-y-3 text-sm text-white/65">
              <li><a href="tel:0404786459" className="hover:text-[#4be4ff] transition-colors">0404 786 459</a></li>
              <li><a href="mailto:hello@nexrisemortgage.com.au" className="hover:text-[#4be4ff] transition-colors break-all">hello@nexrisemortgage.com.au</a></li>
              <li>Fitzgibbon QLD 4018<br />Australia</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-12 md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#4be4ff] mb-5">Legal</div>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Credit Guide"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/65 hover:text-[#4be4ff] transition-colors">{l}</a>
                </li>
              ))}
              <li className="pt-2 text-xs font-mono text-white/40">ACL: 405961</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/5 border border-white/10">MFAA</span>
              <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/5 border border-white/10">AFCA</span>
            </div>
          </div>
        </div>

        {/* Massive logotype */}
        <div className="border-t border-white/10 pt-10 overflow-hidden">
          <div className="font-display text-[20vw] md:text-[18vw] leading-[0.85] tracking-[-0.04em] text-gradient-cyan select-none">
            NexRise<span className="italic">.</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} NexRise Mortgage Solutions</div>
          <div className="flex items-center gap-4">
            <span>Designed in Australia</span>
            <span className="opacity-30">●</span>
            <span>v2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
