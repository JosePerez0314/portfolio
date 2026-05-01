"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // 1. New State for Active Link

  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    // Handle background blur on scroll
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // 2. Set up Intersection Observer for active states
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger when the section crosses the vertical center of the screen
      { rootMargin: "-50% 0px -50% 0px" },
    );

    // Observe all DOM elements that are sections and have an ID
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" }, // IMPORTANT: Ensure your section IDs match the hrefs exactly (e.g., id="about")
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            JP
          </div>
          <span className="text-slate-50 text-lg font-semibold tracking-tight">
            José <span className="text-cyan-400 font-bold">Pérez</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            // Check if this link is the currently active section
            const isActive = activeSection === link.href.substring(1); // Removes the "#" from the href to match the ID

            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400 scale-105 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" // Active styling
                    : "text-slate-400 hover:text-cyan-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions Section & Language Toggle (Remains the same) */}
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-slate-900/80 border border-cyan-500/20 rounded-full p-1 gap-1">
            {(["EN", "ES"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full md:hidden bg-slate-950 border-t border-slate-800 p-6 flex flex-col shadow-2xl transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mt-1 flex flex-col">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium py-5 border-b border-slate-800/60 transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-cyan-300"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
