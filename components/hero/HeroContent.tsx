import { ArrowRight, Download } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <p className="mb-4 text-blue-400 font-medium tracking-widest uppercase">
        SAURABH OS
      </p>

      <h1 className="text-6xl font-bold leading-tight text-white">
        Saurabh
        <br />
        Maurya
      </h1>

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          Full Stack Developer
        </span>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          AI Engineer
        </span>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          Backend Developer
        </span>

      </div>

      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        Building intelligent digital experiences powered by AI,
        scalable backend systems, and modern web technologies.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
          View Projects
          <ArrowRight size={18} />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:bg-zinc-900">
          Resume
          <Download size={18} />
        </button>

      </div>

    </div>
  );
}