export default function Background() {
  return (
    <>
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09090B] via-[#111827] to-black" />

      {/* Grid */}
      <div
        className="
        absolute inset-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />
    </>
  );
}
