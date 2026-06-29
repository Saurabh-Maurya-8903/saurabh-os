import Container from "../layout/Container";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <Container>

      <section
        className="
        flex
        min-h-screen
        items-center
        justify-between
        gap-20
      "
      >

        <HeroContent />

        <div className="hidden lg:block w-[420px]" />

      </section>

    </Container>
  );
}