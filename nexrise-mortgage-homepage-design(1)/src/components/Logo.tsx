export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-[#041f60]";
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#041f60] via-[#5b5299] to-[#4be4ff] flex items-center justify-center glow-cyan">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m4 18 6-8 4 5 6-9" />
            <path d="M14 6h6v6" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold text-[17px] tracking-tight ${text}`}>NexRise</span>
        <span className={`text-[10px] tracking-[0.2em] uppercase ${light ? "text-[#a6b6f8]" : "text-[#5b5299]"}`}>Mortgage</span>
      </div>
    </div>
  );
}
