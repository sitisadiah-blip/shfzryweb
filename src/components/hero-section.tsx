import Image from "next/image";

import type { CompanyProfile, HeroContent } from "@/content/company";

interface HeroSectionProps {
  content: HeroContent;
  profile: CompanyProfile;
}

export function HeroSection({ content, profile }: HeroSectionProps) {
  return (
    <section id="intro" className="reveal-up relative px-4 pt-16 pb-10 md:px-8 md:pt-24 md:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[var(--brand-accent)]/45 bg-[var(--brand-accent)]/12 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[var(--brand-accent)] uppercase">
            {content.badge}
          </span>
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-[0.14em] text-slate-400 uppercase">{content.sectionLabel}</p>
            <h1 className="text-balance text-3xl leading-tight font-semibold text-white md:text-5xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{content.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={content.primaryActionHref}
              className="rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[var(--brand-accent)]/20 transition-transform hover:-translate-y-0.5"
            >
              {content.primaryActionLabel}
            </a>
            <a
              href={content.secondaryActionHref}
              className="rounded-full border border-white/35 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--brand-accent)]"
            >
              {content.secondaryActionLabel}
            </a>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {content.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur">
                <p className="text-xs text-slate-300">{fact.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up-delay relative overflow-hidden rounded-3xl border border-white/20 bg-[radial-gradient(circle_at_30%_20%,rgba(33,196,255,0.34),transparent_32%),linear-gradient(140deg,#0d1838_10%,#10244b_55%,#173262_100%)] p-5 shadow-2xl shadow-[#050b1f]/45 md:p-7">
          <Image
            src={content.heroImage}
            alt={content.heroImageAlt}
            width={1200}
            height={900}
            priority
            className="h-[330px] w-full rounded-2xl object-cover md:h-[400px]"
          />
          <div className="absolute right-4 bottom-4 max-w-xs rounded-xl border border-white/25 bg-slate-950/55 p-4 backdrop-blur">
            <p className="font-[var(--font-accent)] text-xs tracking-[0.16em] text-[var(--brand-accent)] uppercase">
              {content.englishNameLabel}
            </p>
            <p className="mt-1 text-sm font-medium text-white">{profile.companyNameEn}</p>
            <p className="mt-3 text-sm font-medium text-slate-100">{profile.tagline}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">{profile.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
