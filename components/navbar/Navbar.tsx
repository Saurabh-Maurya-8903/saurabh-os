import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-6
      left-1/2
      z-50
      -translate-x-1/2
      "
    >
      <nav
        className="
        flex
        items-center
        justify-between
        gap-12

        rounded-full

        border
        border-white/10

        bg-black/40

        px-8
        py-4

        backdrop-blur-xl

        shadow-2xl
      "
      >
        <Logo />

        <NavLinks />
      </nav>
    </header>
  );
}