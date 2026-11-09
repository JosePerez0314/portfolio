"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Lock, Play, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations, LINKS } from "@/data/translations";
import Turn from "./Turn";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const [video, setVideo] = useState(false);

  return (
    <Turn id="projects" question={t.question}>
      <div className="flex flex-col gap-5">
        {t.items.map((p) => (
          <article
            key={p.name}
            className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="font-mono text-xs text-muted">{p.kind}</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                {p.status}
              </span>
            </div>
            <p className="mt-4 text-[15px] text-fg/90">{p.problem}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {p.videoLabel && (
                <button
                  onClick={() => setVideo((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong active:scale-[0.98]"
                >
                  {video ? <X size={14} /> : <Play size={14} />}
                  {video ? p.closeLabel : p.videoLabel}
                </button>
              )}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong active:scale-[0.98]"
                >
                  <Globe size={14} />
                  {p.liveLabel}
                  <ArrowUpRight size={14} />
                </a>
              )}
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-fg transition-colors duration-150 hover:border-accent/50"
                >
                  <FaGithub size={14} />
                  {p.codeLabel}
                  <ArrowUpRight size={14} className="text-muted" />
                </a>
              )}
              {p.privateLabel && (
                <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-line px-4 py-2 text-sm text-muted">
                  <Lock size={14} />
                  {p.privateLabel}
                </span>
              )}
            </div>
            {p.videoLabel && video && (
              <div className="mt-5 aspect-video overflow-hidden rounded-xl border border-line">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${LINKS.demoVideoId}?autoplay=1&rel=0`}
                  title={p.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </article>
        ))}
      </div>

      <aside className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5 sm:p-6">
        <h3 className="font-serif text-lg font-medium">{t.fullstack.title}</h3>
        <p className="mt-2 text-[15px] text-fg/90">{t.fullstack.text}</p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong active:scale-[0.98]"
        >
          {t.fullstack.cta}
          <ArrowUpRight size={14} />
        </Link>
      </aside>
    </Turn>
  );
}
