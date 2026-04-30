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
      className={`fixed top-0 w-full z-50 font-sans transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1221]/40 backdrop-blur-md border-b border-cyan-500/10 py-3"
          : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            JP
          </div>
          <span className="text-slate-50 text-lg font-semibold tracking-tight">
            José <span className="text-cyan-400 font-bold">Pérez</span>
          </span>
        </div>

        {/* Desktop Nav */}
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

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#0b1221]/60 backdrop-blur-md border border-cyan-500/20 rounded-full p-[3px] gap-1">
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

          {/* Mobile Button */}
          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Dropdown (Final Design Match) */}
      {mobileOpen && (
        <div className="md:hidden bg-nav-custom border-t border-cyan-500/10 p-6 flex flex-col shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          {/* Adding margin-top to detach the list from the header/logo */}
          <div className="mt-10 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                /* 
             'border-b' adds the line.
             'last:border-none' ensures the bottom link doesn't have a stray line.
             'py-5' increases the clickable area and spacing.
          */
                className="text-slate-400 text-lg font-medium py-5 border-b border-slate-800/60 last:border-none hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
