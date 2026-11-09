"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, MessageSquare, X } from "lucide-react";
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
import Spark from "./Spark";

export default function Sidebar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const item = (active: boolean) =>
    `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
      active
        ? "bg-surface-2 text-fg"
        : "text-muted hover:bg-surface hover:text-fg"
    }`;

  const nav = (
    <nav aria-label="Primary" className="flex min-h-0 flex-col gap-5">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-current={pathname === "/" ? "page" : undefined}
        className={`${item(pathname === "/")} font-medium`}
      >
        <Spark size={18} />
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
              className={item(active)}
            >
              <MessageSquare size={14} className="shrink-0 opacity-60" />
              <span className="truncate">{t[id].question}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );

  const footer = (
    <div className="flex flex-col gap-4">
      <div
        role="group"
        aria-label={t.nav.language}
        className="grid grid-cols-2 rounded-lg border border-line bg-surface p-0.5 text-xs"
      >
        {(["EN", "ES"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`rounded-md py-1.5 font-medium transition-colors duration-150 ${
              lang === l ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 px-1 text-muted">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent"><FaGithub size={18} /></a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><FaLinkedin size={18} /></a>
        <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-colors hover:text-accent"><Mail size={18} /></a>
      </div>
    </div>
  );

  const brand = (
    <Link href="/" className="flex items-center gap-3">
      <Avatar size={36} />
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-base font-medium text-fg">{t.meta.name}</span>
        <span className="text-xs text-muted">{t.meta.role}</span>
      </span>
    </Link>
  );

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-line bg-deep p-4 lg:flex">
        <div className="flex min-h-0 flex-col gap-6 overflow-y-auto">
          <div className="px-1 pt-1">{brand}</div>
          {nav}
        </div>
        {footer}
      </aside>

      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-deep/95 px-4 backdrop-blur lg:hidden">
        {brand}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={t.nav.menu}
          className="rounded-lg border border-line p-2 text-fg"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-30 flex max-h-[calc(100dvh-3.5rem)] flex-col gap-5 overflow-y-auto border-b border-line bg-deep p-4 lg:hidden"
          >
            {nav}
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
