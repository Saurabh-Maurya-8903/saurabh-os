import Container from "../layout/Container";
import HeroContent from "./HeroContent";
export default function Hero() {
  return (
    <Container>
      <section className="flex min-h-screen items-center">
        <div>
          <p className="text-blue-400 uppercase tracking-[0.3em]">
            SAURABH OS
          </p>

          <h1 className="mt-6 text-7xl font-bold leading-none text-white">
            Saurabh
            <br />
            Maurya
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Full Stack Developer crafting beautiful,
            intelligent and high-performance digital experiences.
          </p>
        </div>
      </section>
    </Container>
  );
}