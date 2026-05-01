"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: lang === "EN" ? "About Me" : "Acerca de mi", href: "#about-me" },
    {
      label: lang === "EN" ? "Experience" : "Experiencia",
      href: "#experience",
    },
    { label: lang === "EN" ? "Projects" : "Proyectos", href: "#projects" },
    { label: lang === "EN" ? "Skills" : "Habilidades", href: "#skills" },
    { label: lang === "EN" ? "Contact" : "Contacto", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mt-2 mb-2 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 1. Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            JP
          </div>
          <span className="text-slate-50 text-lg font-semibold tracking-tight">
            José <span className="text-cyan-400 font-bold">Pérez</span>
          </span>
        </div>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 3. Actions Section */}
        <div className="flex items-center gap-5">
          {/* THE PILL TOGGLE: Translated to clean Tailwind */}
          <div className="flex items-center bg-slate-900/80 border border-cyan-500/20 rounded-full p-0.75 gap-1">
            {(["EN", "ES"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-black px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Dropdown (Simplified) */}
      <div
        className={`absolute top-full left-0 w-full md:hidden bg-slate-950 border-t border-slate-800 p-6 flex flex-col shadow-2xl
  transform will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${
    mobileOpen
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
  }`}
      >
        <div className="mt-1 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 text-lg font-medium py-5 border-b border-slate-800/60 last:border-none hover:text-cyan-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
