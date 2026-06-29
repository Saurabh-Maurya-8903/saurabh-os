import Background from "@/components/background/Background";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">

      <Background />

      <Navbar />

      <div className="relative z-10">

        <Hero />

      </div>

    </main>
  );
}