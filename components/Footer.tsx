"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-line">
      <p className="mx-auto max-w-3xl px-5 py-6 text-xs text-muted sm:px-8">
        {translations[lang].footer}
      </p>
    </footer>
  );
}
