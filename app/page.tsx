import Hero from "@/components/Hero";
import About from "@/components/About";
import ApiSimulator from "@/components/ApiSimulator";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <ApiSimulator />
      <FeaturedProject />
      {/* <About /> */}
    </main>
  );
}
