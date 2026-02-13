import type { ContactInfo } from "@/content/company";

interface ContactSectionProps {
  content: ContactInfo;
}

function buildPhoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="reveal-up px-4 pt-10 pb-16 md:px-8 md:pt-14 md:pb-20">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[var(--brand-primary)]/18 bg-gradient-to-br from-[var(--surface-soft)] to-white p-6 shadow-xl shadow-[var(--brand-primary)]/14 md:p-9">
        <p className="text-xs font-medium tracking-[0.14em] text-slate-500 uppercase">{content.sectionLabel}</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">{content.description}</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white bg-white p-4">
            <p className="text-xs font-medium text-slate-500">{content.contactPersonLabel}</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{content.contactPerson}</p>
          </article>

          <article className="rounded-2xl border border-white bg-white p-4">
            <p className="text-xs font-medium text-slate-500">{content.phoneLabel}</p>
            <a href={buildPhoneHref(content.phone)} className="mt-2 inline-block text-lg font-semibold text-[var(--brand-primary)]">
              {content.phone}
            </a>
          </article>

          <article className="rounded-2xl border border-white bg-white p-4">
            <p className="text-xs font-medium text-slate-500">{content.emailLabel}</p>
            <a
              href={`mailto:${content.email}`}
              className="mt-2 inline-block text-base font-semibold text-[var(--brand-primary)] break-all"
            >
              {content.email}
            </a>
          </article>

          <article className="rounded-2xl border border-white bg-white p-4">
            <p className="text-xs font-medium text-slate-500">{content.regionLabel}</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{content.region}</p>
          </article>

          <article className="rounded-2xl border border-white bg-white p-4">
            <p className="text-xs font-medium text-slate-500">{content.hoursLabel}</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{content.officeHours}</p>
          </article>
        </div>

        <article className="mt-4 rounded-2xl border border-white bg-white p-4">
          <p className="text-xs font-medium text-slate-500">{content.addressLabel}</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">{content.address}</p>
        </article>
      </div>
    </section>
  );
}
