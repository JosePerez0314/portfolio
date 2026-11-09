"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Download } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import me from "../public/img/me.jpeg";

function Typed({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setN((v) => v + 1), 28);
    return () => clearInterval(id);
  }, [reduce]);
  const count = reduce ? text.length : Math.min(n, text.length);
  const done = count >= text.length;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.slice(0, count)}
        {!done && (
          <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent [animation:caret_1s_steps(1)_infinite]" />
        )}
      </span>
    </>
  );
}

function RoleLoop({ roles }: { roles: readonly string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = roles[i];
    let delay = 70;
    let step = () => setN((v) => v + 1);
    if (!deleting && n >= word.length) {
      delay = 1500;
      step = () => setDeleting(true);
    } else if (deleting && n > 0) {
      delay = 35;
      step = () => setN((v) => v - 1);
    } else if (deleting) {
      delay = 300;
      step = () => {
        setDeleting(false);
        setI((v) => (v + 1) % roles.length);
      };
    }
    const id = setTimeout(step, delay);
    return () => clearTimeout(id);
  }, [n, deleting, i, roles, reduce]);

  const text = reduce ? roles.join(" · ") : roles[i].slice(0, n);
  return (
    <p className="min-h-[1.3em] text-2xl font-semibold tracking-tight text-accent sm:text-3xl md:text-4xl">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden>
        {text}
        {!reduce && (
          <span className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.12em] bg-accent [animation:caret_1s_steps(1)_infinite]" />
        )}
      </span>
    </p>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const chip =
    "rounded-full border border-line bg-surface-2 px-5 py-2.5 text-sm text-muted transition-colors duration-150 hover:border-accent/50 hover:text-fg";

  return (
    <section className="flex flex-col justify-center gap-10 pb-10 md:gap-14 pt-6 lg:min-h-[calc(100dvh-11rem)] lg:pt-10">
      <div className="grid w-full items-center gap-8 md:grid-cols-[1fr_240px] md:gap-16">
        <div className="flex flex-col items-start gap-6 md:gap-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-accent [animation:status-pulse_2.4s_ease-in-out_infinite]" />
            {t.hero.status}
          </span>

          <div className="flex flex-col gap-2">
            <p className="text-lg text-fg/90">{t.hero.greeting}</p>
            <RoleLoop key={lang} roles={t.hero.roles} />
          </div>
          <h1 className="min-h-[3.4em] font-serif text-xl font-medium leading-[1.3] tracking-tight text-fg/90 sm:text-2xl md:text-3xl">
            <Typed key={lang} text={t.hero.title} />
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.desc}
          </p>
        </div>

        <div className="order-first mx-auto w-44 sm:w-48 md:order-last md:mx-0 md:w-full">
          <div className="relative aspect-square overflow-hidden rounded-full border-2 border-line bg-surface shadow-[0_0_0_6px_var(--color-deep)]">
            <Image
              src={me}
              alt="José Pérez"
              fill
              priority
              sizes="(min-width: 768px) 260px, 176px"
              className="origin-[68%_2%] scale-[1.25] object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Composer-style bar (decorative, not an input) */}
      <div className="w-full rounded-3xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <div className="flex min-h-[4.5rem] items-start justify-between gap-4 px-2 pb-5 pt-2">
          <span className="text-lg text-muted/80 sm:text-xl">
            {t.hero.composerPlaceholder}
          </span>
          <Link
            href="/about"
            aria-label={t.nav.about}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-bg transition-colors duration-150 hover:bg-accent-strong active:scale-[0.98]"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className={chip}>{t.hero.chips.projects}</Link>
          <a
            href={t.resume.filePath}
            download={t.resume.fileName}
            className={`${chip} inline-flex items-center gap-2`}
          >
            <Download size={14} />
            {t.hero.chips.cv}
          </a>
          <Link href="/contact" className={chip}>{t.hero.chips.contact}</Link>
        </div>
      </div>
    </section>
  );
}
