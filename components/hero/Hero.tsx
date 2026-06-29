import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <Container>
      <section className="flex min-h-screen flex-col items-center justify-between gap-20 lg:flex-row">

        <HeroContent />

        <HeroCard />

      </section>
    </Container>
  );
}