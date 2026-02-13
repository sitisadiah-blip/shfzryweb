import type { AdvantagesSectionContent } from "@/content/company";

interface AdvantagesSectionProps {
  content: AdvantagesSectionContent;
}

export function AdvantagesSection({ content }: AdvantagesSectionProps) {
  return (
    <section id="advantages" className="reveal-up px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-slate-500 uppercase">{content.sectionLabel}</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{content.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{content.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--brand-primary)]/14 bg-gradient-to-br from-white to-[var(--surface-soft)] p-6 shadow-lg shadow-[var(--brand-primary)]/10"
            >
              <p className="font-[var(--font-accent)] text-xs tracking-[0.18em] text-[var(--brand-primary)] uppercase">{item.highlight}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
