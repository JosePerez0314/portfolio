"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

/* ── Utility: wrap matched phrases in cyan spans ─────────────────────── */
function richText(text: string, phrases: string[]): React.ReactNode {
  const remaining = text;
  const parts: React.ReactNode[] = [];
  let key = 0;

  const sorted = [...phrases].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  );

  const segments = remaining.split(pattern);
  for (const seg of segments) {
    if (phrases.includes(seg)) {
      parts.push(
        <span key={key++} className="text-cyan-400 font-semibold">
          {seg}
        </span>,
      );
    } else {
      parts.push(<span key={key++}>{seg}</span>);
    }
  }
  return <>{parts}</>;
}

/* ── Component ────────────────────────────────────────────────────────── */
export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
        {/* ── LEFT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:sticky lg:top-32"
        >
          {/* Overline label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <User size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              {t.overline}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-slate-50 text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-7">
            {t.heading}
          </h2>

          {/* Thin accent rule */}
          <div className="w-12 h-0.5 bg-lanier-to-r from-cyan-400 to-transparent rounded-sm mb-7" />

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="inline-flex items-center gap-2.5 bg-cyan-500/5 border border-cyan-500/20 rounded-xl py-2.5 px-4 font-mono shadow-sm"
          >
            <span className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#22c55e] animate-pulse block" />
            </span>
            <span className="text-slate-400 text-xs font-semibold tracking-wide">
              <span className="text-slate-500">{"> "}</span>
              {t.badge}
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col"
        >
          {t.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`text-slate-400 text-base md:text-lg leading-[1.85] tracking-wide ${
                i < t.paragraphs.length - 1
                  ? "pb-7 border-b border-slate-800/80 mb-7"
                  : ""
              }`}
            >
              {richText(para.text, para.highlights)}
            </motion.p>
          ))}

          {/* Signature line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="h-px w-8 bg-cyan-500/30 rounded-sm" />
            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
              {t.signature}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
