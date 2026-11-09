"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Turn from "./Turn";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;
  return (
    <Turn id="experience" question={t.question}>
      <ol className="relative space-y-6 border-l border-line pl-6">
        {t.items.map((it) => (
          <li key={it.company} className="relative">
            <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{it.role}</h3>
              <span className="font-mono text-xs text-muted">{it.period}</span>
            </div>
            <p className="text-sm text-accent">{it.company}</p>
            <p className="text-xs text-muted">{it.place}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

    </Turn>
  );
}
