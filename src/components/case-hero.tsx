import type { RentalSectionContent } from "@/content/company";

interface CaseHeroProps {
  content: RentalSectionContent;
}

export function CaseHero({ content }: CaseHeroProps) {
  return (
    <section id="top" className="reveal-up px-4 pt-16 pb-10 md:px-8 md:pt-20 md:pb-12">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/14 bg-gradient-to-r from-[#0a1b3d] via-[#102c59] to-[#163f73] p-7 shadow-2xl shadow-[#030915]/35 md:p-10">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-accent)] uppercase">{content.sectionLabel}</p>
        <h1 className="mt-3 text-3xl leading-tight font-semibold text-white md:text-5xl">{content.title}</h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">{content.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={content.ctaHref}
            className="rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            {content.ctaLabel}
          </a>
          <a
            href="#short-term"
            className="rounded-full border border-white/35 bg-white/8 px-5 py-3 text-sm font-semibold text-white"
          >
            查看短租案例
          </a>
        </div>
      </div>
    </section>
  );
}
