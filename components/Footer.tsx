"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-deep/95 backdrop-blur lg:left-64">
      <p className="mx-auto max-w-3xl px-5 py-3 text-xs text-muted sm:px-8">
        {translations[lang].footer}
      </p>
    </footer>
  );
}
