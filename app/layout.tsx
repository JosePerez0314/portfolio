import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.josegabperez.com"),
  title: {
    default: "José Gabriel Pérez | Backend Engineer & Tech Lead",
    template: "%s | José Gabriel Pérez",
  },
  description:
    "Ingeniero de Sistemas y Backend Architect especializado en arquitecturas escalables con Node.js, TypeScript y MySQL. Creador de TalentMatch AI.",
  keywords: [
    "Backend Engineer",
    "Software Architecture",
    "Node.js",
    "TypeScript",
    "SaaS Development",
    "Dominican Republic Engineer",
  ],
  authors: [{ name: "José Gabriel Pérez Calcaño" }],
  creator: "José Gabriel Pérez Calcaño",
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://www.josegabperez.com",
    title: "José Gabriel Pérez | Backend Engineer & Tech Lead",
    description:
      "Arquitectura backend de grado de producción y sistemas escalables. Explora mi portfolio y proyectos como TalentMatch AI.",
    siteName: "José Gabriel Pérez Portfolio",
    images: [
      {
        url: "img/yo.jpg", // Asegúrate de tener esta imagen en public/img/
        width: 1200,
        height: 630,
        alt: "José Gabriel Pérez - Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Gabriel Pérez | Backend Engineer",
    description: "Sistemas escalables y arquitectura backend.",
    images: ["img/yo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#10172A] text-slate-50 min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
