import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serifDisplay = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.josegabperez.com"),
  title: {
    default: "José Gabriel Pérez | Backend Developer",
    template: "%s | José Gabriel Pérez",
  },
  description:
    "Backend developer building REST APIs, multi-tenant systems and AI integrations with Node.js, TypeScript and MySQL. Creator of TalentMatch AI.",
  keywords: [
    "Backend Developer",
    "Systems Engineering Graduate",
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
    locale: "en_US",
    url: "https://www.josegabperez.com",
    title: "José Gabriel Pérez | Backend Developer",
    description:
      "Production-grade backend development: REST APIs, multi-tenant systems and AI integrations. Explore my work, including TalentMatch AI.",
    siteName: "José Gabriel Pérez Portfolio",
    images: [
      {
        url: "/img/og.png",
        width: 1200,
        height: 630,
        alt: "José Gabriel Pérez - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Gabriel Pérez | Backend Developer",
    description: "Backend developer: REST APIs and scalable systems.",
    images: ["/img/og.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${serifDisplay.variable} antialiased`}
    >
      <body className="min-h-screen">
        <LanguageProvider>
          <Sidebar />
          <div className="flex min-h-screen flex-col lg:pl-64">
            <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-12 pt-20 sm:px-8 lg:pt-12">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
