"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type ItemType = "current" | "education" | "past";

// Tailwind color mappings for dynamic styling
const TYPE_STYLES: Record<
  ItemType,
  { dot: string; border: string; bg: string; text: string }
> = {
  current: {
    dot: "bg-cyan-500 shadow-[0_0_12px_#06b6d4]",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
  },
  education: {
    dot: "bg-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    text: "text-violet-400",
  },
  past: {
    dot: "bg-slate-500",
    border: "border-slate-500/20",
    bg: "bg-slate-900/60",
    text: "text-slate-500",
  },
};

export default function Experience() {
  const { lang } = useLanguage();
  const exp = translations[lang].experience;

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto font-sans">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Briefcase size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
            {exp.sectionTitle}
          </span>
        </div>
        <h2 className="text-slate-50 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {exp.sectionSubtitle}
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (Hidden on mobile) */}
        <div className="hidden sm:block absolute left-7 top-5 bottom-5 w-px bg-gradient-to-b from-cyan-500/40 to-cyan-500/5" />

        <div className="flex flex-col gap-8">
          {exp.items.map((item, i) => {
            const type = item.type as ItemType;
            const style = TYPE_STYLES[type];

            // TypeScript handling for items that might have bullets OR descriptions
            const bullets = "bullets" in item ? item.bullets : null;
            const description = "description" in item ? item.description : null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-0 sm:gap-10 items-start group"
              >
                {/* Dot (Hidden on mobile) */}
                <div className="relative shrink-0 z-10 mt-5 hidden sm:block">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-slate-950 relative left-[21px] ${style.dot}`}
                  />
                  {type === "current" && (
                    <div className="absolute top-0 left-[21px] w-4 h-4 rounded-full bg-cyan-500/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl p-7 sm:p-8 backdrop-blur-md transition-all duration-300 border hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${style.bg} ${style.border}`}
                >
                  {/* Role + Year header */}
                  <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
                    <div>
                      <h3 className="text-slate-50 text-xl font-bold tracking-tight mb-1">
                        {item.role}
                      </h3>
                      <p
                        className={`text-[13.5px] font-bold tracking-wide ${style.text}`}
                      >
                        {item.company}
                      </p>
                    </div>
                    <span className="bg-slate-900/80 border border-slate-700/50 text-slate-400 text-xs font-bold px-3 py-1.5 rounded-full font-mono whitespace-nowrap shadow-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Bullet points */}
                  {bullets && bullets.length > 0 ? (
                    <ul className="flex flex-col gap-3 mb-6">
                      {bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-3 h-[2px] rounded-sm mt-2.5 shrink-0 opacity-70 ${type === "education" ? "bg-violet-400" : type === "past" ? "bg-slate-500" : "bg-cyan-400"}`}
                          />
                          <p className="text-slate-400 text-[14.5px] leading-relaxed m-0">
                            {bullet}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-[14.5px] leading-relaxed mb-6">
                      {description}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-900/80 border border-slate-700/60 text-slate-400 text-xs font-semibold px-3 py-1 rounded-md font-mono transition-colors group-hover:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
