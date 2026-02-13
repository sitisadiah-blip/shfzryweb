import type { NavigationItem } from "@/content/company";

interface SiteNavProps {
  brand: string;
  items: NavigationItem[];
  actionLabel: string;
  actionHref: string;
}

export function SiteNav({ brand, items, actionLabel, actionHref }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a
          href="#intro"
          className="font-[var(--font-accent)] text-sm font-semibold tracking-[0.18em] text-[var(--brand-primary)] uppercase"
        >
          {brand}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[var(--brand-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={actionHref}
          className="rounded-full bg-[var(--brand-primary)] px-4 py-2 text-xs font-semibold tracking-wide text-white transition-transform hover:scale-[1.02] md:text-sm"
        >
          {actionLabel}
        </a>
      </nav>
    </header>
  );
}
