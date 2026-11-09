import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = { title: "Stack" };

export default function Page() {
  return <Skills />;
}
