import Background from "@/components/background/Background";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">
      <Background />

      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}