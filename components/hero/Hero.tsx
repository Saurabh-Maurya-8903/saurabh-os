import Container from "../layout/Container";
import {
  Heading,
  Text,
  Badge,
  Button,
} from "../shared";

export default function Hero() {
  return (
    <Container>
      <section className="flex min-h-screen items-center">

        <div className="max-w-2xl">

          <Text className="uppercase tracking-[0.35em] text-blue-400">
            SAURABH OS
          </Text>

          <Heading className="mt-6">
            Saurabh
            <br />
            Maurya
          </Heading>

          <div className="mt-8 flex flex-wrap gap-3">

            <Badge>Full Stack Developer</Badge>

            <Badge>AI Engineer</Badge>

            <Badge>Backend Developer</Badge>

          </div>

          <Text className="mt-8 max-w-xl">
            Building intelligent digital experiences
            powered by AI, scalable backend systems,
            and modern web technologies.
          </Text>

          <div className="mt-10 flex gap-4">

            <Button>
              View Projects
            </Button>

            <Button variant="secondary">
              Resume
            </Button>

          </div>

        </div>

      </section>
    </Container>
  );
}