import { cn } from "@/lib/utils";

type SceneVariant =
  | "product"
  | "screenfree"
  | "scenarios"
  | "dashboard"
  | "journey"
  | "safety"
  | "marketplace"
  | "pricing";

interface SectionSceneProps {
  variant: SceneVariant;
  className?: string;
}

export function SectionScene({ variant, className }: SectionSceneProps) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 420 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${variant} illustration`}
    >
      <defs>
        <linearGradient id="scene-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0EA5E9" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="scene-amber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F59E0B" stopOpacity="0.95" />
          <stop offset="1" stopColor="#F97316" stopOpacity="0.72" />
        </linearGradient>
      </defs>

      <rect x="8" y="8" width="404" height="224" rx="30" fill="#FFFFFF" fillOpacity="0.82" />

      {variant === "product" ? (
        <>
          <circle cx="96" cy="120" r="54" fill="url(#scene-teal)" />
          <rect x="170" y="70" width="172" height="104" rx="24" fill="#0F172A" fillOpacity="0.9" />
          <rect x="184" y="84" width="144" height="14" rx="7" fill="#334155" />
          <rect x="184" y="108" width="144" height="52" rx="16" fill="url(#scene-teal)" />
          <rect x="355" y="92" width="26" height="56" rx="8" fill="url(#scene-amber)" />
          <circle cx="96" cy="120" r="18" fill="#FFFFFF" fillOpacity="0.85" />
        </>
      ) : null}

      {variant === "screenfree" ? (
        <>
          <path d="M70 175C120 96 156 70 212 70C266 70 308 101 350 173" stroke="url(#scene-teal)" strokeWidth="14" strokeLinecap="round" />
          <circle cx="94" cy="172" r="18" fill="#14B8A6" fillOpacity="0.84" />
          <circle cx="208" cy="70" r="16" fill="#F59E0B" fillOpacity="0.92" />
          <circle cx="326" cy="173" r="18" fill="#0EA5E9" fillOpacity="0.84" />
          <rect x="170" y="122" width="82" height="72" rx="18" fill="#E2E8F0" />
          <path d="M193 157H229" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
        </>
      ) : null}

      {variant === "scenarios" ? (
        <>
          <rect x="52" y="62" width="96" height="64" rx="16" fill="url(#scene-teal)" />
          <rect x="162" y="84" width="96" height="64" rx="16" fill="#1E293B" fillOpacity="0.88" />
          <rect x="272" y="106" width="96" height="64" rx="16" fill="url(#scene-amber)" />
          <path d="M104 152L212 176L320 152" stroke="#0F172A" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
        </>
      ) : null}

      {variant === "dashboard" ? (
        <>
          <rect x="50" y="48" width="320" height="146" rx="22" fill="#0F172A" fillOpacity="0.9" />
          <path d="M72 150C106 132 138 120 170 124C206 128 236 106 268 100C300 94 330 108 348 86" stroke="url(#scene-teal)" strokeWidth="8" strokeLinecap="round" />
          <rect x="72" y="70" width="90" height="20" rx="10" fill="#14B8A6" fillOpacity="0.28" />
          <rect x="176" y="70" width="72" height="20" rx="10" fill="#0EA5E9" fillOpacity="0.28" />
          <rect x="260" y="70" width="88" height="20" rx="10" fill="#F59E0B" fillOpacity="0.28" />
          <circle cx="348" cy="162" r="12" fill="#F59E0B" />
        </>
      ) : null}

      {variant === "journey" ? (
        <>
          <path d="M52 170C110 66 174 66 236 170C284 246 340 206 372 136" stroke="url(#scene-teal)" strokeWidth="12" strokeLinecap="round" />
          <circle cx="88" cy="126" r="12" fill="#14B8A6" />
          <circle cx="160" cy="88" r="12" fill="#0EA5E9" />
          <circle cx="236" cy="126" r="12" fill="#F59E0B" />
          <circle cx="308" cy="186" r="12" fill="#10B981" />
        </>
      ) : null}

      {variant === "safety" ? (
        <>
          <path d="M210 50L302 86V132C302 174 272 208 210 222C148 208 118 174 118 132V86L210 50Z" fill="#0F172A" fillOpacity="0.9" />
          <path d="M210 74L276 100V131C276 164 253 190 210 201C167 190 144 164 144 131V100L210 74Z" fill="url(#scene-teal)" />
          <path d="M178 137L202 162L242 118" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : null}

      {variant === "marketplace" ? (
        <>
          <rect x="62" y="76" width="86" height="92" rx="18" fill="url(#scene-amber)" />
          <rect x="167" y="58" width="86" height="110" rx="18" fill="url(#scene-teal)" />
          <rect x="272" y="92" width="86" height="76" rx="18" fill="#0F172A" fillOpacity="0.88" />
          <rect x="74" y="90" width="62" height="10" rx="5" fill="#FFFFFF" fillOpacity="0.7" />
          <rect x="179" y="72" width="62" height="10" rx="5" fill="#FFFFFF" fillOpacity="0.7" />
          <rect x="284" y="106" width="62" height="10" rx="5" fill="#94A3B8" fillOpacity="0.7" />
        </>
      ) : null}

      {variant === "pricing" ? (
        <>
          <rect x="64" y="78" width="90" height="96" rx="20" fill="#E2E8F0" />
          <rect x="166" y="62" width="90" height="112" rx="20" fill="url(#scene-teal)" />
          <rect x="268" y="90" width="90" height="84" rx="20" fill="#E2E8F0" />
          <circle cx="211" cy="48" r="16" fill="url(#scene-amber)" />
          <path d="M203 48H219" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <path d="M211 40V56" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        </>
      ) : null}
    </svg>
  );
}
