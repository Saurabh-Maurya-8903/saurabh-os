type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="mt-10 w-96">
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-center font-mono text-zinc-400">
        {progress}%
      </p>
    </div>
  );
}