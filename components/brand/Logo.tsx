import { cn } from "@/lib/cn";

export function Logo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
      <path d="M 26 62 Q 60 50 94 62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <g fill="currentColor">
        <ellipse cx="36" cy="58.5" rx="4.2" ry="1.9" transform="rotate(-22 36 58.5)" />
        <ellipse cx="46" cy="55.5" rx="4.6" ry="2.1" transform="rotate(-14 46 55.5)" />
        <ellipse cx="56" cy="53.2" rx="5" ry="2.3" transform="rotate(-4 56 53.2)" />
        <ellipse cx="66" cy="53.2" rx="5" ry="2.3" transform="rotate(4 66 53.2)" />
        <ellipse cx="76" cy="55.5" rx="4.6" ry="2.1" transform="rotate(14 76 55.5)" />
        <ellipse cx="86" cy="58.5" rx="4.2" ry="1.9" transform="rotate(22 86 58.5)" />
        <circle cx="52" cy="61.5" r="1.6" />
        <circle cx="60" cy="62.5" r="1.8" />
        <circle cx="68" cy="61.5" r="1.6" />
      </g>
      <text x="60" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.4" letterSpacing="2.4" fill="currentColor">
        EST · MUSCAT
      </text>
      <text x="60" y="83" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="currentColor">
        Village
      </text>
      <text x="60" y="97" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.2" letterSpacing="3" fill="currentColor">
        LEBANESE
      </text>
    </svg>
  );
}
