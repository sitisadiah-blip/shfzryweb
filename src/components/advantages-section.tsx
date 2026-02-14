import type { AdvantagesSectionContent } from "@/content/company";

interface AdvantagesSectionProps {
  content: AdvantagesSectionContent;
}

export function AdvantagesSection({ content }: AdvantagesSectionProps) {
  return (
    <section id="advantages" className="reveal-up px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-slate-400 uppercase">{content.sectionLabel}</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{content.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{content.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--brand-accent)]/20 bg-gradient-to-br from-[#0f1f42] to-[#132a52] p-6 shadow-lg shadow-[#020611]/35"
            >
              <p className="font-[var(--font-accent)] text-xs tracking-[0.18em] text-[var(--brand-accent)] uppercase">{item.highlight}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
