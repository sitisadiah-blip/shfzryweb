import type { RentalVideo } from "@/content/company";

interface RentalVideoSectionProps {
  content: RentalVideo;
}

export function RentalVideoSection({ content }: RentalVideoSectionProps) {
  return (
    <section id="video" className="reveal-up px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/14 bg-[#0c1d3b]/86 p-6 shadow-xl shadow-[#040814]/30 md:p-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--brand-accent)] uppercase">现场视频</p>
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{content.title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">{content.description}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
          <video
            controls
            playsInline
            preload="none"
            poster={content.poster}
            className="aspect-video w-full"
          >
            <source src={content.src} type="video/mp4" />
          </video>
        </div>

        <p className="mt-3 text-xs text-slate-400">{content.note}</p>
      </div>
    </section>
  );
}
