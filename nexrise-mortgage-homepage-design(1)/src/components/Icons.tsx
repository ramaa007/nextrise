type IconProps = { className?: string; size?: number };

const base = (size?: number) => ({
  width: size ?? 24,
  height: size ?? 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const HomeIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </svg>
);

export const KeyIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9" />
    <path d="m17 6 3 3" />
    <path d="m14 9 2 2" />
  </svg>
);

export const RefreshIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

export const TrendIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

export const BuildIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

export const CarIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M5 17h14l-1.5-6A2 2 0 0 0 15.6 9H8.4a2 2 0 0 0-1.9 2L5 17Z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

export const CheckIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const ArrowRight = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ShieldIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const SparkleIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const BoltIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
  </svg>
);

export const EyeIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const StarIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size ?? 20} height={size ?? 20} fill="currentColor" className={className}>
    <path d="m12 2 3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7Z" />
  </svg>
);

export const PhoneIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.7 12.7 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const MailIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PinIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MenuIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const QuoteIcon = ({ className, size }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size ?? 32} height={size ?? 32} fill="currentColor" className={className}>
    <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Z" opacity=".9" />
  </svg>
);

export default {
  HomeIcon, KeyIcon, RefreshIcon, TrendIcon, BuildIcon, CarIcon,
  CheckIcon, ArrowRight, ShieldIcon, SparkleIcon, BoltIcon, EyeIcon,
  StarIcon, PhoneIcon, MailIcon, PinIcon, MenuIcon, CloseIcon, QuoteIcon,
};
