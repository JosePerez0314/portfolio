import React from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiUbuntu,
  SiPostman,
  SiOpenai,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import {
  FaGithub,
  FaGitAlt,
  FaNetworkWired,
  FaServer,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";

export const TECH_ICONS: Record<string, React.ReactNode> = {
  // Core Stack
  "Node.js": <SiNodedotjs className="w-5 h-5" />,
  "Express.js": <SiExpress className="w-5 h-5" />,
  React: <SiReact className="w-5 h-5" />,
  "Next.js": <SiNextdotjs className="w-5 h-5" />,
  "JavaScript (ES6+)": <SiJavascript className="w-5 h-5" />,
  "HTML/CSS": <SiHtml5 className="w-5 h-5" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5" />,

  // Database & DevOps
  "Prisma ORM": <SiPrisma className="w-5 h-5" />,
  MySQL: <SiMysql className="w-5 h-5" />,
  "Linux (Ubuntu)": <SiUbuntu className="w-5 h-5" />,
  Postman: <SiPostman className="w-5 h-5" />,
  Git: <FaGitAlt className="w-5 h-5" />,
  GitHub: <FaGithub className="w-5 h-5" />,

  // AI
  "OpenAI API": <SiOpenai className="w-5 h-5" />,

  // Conceptual Skills (English Keys)
  "RESTful APIs": <FaNetworkWired className="w-5 h-5" />,
  "System Architecture": <FaServer className="w-5 h-5" />,
  "SQL Optimization": <SiMysql className="w-5 h-5" />, // Reusing MySQL for SQL Optimization
  "Prompt Engineering": <FaRobot className="w-5 h-5" />,

  // Conceptual Skills (Spanish Keys - Required for i18n support)
  "APIs RESTful": <FaNetworkWired className="w-5 h-5" />,
  "Arquitectura de Sistemas": <FaServer className="w-5 h-5" />,
  "Optimización SQL": <FaDatabase className="w-5 h-5" />,
};
