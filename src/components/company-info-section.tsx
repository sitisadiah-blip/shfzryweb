import type { CompanyInfoSectionContent } from "@/content/company";

interface CompanyInfoSectionProps {
  content: CompanyInfoSectionContent;
}

export function CompanyInfoSection({ content }: CompanyInfoSectionProps) {
  return (
    <section id="company-info" className="reveal-up px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/80 bg-white/86 p-6 shadow-xl shadow-[var(--brand-primary)]/8 md:p-9">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-slate-500 uppercase">{content.sectionLabel}</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{content.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{content.description}</p>
        </div>

        <div className="mb-4 inline-flex rounded-full bg-[var(--brand-accent)]/14 px-4 py-2 text-sm font-semibold text-[var(--brand-primary)]">
          {content.taxStatusLabel}：{content.taxStatusValue}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-[var(--brand-accent)]/45 hover:bg-white"
            >
              <p className="text-xs font-medium text-slate-500">{item.label}</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-800">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
