import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pathway", href: "#pathway" },
  { label: "Edge", href: "#edge" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 pt-5">
      <nav
        className={`mx-auto max-w-[1720px] flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
          scrolled ? "glass shadow-[0_10px_40px_-10px_rgba(4,31,96,0.15)] py-2.5 px-3 md:px-4" : "py-3 px-4 md:px-5"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group pl-2">
          <span className="relative w-9 h-9 rounded-full bg-[#041f60] flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-[#4be4ff] to-[#a6b6f8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg viewBox="0 0 24 24" className="w-4 h-4 relative z-10 text-white" fill="none">
              <path d="M4 20 L4 8 L12 4 L20 8 L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M4 14 L20 14" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-[#041f60] text-[15px]">
            NexRise<span className="text-[#5b5299] font-normal">.mortgage</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-[#041f60]/75 hover:text-[#041f60] transition-colors rounded-full hover:bg-[#041f60]/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="tel:0404786459" className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#5b5299]">
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#4be4ff] pulse-dot" />
              <span className="absolute inset-0.5 rounded-full bg-[#4be4ff]" />
            </span>
            0404 786 459
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#041f60] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#4be4ff] hover:text-[#041f60] transition-all duration-300 group"
          >
            Strategy Call
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#041f60]/15 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className={`block w-4 h-0.5 bg-[#041f60] transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-4 h-0.5 bg-[#041f60] transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-0.5 bg-[#041f60] transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mx-auto max-w-[1720px] mt-2 glass rounded-3xl p-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium hover:bg-[#041f60]/5 rounded-xl"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
