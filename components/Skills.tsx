"use client";

import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { Bot, Database, Network } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Turn from "./Turn";

const ICONS: Record<string, IconType> = {
  node: SiNodedotjs,
  express: SiExpress,
  ts: SiTypescript,
  js: SiJavascript,
  rest: Network as unknown as IconType,
  mysql: SiMysql,
  prisma: SiPrisma,
  sql: Database as unknown as IconType,
  openai: SiOpenai,
  claude: SiAnthropic,
  agents: Bot as unknown as IconType,
  docker: SiDocker,
  linux: SiLinux,
  entra: FaMicrosoft,
  git: SiGit,
  vercel: SiVercel,
  react: SiReact,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
};

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  return (
    <Turn id="skills" question={t.question}>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.groups.map((g) => (
          <div
            key={g.name}
            className="rounded-2xl border border-line bg-surface p-5"
          >
            <h3 className="font-mono text-xs text-accent">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <li
                    key={item.name}
                    className="group flex items-center gap-2 rounded-lg border border-transparent bg-surface-2 px-3 py-2 text-sm text-fg/90 transition-colors duration-150 hover:border-accent/40"
                  >
                    {Icon && (
                      <Icon
                        aria-hidden
                        size={16}
                        className="shrink-0 text-muted transition-colors duration-150 group-hover:text-accent"
                      />
                    )}
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Turn>
  );
}
