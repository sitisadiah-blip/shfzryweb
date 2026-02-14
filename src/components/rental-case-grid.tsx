import Image from "next/image";

import type { RentalCaseGroup } from "@/content/company";

interface RentalCaseGridProps {
  id: string;
  group: RentalCaseGroup;
}

export function RentalCaseGrid({ id, group }: RentalCaseGridProps) {
  return (
    <section id={id} className="reveal-up px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{group.title}</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">{group.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {group.items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/15 bg-[#0c1b36]/82 shadow-xl shadow-[#040814]/30"
            >
              <Image src={item.image} alt={item.title} width={900} height={1200} className="aspect-[3/4] w-full object-cover" />
              <div className="space-y-2 p-5">
                <p className="text-xs font-medium tracking-[0.1em] text-[var(--brand-accent)] uppercase">{item.customerType}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.scenario}</p>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-3 py-1 text-xs font-medium text-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
