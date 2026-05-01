"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import me from "../public/img/yo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Outer Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Available Badge */}
          <div className="flex items-center gap-2 bg-[#0E283C] border border-[#0A738C] px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[#0A738C] text-xs font-bold tracking-wide uppercase">
              Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] text-slate-50 leading-[1.1] tracking-tight max-w-xl">
            <span className="text-[#06B2D1]">Systems Engineer</span> &<br />
            Backend Architect.
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
            Engineering scalable backends. Expected 2026 graduate with a 3.7
            GPA.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 py-2">
            <div className="flex flex-col">
              <span className="text-[#06b2d1] text-3xl md:text-4xl font-extrabold">
                2026
              </span>
              <span className="text-slate-400 text-xs font-medium mt-1">
                Expected Grad.
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#06b2d1] text-3xl md:text-4xl font-extrabold">
                3.7
              </span>
              <span className="text-slate-400 text-xs font-medium mt-1">
                GPA (Honours)
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="flex items-center gap-2 bg-[#06B2D1] hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-base transition-all shadow-lg shadow-cyan-500/20">
              View My Architecture
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 bg-transparent border border-slate-700 hover:border-[#06B2D1] hover:text-[#06B2D1] text-slate-300 px-6 py-3 rounded-xl font-medium text-base transition-all">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-70 md:h-70 flex items-center justify-center">
            {/* Ring */}
            <div className="absolute w-[170%] h-[110%] animate-spin-slow pointer-events-none">
              <div className="w-full h-full rounded-[50%] border-2 border-dashed border-cyan-500/30" />
            </div>

            {/* Image */}
            <div className="relative w-full h-full rounded-full border border-slate-800 p-2 overflow-hidden shadow-2xl bg-slate-900 z-10">
              <Image
                src={me}
                alt="José Pérez - Backend Architect"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-[10%] -right-13 z-20 animate-float">
              <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg shadow-xl">
                <div className="w-2 h-2 rounded-full bg-[#68A063]" />
                <span className="text-slate-200 text-xs font-bold">
                  Node.js
                </span>
              </div>
            </div>

            <div className="absolute bottom-[20%] -left-25 z-20 animate-float-delayed">
              <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-lg shadow-xl">
                <span className="text-cyan-400 text-xs font-bold">
                  ⚡ Prisma ORM
                </span>
              </div>
            </div>

            <div className="absolute -bottom-11 right-12 z-20 animate-float">
              <div className="flex items-center gap-2 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-lg shadow-xl">
                <span className="text-cyan-400 text-xs font-bold tracking-wide">
                  GPA 3.7 🎓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
