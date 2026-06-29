import {
  Heading,
  Text,
  Badge,
} from "../shared";

import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <Text className="uppercase tracking-[0.4em] text-blue-400">
        SAURABH OS
      </Text>

      <Heading className="mt-6 text-6xl md:text-7xl">
        Building
        <br />
        AI Powered
        <br />
        Digital Experiences.
      </Heading>

      <div className="mt-8 flex flex-wrap gap-3">

        <Badge>Full Stack</Badge>

        <Badge>AI Engineer</Badge>

        <Badge>Backend</Badge>

      </div>

      <Text className="mt-8 max-w-xl">
        I build modern web applications,
        AI-powered products and scalable backend systems
        with clean architecture and exceptional user experience.
      </Text>

      <div className="mt-10">
        <HeroActions />
      </div>

    </div>
  );
}