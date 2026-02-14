import type { Metadata } from "next";

import {
  brandAsset,
  caseNavigationItems,
  companyProfile,
  contactInfo,
  footerContent,
  rentalSectionContent,
  rentalVideo,
} from "@/content/company";
import { CaseHero } from "@/components/case-hero";
import { RentalCaseGrid } from "@/components/rental-case-grid";
import { RentalVideoSection } from "@/components/rental-video-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "机器人租赁案例 | 上海法智瑞云科技服务有限公司",
  description:
    "展示上海法智瑞云科技服务有限公司在机器人短租和长租场景的阶段性案例，覆盖会展活动与企业常驻应用。",
  alternates: {
    canonical: "/cases",
  },
};

export default function CasesPage() {
  const phoneHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="site-shell relative min-h-screen">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />

      <SiteNav
        brand={companyProfile.shortName}
        logoSrc={brandAsset.logoLight}
        logoAlt={brandAsset.alt}
        items={caseNavigationItems}
        actionLabel="预约沟通"
        actionHref="/#contact"
      />

      <main className="relative z-10">
        <CaseHero content={rentalSectionContent} />
        <RentalCaseGrid id="short-term" group={rentalSectionContent.shortTerm} />
        <RentalCaseGrid id="long-term" group={rentalSectionContent.longTerm} />
        <RentalVideoSection content={rentalVideo} />

        <section id="contact-cta" className="reveal-up px-4 py-10 md:px-8 md:py-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl border border-white/14 bg-[#0b1b37]/86 p-6 shadow-xl shadow-[#040814]/30 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--brand-accent)] uppercase">联系 CTA</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">需要机器人租赁方案？立即联系刘女士</h2>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                电话 {contactInfo.phone} · 邮箱 {contactInfo.email}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                电话咨询
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="rounded-full border border-white/35 bg-white/8 px-5 py-3 text-sm font-semibold text-white"
              >
                邮件咨询
              </a>
            </div>
          </div>
        </section>

        <section className="reveal-up px-4 pb-14 md:px-8 md:pb-18">
          <div className="mx-auto w-full max-w-6xl rounded-2xl border border-amber-300/25 bg-amber-100/7 px-5 py-4 text-xs leading-relaxed text-amber-100 md:text-sm">
            {rentalSectionContent.legalNote}
          </div>
        </section>
      </main>

      <SiteFooter
        content={footerContent}
        logoSrc={brandAsset.logoLight}
        logoAlt={brandAsset.alt}
        brand={brandAsset.wordmark}
      />
    </div>
  );
}
