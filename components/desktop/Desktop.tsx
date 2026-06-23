import Hero from "../hero/Hero";

export default function Desktop() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-slate-950" />

      {/* Grid Overlay */}
      <div
        className="
        absolute
        inset-0
        opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">

      <Hero />

      </div>

    </main>
  );
}