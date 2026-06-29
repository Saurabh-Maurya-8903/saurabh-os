import Image from "next/image";
import OrbitBadge from "./OrbitBadge";

export default function HeroCard() {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Circle */}

      <div
        className="
        relative
        h-[360px]
        w-[360px]
        overflow-hidden
        rounded-full
        border-[5px]
        border-blue-500
      "
      >
        <Image
          src="/images/profile/me.png"
          alt="Saurabh"
          fill
          priority
          className="object-cover"
        />
      </div>

      <OrbitBadge
        label="React"
        className="-top-2 left-1/2 -translate-x-1/2"
      />

      <OrbitBadge
        label="Next.js"
        className="top-20 right-0"
      />

      <OrbitBadge
        label="Python"
        className="bottom-28 right-0"
      />

      <OrbitBadge
        label="Node.js"
        className="bottom-28 left-0"
      />

      <OrbitBadge
        label="AI"
        className="top-20 left-0"
      />

    </div>
  );
}