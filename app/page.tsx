import Hero from "@/components/Hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      {/* <About /> */}
    </main>
  );
}
