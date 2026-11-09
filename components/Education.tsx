"use client";

import { Award, GraduationCap, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Turn from "./Turn";

const card = "rounded-2xl border border-line bg-surface p-5";
const label = "flex items-center gap-2 font-mono text-xs text-accent";

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang].education;
  return (
    <Turn id="education" question={t.question}>
      <div className="flex flex-col gap-4">
        <div className={card}>
          <p className={label}>
            <GraduationCap size={14} />
            {t.degree.label}
          </p>
          <h3 className="mt-3 font-serif text-lg font-medium">{t.degree.title}</h3>
          <p className="text-sm text-fg/90">{t.degree.school}</p>
          <p className="mt-1 text-xs text-muted">{t.degree.detail}</p>
        </div>

        <div className={card}>
          <p className={label}>
            <Award size={14} />
            {t.certsLabel}
          </p>
          <ul className="mt-3 space-y-4">
            {t.certs.map((c) => (
              <li key={c.title}>
                <h3 className="font-medium">{c.title}</h3>
                <p className="text-sm text-fg/90">{c.issuer}</p>
                <p className="mt-1 text-xs text-muted">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={card}>
          <p className={label}>
            <Languages size={14} />
            {t.languagesLabel}
          </p>
          <ul className="mt-3 space-y-3">
            {t.languages.map((l) => (
              <li key={l.name}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-medium">{l.name}</h3>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                    {l.level}
                  </span>
                </div>
                {l.detail && <p className="mt-1 text-sm text-muted">{l.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Turn>
  );
}
