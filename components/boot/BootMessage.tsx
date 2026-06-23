type BootMessageProps = {
  message: string;
};

export default function BootMessage({
  message,
}: BootMessageProps) {
  return (
    <p className="mt-8 font-mono text-lg text-zinc-400">
      {message}
    </p>
  );
}