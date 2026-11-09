"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Turn from "./Turn";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  return (
    <Turn id="about" question={t.question}>
      <div className="space-y-4 text-[17px] leading-relaxed text-fg/90">
        {t.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {t.facts.map((f) => (
          <div key={f.label} className="rounded-xl border border-line bg-surface px-4 py-3">
            <dt className="font-mono text-xs text-muted">{f.label}</dt>
            <dd className="mt-1 text-sm text-fg">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Turn>
  );
}
