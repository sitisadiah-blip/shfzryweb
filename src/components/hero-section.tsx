import type { CompanyProfile, HeroContent } from "@/content/company";

interface HeroSectionProps {
  content: HeroContent;
  profile: CompanyProfile;
}

export function HeroSection({ content, profile }: HeroSectionProps) {
  return (
    <section id="intro" className="reveal-up relative px-4 pt-16 pb-8 md:px-8 md:pt-24 md:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/12 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--brand-primary)]">
            {content.badge}
          </span>
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-[0.14em] text-slate-500 uppercase">{content.sectionLabel}</p>
            <h1 className="text-balance text-3xl leading-tight font-semibold text-slate-900 md:text-5xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-sm text-slate-600 md:text-base">{content.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={content.primaryActionHref}
              className="rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-primary)]/25 transition-transform hover:-translate-y-0.5"
            >
              {content.primaryActionLabel}
            </a>
            <a
              href={content.secondaryActionHref}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-primary)]"
            >
              {content.secondaryActionLabel}
            </a>
          </div>
        </div>

        <div className="reveal-up-delay rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-[var(--brand-primary)]/10 backdrop-blur-sm md:p-7">
          <p className="font-[var(--font-accent)] text-xs tracking-[0.18em] text-[var(--brand-primary)] uppercase">
            {content.englishNameLabel}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">{profile.companyNameEn}</p>
          <p className="mt-5 text-sm font-medium text-slate-700">{profile.tagline}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{profile.overview}</p>
          <div className="mt-6 grid gap-3">
            {content.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 transition-colors hover:border-[var(--brand-accent)]/40"
              >
                <p className="text-xs font-medium text-slate-500">{fact.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
