"use client";

import { useMemo, useState } from "react";

import type { ServiceGroup, ServicesSectionContent } from "@/content/company";

interface ServicesSectionProps {
  content: ServicesSectionContent;
  groups: ServiceGroup[];
  defaultVisibleGroups?: number;
}

export function ServicesSection({
  content,
  groups,
  defaultVisibleGroups = 3,
}: ServicesSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleGroups = useMemo(() => {
    if (expanded) {
      return groups;
    }

    return groups.slice(0, defaultVisibleGroups);
  }, [defaultVisibleGroups, expanded, groups]);

  return (
    <section id="services" className="reveal-up px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-slate-500 uppercase">{content.sectionLabel}</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{content.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{content.description}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {visibleGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/70 bg-white/86 p-5 shadow-lg shadow-[var(--brand-primary)]/7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{group.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-4xl text-xs leading-relaxed text-slate-500 md:text-sm">{content.legalNote}</p>
          <button
            type="button"
            onClick={() => setExpanded((previous) => !previous)}
            className="rounded-full border border-[var(--brand-primary)]/30 bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-primary)] transition-colors hover:bg-[var(--brand-primary)] hover:text-white"
          >
            {expanded ? content.collapseLabel : content.expandLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
