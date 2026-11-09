"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  translations,
  SECTION_IDS,
  hrefFor,
  type SectionId,
} from "@/data/translations";
import Reveal from "./Reveal";
import Orb from "./Orb";

/** One page = one conversation: a question bubble, then the answer. */
export default function Turn({
  id,
  question,
  children,
}: {
  id: SectionId;
  question: string;
  children: React.ReactNode;
}) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const next = SECTION_IDS[SECTION_IDS.indexOf(id) + 1];

  return (
    <article className="py-6 lg:py-10">
      <Reveal className="flex justify-end">
        <h1 className="max-w-[88%] rounded-2xl rounded-br-md bg-deep px-4 py-2.5 text-[15px] font-medium text-fg">
          {question}
        </h1>
      </Reveal>
      <Reveal delay={0.08} className="mt-5 flex gap-3">
        <div className="pt-1">
          <Orb size={30} breathe avatar />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </Reveal>
      {next && (
        <Reveal delay={0.16} className="mt-10 flex justify-end">
          <Link
            href={hrefFor(next)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted transition-colors duration-150 hover:border-accent/50 hover:text-fg"
          >
            {t.nav.next}: {t.nav[next]}
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      )}
    </article>
  );
}
