import { navItems } from "./navItems";

export default function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="
            text-sm
            text-zinc-400
            transition
            hover:text-white
          "
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}