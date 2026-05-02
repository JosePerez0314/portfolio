"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Wrench, Database, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

// Imports your icons from the separated data file
import { TECH_ICONS } from "./icons/TechIcons";

const CATEGORY_ICONS = [Code2, Database, Layout, Wrench, Cpu];

const CATEGORY_STYLES = [
  {
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

export default function Skills() {
  const { lang } = useLanguage();
  const sk = translations[lang].skills;

  return (
    <section
      id="skills"
      className="relative py-24 px-6 font-sans overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Code2 size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              {sk.sectionTitle}
            </span>
          </div>
          <h2 className="text-slate-50 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {sk.sectionSubtitle}
          </h2>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sk.categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
            const style = CATEGORY_STYLES[i % CATEGORY_STYLES.length];

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-slate-900/70 border ${style.border} rounded-2xl p-7 backdrop-blur-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${style.bg} ${style.border}`}
                  >
                    <Icon size={18} className={style.color} />
                  </div>
                  <div>
                    <h3 className="text-slate-50 text-base font-bold tracking-tight leading-snug">
                      {cat.name}
                    </h3>
                    {cat.label && (
                      <span
                        className={`${style.color} text-[10px] font-bold tracking-widest uppercase`}
                      >
                        {cat.label}
                      </span>
                    )}
                  </div>
                </div>

                {/* Thin divider */}
                <div className={`h-px w-full my-4 ${style.border}`} />

                {/* Items */}
                <div className="flex flex-col gap-2.5">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.04 }}
                      className="flex items-center gap-3 px-3.5 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl cursor-default transition-colors hover:bg-slate-800/80 hover:border-slate-600/80 group"
                    >
                      <span className="text-[15px] flex items-center justify-center min-w-[20px] group-hover:scale-110 transition-transform">
                        {TECH_ICONS[item] || (
                          <span className="text-slate-500 text-[10px]">●</span>
                        )}
                      </span>
                      <span className="text-slate-300 text-[13px] font-bold font-mono">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
