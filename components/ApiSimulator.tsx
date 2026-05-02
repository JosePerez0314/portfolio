"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, CheckCircle, Clock, Wifi } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const REQUEST_BODY = `{
  "role": "Backend Engineer",
  "tech_stack": [
    "Node.js",
    "Express",
    "MySQL"
  ],
  "experience_years": 3,
  "location": "Toronto, CA"
}`;

const RESPONSE_BODY = `{
  "status": 200,
  "message": "Match analysis complete",
  "data": {
    "candidate": "José Pérez",
    "match_score": 100,
    "skills_verified": [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "MySQL",
      "TypeScript"
    ],
    "recommendation": "Strong hire",
    "gpa": "3.7 (Honours)",
    "availability": "Immediate"
  },
  "meta": {
    "model": "gpt-4o-mini",
    "latency_ms": 312,
    "tokens_used": 847
  }
}`;

function TypedText({ text, speed = 14 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="text-cyan-500 animate-pulse">▌</span>
      )}
    </span>
  );
}

function LatencyCounter({ running }: { running: boolean }) {
  const [ms, setMs] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      setMs(0);
      setDone(false);
      startRef.current = null;
      return;
    }
    startRef.current = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - (startRef.current ?? Date.now());
      if (elapsed >= 312) {
        setMs(312);
        setDone(true);
        clearInterval(interval);
      } else {
        setMs(elapsed);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <span
      className={`font-mono text-[13px] font-bold ${
        done ? "text-emerald-500" : "text-amber-500"
      }`}
    >
      {ms}ms
    </span>
  );
}

type SimState = "idle" | "loading" | "done";

export default function ApiSimulator() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [state, setState] = useState<SimState>("idle");
  const [showResponse, setShowResponse] = useState(false);

  const run = () => {
    if (state !== "idle") return;
    setState("loading");
    setShowResponse(false);
    setTimeout(() => {
      setState("done");
      setShowResponse(true);
    }, 1400);
  };

  const reset = () => {
    setState("idle");
    setShowResponse(false);
  };

  const syntaxHighlight = (json: string) => {
    return json
      .replace(/("[\w_]+")(?=\s*:)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/:\s*("([^"]*)")/g, ': <span class="text-lime-400">$1</span>')
      .replace(/:\s*(\d+\.?\d*)/g, ': <span class="text-amber-500">$1</span>')
      .replace(
        /:\s*(true|false|null)/g,
        ': <span class="text-purple-400">$1</span>',
      );
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto font-sans">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Wifi size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
            {t.sim.title}
          </span>
        </div>
        <p className="text-slate-400 text-base md:text-lg">{t.sim.subtitle}</p>
      </motion.div>

      {/* Simulator Window */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-slate-900/80 border border-cyan-500/15 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl shadow-black/40"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-slate-900/60 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <span className="bg-cyan-500/15 text-cyan-400 text-[11px] font-bold px-2.5 py-1 rounded-md font-mono">
                POST
              </span>
              <span className="text-slate-400 text-[13px] font-mono hidden sm:inline-block">
                {t.sim.endpoint}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Latency indicator */}
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-slate-500" />
              <LatencyCounter running={state !== "idle"} />
            </div>

            {/* Status badge */}
            <AnimatePresence>
              {state === "done" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-md px-2.5 py-1"
                >
                  <CheckCircle size={12} className="text-emerald-500" />
                  <span className="text-emerald-500 text-xs font-bold font-mono">
                    200 OK
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            {state === "idle" ? (
              <button
                onClick={run}
                className="inline-flex items-center gap-1.5 bg-linear-to-br from-cyan-500 to-cyan-600 hover:scale-105 text-slate-950 px-4 py-1.5 rounded-lg text-[13px] font-bold transition-transform shadow-lg shadow-cyan-500/20"
              >
                <Play size={13} fill="currentColor" />
                {t.sim.sendBtn}
              </button>
            ) : (
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 bg-transparent border border-slate-500/40 hover:border-slate-400 hover:text-slate-300 text-slate-400 px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-colors"
              >
                <RotateCcw size={12} />
                {t.sim.reset}
              </button>
            )}
          </div>
        </div>

        {/* Body — split panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-95">
          {/* Request Panel */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-white/5">
            <div className="mb-4">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                Request Body
              </span>
            </div>
            <pre
              className="m-0 font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre-wrap wrap-break-words"
              dangerouslySetInnerHTML={{
                __html: syntaxHighlight(REQUEST_BODY),
              }}
            />
          </div>

          {/* Response Panel */}
          <div className="p-6 relative">
            <div className="mb-4">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                {t.sim.responseLabel}
              </span>
            </div>

            {state === "idle" && (
              <div className="flex flex-col items-center justify-center h-50 text-slate-600 gap-3">
                <div className="text-4xl opacity-50">⚡</div>
                <span className="text-[13px] font-mono">
                  Awaiting request...
                </span>
              </div>
            )}

            {state === "loading" && (
              <div className="flex flex-col gap-2 mt-2">
                {[80, 60, 90, 70, 55].map((w, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="h-3 bg-cyan-500/15 rounded"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            )}

            {showResponse && (
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="m-0 font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre-wrap wrap-break-words"
              >
                <TypedText text={RESPONSE_BODY} speed={12} />
              </motion.pre>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
