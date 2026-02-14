import Image from "next/image";

import type { ShowcaseSectionContent } from "@/content/company";

interface ShowcaseSectionProps {
  content: ShowcaseSectionContent;
}

export function ShowcaseSection({ content }: ShowcaseSectionProps) {
  return (
    <section id="showcase" className="reveal-up px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-slate-400 uppercase">{content.sectionLabel}</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{content.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{content.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-[#101f3f]/82 shadow-xl shadow-[#040814]/30"
            >
              <Image src={item.image} alt={item.title} width={800} height={500} className="h-44 w-full object-cover" />
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--brand-accent)] uppercase">{item.subtitle}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
