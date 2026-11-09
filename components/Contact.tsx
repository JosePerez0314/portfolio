"use client";

import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations, EMAIL, LINKS } from "@/data/translations";
import Turn from "./Turn";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <Turn id="contact" question={t.contact.question}>
        <p className="text-[17px] text-fg/90">{t.contact.text}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong active:scale-[0.98]"
          >
            <Mail size={16} />
            {t.contact.email}
          </a>
          <a
            href={t.resume.filePath}
            download={t.resume.fileName}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition-colors duration-150 hover:border-accent/50"
          >
            <Download size={16} />
            {t.contact.cv}
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center rounded-lg border border-line px-3 text-muted transition-colors duration-150 hover:text-accent"><FaGithub size={18} /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center rounded-lg border border-line px-3 text-muted transition-colors duration-150 hover:text-accent"><FaLinkedin size={18} /></a>
        </div>
    </Turn>
  );
}
