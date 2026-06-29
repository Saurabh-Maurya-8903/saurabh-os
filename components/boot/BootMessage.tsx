type BootMessageProps = {
  message: string;
};
import { ArrowRight, Badge, Download, Heading, Text } from "lucide-react";

export default function BootMessage({
  message,
}: BootMessageProps) {
  return (
    <Text className="mt-8 font-mono text-lg text-zinc-400">
      {message}
    </Text>
  );
}