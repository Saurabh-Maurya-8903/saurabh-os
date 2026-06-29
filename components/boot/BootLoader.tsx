"use client";

import { useEffect, useState } from "react";
import BootMessage from "./BootMessage";
import ProgressBar from "./ProgressBar";
import { ArrowRight, Badge, Download, Heading, Text } from "lucide-react";
const bootMessages = [
  "Initializing Kernel...",
  "Loading Components...",
  "Connecting GitHub...",
  "Loading AI Engine...",
  "Preparing Workspace...",
  "Welcome to Saurabh OS",
];

export default function BootLoader() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (index >= bootMessages.length - 1) return;

    const timer = setTimeout(() => {
      setIndex(index + 1);
      setProgress(((index + 1) / (bootMessages.length - 1)) * 100);
    }, 900);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <Heading className="text-6xl font-bold tracking-tight">
        SAURABH OS
      </Heading>

      <BootMessage
        message={bootMessages[index]}
      />

      <ProgressBar progress={progress} />
    </main>
  );
}