"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    // 1. The custom scroll handler
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // --- THE FIX: Bottom of Page Override ---
      // This calculates if the user has scrolled to the absolute bottom
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 2. The Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Calculate bottom again inside the observer to prevent fighting
          const isAtBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50;

          // Only trigger if we are NOT at the absolute bottom
          if (entry.isIntersecting && !isAtBottom) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Widened the margin slightly to detect short sections better
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects-list" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            JP
          </div>
          <span className="text-slate-50 text-lg font-bold tracking-tight hidden sm:block">
            José <span className="text-cyan-400">Pérez</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400" // Restored your glowing cyan text
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-5">
          {/* Language Toggle */}
          <div className="flex items-center bg-slate-900/80 border border-slate-800 rounded-full p-1 gap-1">
            {(["EN", "ES"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-black px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === l
                    ? "bg-cyan-500 text-slate-950 shadow-inner"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full md:hidden bg-slate-950 border-t border-slate-900 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      // 1. Stop the browser's native, clunky anchor jump
                      e.preventDefault();

                      // 2. Update state and trigger the menu close animation
                      setActiveSection(targetId);
                      setMobileOpen(false);

                      // 3. Give the main thread 50ms to start the Framer Motion exit
                      // before we overload it with the scroll calculation
                      setTimeout(() => {
                        const element = document.getElementById(targetId);
                        if (element) {
                          // Calculate the exact pixel destination, subtracting 100px
                          // so your fixed Navbar doesn't cover the section title
                          const yOffset =
                            element.getBoundingClientRect().top +
                            window.scrollY;

                          window.scrollTo({
                            top: yOffset,
                            behavior: "smooth",
                          });
                        }
                      }, 50);
                    }}
                    className={`block text-left text-lg font-bold py-4 px-4 rounded-xl transition-all w-full ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                        : "text-slate-400 hover:bg-slate-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile Status Badge (Fixed Key) */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {t.hero.badge}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
