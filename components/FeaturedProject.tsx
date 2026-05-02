"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, Sparkles, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Image from "next/image";
import logo from "../public/img/Logo_TalentMatch_AI.png";

// Your placeholder Shorts video ID
const VIDEO_ID = "AkuiCN_Z1Jk";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1.6-5-2.5-7-3" />
    </svg>
  );
}

export default function FeaturedProject() {
  const { lang } = useLanguage();
  const p = translations[lang].project;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="projects-list"
      className="py-24 px-6 max-w-6xl mx-auto font-sans"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
            {p.sectionTitle}
          </span>
        </div>
        <h2 className="text-slate-50 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {p.name}
        </h2>
      </motion.div>

      {/* ── MAIN PROJECT CARD — TalentMatch AI ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start bg-slate-900/70 border border-cyan-500/15 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl mb-8"
      >
        {/* LEFT — Vertical Video Card */}
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="relative w-55 aspect-9/16 rounded-[20px] overflow-hidden bg-slate-950 border border-cyan-500/20 shadow-[0_12px_48px_rgba(0,0,0,0.5)] group">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full relative"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/90 to-transparent z-10 pointer-events-none" />

                  {/* UPDATE: Logo Image Implementation */}
                  <div className="relative w-full h-[65%] bg-slate-50 flex items-center justify-center p-6">
                    <Image
                      src={logo}
                      alt="TalentMatch AI Logo"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>

                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-5 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-14 h-14 rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-[0_0_24px_rgba(6,182,212,0.4)] cursor-pointer border-none"
                    >
                      <Play
                        size={20}
                        className="text-slate-950 ml-1 fill-current"
                      />
                    </motion.button>
                    <span className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">
                      {p.videoLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 z-20 bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 rounded-full px-2.5 py-1">
                    <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-tight">
                      {p.badge}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full w-full relative"
                >
                  <iframe
                    className="w-full h-full border-none"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    title="TalentMatch AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-2 right-2 z-30 p-1.5 bg-slate-950/80 rounded-full text-slate-400 hover:text-white transition-colors border border-white/10"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT — Project Details */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[11px] font-bold px-3 py-1 rounded-full tracking-wider">
                {p.tagline}
              </span>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-bold px-3 py-1 rounded-full">
                ● Live
              </span>
            </div>
            <h3 className="text-slate-50 text-3xl md:text-4xl font-bold tracking-tight">
              {p.name}
            </h3>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-xl">
              {p.description}
            </p>
          </div>

          {/* Architecture highlights */}
          <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-5">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3.5">
              Architecture Highlights
            </p>
            <ul className="space-y-2.5">
              {p.archHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="text-slate-300 text-[13.5px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800/80 border border-slate-700/80 text-slate-400 text-xs font-semibold px-3.5 py-1.5 rounded-lg font-mono hover:border-cyan-500/40 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-cyan-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(6,182,212,0.25)] no-underline"
            >
              <ExternalLink size={15} />
              {p.liveDemo}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/JosePerez0314/talentmatch-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-slate-600 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-all"
            >
              <GithubIcon size={15} />
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* ── SECONDARY PROJECT CARD — Portfolio 2.0 ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center bg-slate-900/50 border border-indigo-500/15 rounded-[20px] p-8 md:p-9 backdrop-blur-md hover:border-indigo-500/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all"
      >
        {/* Left: Info */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <span className="bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-[11px] font-bold px-3 py-1 rounded-full tracking-wider">
              {p.project2Tagline}
            </span>
            <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[11px] font-bold px-3 py-1 rounded-full">
              ⚡ {p.project2Badge}
            </span>
          </div>

          <h3 className="text-slate-50 text-2xl md:text-3xl font-bold tracking-tight">
            {p.project2Name}
          </h3>

          <p className="text-slate-400 text-[14px] leading-relaxed max-w-xl mb-1">
            {p.project2Description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {p.project2Stack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800/80 border border-slate-700/60 text-slate-400 text-[11.5px] font-semibold px-3 py-1 rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0 md:mt-0 mt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/JosePerez0314/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 px-5 py-3 rounded-xl font-bold text-sm no-underline transition-colors whitespace-nowrap"
          >
            <GithubIcon size={15} />
            View Repo
            <ArrowRight size={14} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
