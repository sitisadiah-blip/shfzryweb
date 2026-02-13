import {
  advantagesSectionContent,
  companyInfoSectionContent,
  companyProfile,
  contactInfo,
  footerContent,
  heroContent,
  navigationItems,
  servicesSectionContent,
  serviceGroups,
} from "@/content/company";
import { AdvantagesSection } from "@/components/advantages-section";
import { CompanyInfoSection } from "@/components/company-info-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="site-shell relative min-h-screen">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />

      <SiteNav
        brand={companyProfile.shortName}
        items={navigationItems}
        actionLabel={heroContent.primaryActionLabel}
        actionHref={heroContent.primaryActionHref}
      />

      <main className="relative z-10">
        <HeroSection content={heroContent} profile={companyProfile} />
        <CompanyInfoSection content={companyInfoSectionContent} />
        <ServicesSection content={servicesSectionContent} groups={serviceGroups} />
        <AdvantagesSection content={advantagesSectionContent} />
        <ContactSection content={contactInfo} />
      </main>

      <SiteFooter content={footerContent} />
    </div>
  );
}
