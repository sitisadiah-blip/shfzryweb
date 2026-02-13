import type { FooterContent } from "@/content/company";

interface SiteFooterProps {
  content: FooterContent;
}

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/70 bg-white/75 px-4 py-6 backdrop-blur md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs text-slate-500 md:text-sm">
        <p>{content.copyright}</p>
        <p>{content.compliance}</p>
      </div>
    </footer>
  );
}
