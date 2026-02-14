import Image from "next/image";

import type { FooterContent } from "@/content/company";

interface SiteFooterProps {
  content: FooterContent;
  logoSrc: string;
  logoAlt: string;
  brand: string;
}

export function SiteFooter({ content, logoSrc, logoAlt, brand }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#071224]/80 px-4 py-6 backdrop-blur md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-xs text-slate-400 md:text-sm">
        <div className="flex items-center gap-2">
          <Image src={logoSrc} alt={logoAlt} width={26} height={26} className="h-6 w-6 rounded bg-white/90 p-0.5" />
          <span className="font-medium text-slate-200">{brand}</span>
        </div>
        <p>{content.copyright}</p>
        <p>{content.compliance}</p>
      </div>
    </footer>
  );
}
