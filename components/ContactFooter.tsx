"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactFooter() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const contact = t.contact;
  const footer = t.footer;

  const EMAIL = "josegabrielperezcalcano14@gmail.com";

  return (
    <section id="contact" className="scroll-mt-5 font-sans">
      {/* ================= CTA ================= */}
      <div className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-indigo-500/5 text-center px-6 py-12 md:py-16 shadow-2xl shadow-cyan-500/5"
          >
            {/* Glow */}
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              {/* Status */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-slate-50 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                {contact.sectionTitle}
              </h2>

              {/* Subtitle */}
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {contact.subtitle}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl px-7 py-3.5 text-slate-950 text-sm md:text-[15px] font-bold shadow-[0_4px_24px_rgba(6,182,212,0.25)]"
                >
                  <Mail size={18} />
                  {contact.cta}
                  <ArrowRight size={16} />
                </motion.a>

                {[
                  {
                    href: "https://github.com/JosePerez0314",
                    icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/jose-gabriel-perez-calca%C3%B1o-1a554b319",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 rounded-xl px-6 py-3.5 text-slate-300 text-sm md:text-[15px] font-semibold transition-all hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-slate-800"
                  >
                    <Icon size={18} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-md flex items-center justify-center text-[11px] font-bold text-slate-950">
              JP
            </div>
            <div>
              <p className="text-slate-50 text-sm font-semibold mb-0.5">
                José Pérez
              </p>
              <p className="text-slate-500 text-xs">{footer.tagline}</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-slate-500 text-xs text-center w-full md:w-auto order-last md:order-none">
            {footer.rights}
          </p>

          {/* Right */}
          <div className="flex items-center gap-6">
            {[
              { href: "https://github.com/JosePerez0314", icon: FaGithub },
              {
                href: "https://www.linkedin.com/in/jose-gabriel-perez-calca%C3%B1o-1a554b319",
                icon: FaLinkedin,
              },
              { href: `mailto:${EMAIL}`, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
