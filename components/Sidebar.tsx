"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, MessageSquare, PanelLeft, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import {
  translations,
  SECTION_IDS,
  hrefFor,
  EMAIL,
  LINKS,
} from "@/data/translations";
import Avatar from "./Avatar";
import Orb from "./Orb";

export default function Sidebar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  // Mobile drawer: lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const item = (active: boolean, large: boolean) =>
    `flex items-center gap-3 rounded-xl transition-colors duration-150 ${
      large ? "px-4 py-3.5 text-base" : "rounded-lg px-3 py-2 text-sm"
    } ${
      active
        ? "bg-surface-2 text-fg"
        : "text-muted hover:bg-surface hover:text-fg"
    }`;

  const renderNav = (large: boolean) => (
    <nav aria-label="Primary" className="flex min-h-0 flex-col gap-5">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-current={pathname === "/" ? "page" : undefined}
        className={`${item(pathname === "/", large)} font-medium`}
      >
        <Orb size={large ? 22 : 18} />
        {t.nav.home}
      </Link>

      <div className="flex flex-col gap-1">
        <p className="px-3 pb-1 text-xs font-medium text-muted/80">
          {t.nav.recents}
        </p>
        {SECTION_IDS.map((id) => {
          const href = hrefFor(id);
          const active = pathname === href;
          return (
            <Link
              key={id}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={item(active, large)}
            >
              <MessageSquare size={large ? 18 : 14} className="shrink-0 opacity-60" />
              <span className="truncate">{t[id].question}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );

  const langSwitch = (compact: boolean) => (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`grid grid-cols-2 rounded-lg border border-line bg-surface p-0.5 text-xs ${
        compact ? "w-[4.5rem]" : ""
      }`}
    >
      {(["EN", "ES"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md font-medium transition-colors duration-150 ${
            compact ? "py-1" : "py-1.5"
          } ${lang === l ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  const footer = (
    <div className="flex flex-col gap-4">
      {langSwitch(false)}
      <div className="flex items-center gap-5 px-1 text-muted">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent"><FaGithub size={20} /></a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><FaLinkedin size={20} /></a>
        <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-colors hover:text-accent"><Mail size={20} /></a>
      </div>
    </div>
  );

  const brand = (
    <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
      <Avatar size={36} />
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-base font-medium text-fg">{t.meta.name}</span>
        <span className="text-xs text-muted">{t.meta.role}</span>
      </span>
    </Link>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-line bg-deep p-4 lg:flex">
        <div className="flex min-h-0 flex-col gap-6 overflow-y-auto">
          <div className="px-1 pt-1">{brand}</div>
          {renderNav(false)}
        </div>
        {footer}
      </aside>

      {/* Mobile top bar: menu icon on the left, like the Claude app */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-2 border-b border-line bg-deep/95 px-3 backdrop-blur lg:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={t.nav.menu}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-fg transition-colors duration-150 hover:bg-surface active:scale-[0.96]"
        >
          <PanelLeft size={22} />
        </button>
        <div className="flex items-center gap-2">
          <Orb size={22} />
          <span className="font-serif text-lg font-medium text-fg">{t.meta.name}</span>
        </div>
        <div className="ml-auto pr-1">{langSwitch(true)}</div>
      </header>

      {/* Mobile menu: slides in from the left and covers the whole screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
            }
            className="fixed inset-0 z-50 flex flex-col bg-deep lg:hidden"
          >
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4">
              {brand}
              <button
                onClick={() => setOpen(false)}
                aria-label={t.nav.close}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-fg transition-colors duration-150 hover:bg-surface active:scale-[0.96]"
              >
                <X size={22} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
              {renderNav(true)}
            </div>
            <div className="shrink-0 border-t border-line p-4 pb-6">{footer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
