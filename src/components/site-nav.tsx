import Image from "next/image";
import Link from "next/link";

import type { NavigationItem } from "@/content/company";

interface SiteNavProps {
  brand: string;
  logoSrc: string;
  logoAlt: string;
  items: NavigationItem[];
  actionLabel: string;
  actionHref: string;
}

function isInternalRoute(href: string): boolean {
  return href.startsWith("/");
}

export function SiteNav({ brand, logoSrc, logoAlt, items, actionLabel, actionHref }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#081428]/78 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-[var(--font-accent)] text-sm font-semibold tracking-[0.14em] text-[var(--brand-accent)] uppercase"
        >
          <Image src={logoSrc} alt={logoAlt} width={36} height={36} className="h-9 w-9 rounded-md bg-white/90 p-1" />
          <span>{brand}</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            isInternalRoute(item.href) ? (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition-colors hover:text-[var(--brand-accent)]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition-colors hover:text-[var(--brand-accent)]"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
        {isInternalRoute(actionHref) ? (
          <Link
            href={actionHref}
            className="rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-semibold tracking-wide text-slate-950 transition-transform hover:scale-[1.02] md:text-sm"
          >
            {actionLabel}
          </Link>
        ) : (
          <a
            href={actionHref}
            className="rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-semibold tracking-wide text-slate-950 transition-transform hover:scale-[1.02] md:text-sm"
          >
            {actionLabel}
          </a>
        )}
      </nav>
    </header>
  );
}
