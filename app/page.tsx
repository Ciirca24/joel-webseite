import React from "react";

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    mail: (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    mapPin: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    arrowRight: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    pen: (
      <svg {...commonProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    message: (
      <svg {...commonProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
    inbox: (
      <svg {...commonProps}>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function Button({ children, href, variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-stone-950 hover:bg-stone-200";

  return (
}