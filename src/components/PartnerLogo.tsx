import type { PartnerDef } from "@/data/partners";

function PartnerMonogram({ name }: { name: string }) {
  const letter = name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "?";
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-lg font-bold text-primary"
      aria-hidden
    >
      {letter}
    </div>
  );
}

export function PartnerLogo({ name, Icon, logoSrc }: PartnerDef) {
  if (Icon) {
    return <Icon className="h-12 w-12 shrink-0" aria-hidden />;
  }
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt=""
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-12 w-12 shrink-0 object-contain"
        aria-hidden
      />
    );
  }
  return <PartnerMonogram name={name} />;
}
