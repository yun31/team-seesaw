"use client";

import { useEffect, useState } from "react";
import { preloadImages } from "../lib/preload-images";

type Phase = "initial" | "spread" | "tilt";

const INITIAL_HOLD_MS = 500;
const SPREAD_DURATION_MS = 800;
const SPREAD_HOLD_MS = 500; // wait after spread before tilt
const TILT_DURATION_MS = 700;
const TILT_HOLD_MS = 500; // wait after tilt before fade
const FADE_MS = 700;

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("initial");
  const [spreadProgress, setSpreadProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    if (phase === "initial") {
      const t = setTimeout(() => setPhase("spread"), INITIAL_HOLD_MS);
      return () => clearTimeout(t);
    }
    if (phase === "spread") {
      const raf = requestAnimationFrame(() => setSpreadProgress(1));
      return () => cancelAnimationFrame(raf);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "spread" && spreadProgress === 1) {
      const t = setTimeout(
        () => setPhase("tilt"),
        SPREAD_DURATION_MS + SPREAD_HOLD_MS,
      );
      return () => clearTimeout(t);
    }
    if (phase === "tilt") {
      const t = setTimeout(
        () => setIsFading(true),
        TILT_DURATION_MS + TILT_HOLD_MS,
      );
      return () => clearTimeout(t);
    }
  }, [phase, spreadProgress]);

  useEffect(() => {
    if (!isFading) return;
    const t = setTimeout(onComplete, FADE_MS);
    return () => clearTimeout(t);
  }, [isFading, onComplete]);

  const isTilting = phase === "tilt";
  const showFade = isFading;
  // SEE/SAW start at the sides (12% from edges) so they don't overlap, then spread to ends (0%)
  const seeLeft = 14 * (1 - spreadProgress);
  const sawRight = 14 * (1 - spreadProgress);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E6E7E9] dark:bg-[#1a1a1a]"
      aria-hidden
    >
      <div
        className="relative flex flex-col items-center justify-center transition-opacity ease-out"
        style={{
          opacity: showFade ? 0 : 1,
          transitionDuration: `${FADE_MS}ms`,
        }}
      >
        {/* Seesaw group: SEE, line, SAW rotate together so text moves with the plank */}
        <div
          className="relative flex flex-col items-center transition-transform duration-700 ease-out"
          style={{
            transform: isTilting ? "rotate(16deg)" : "rotate(0deg)",
            transformOrigin: "center bottom",
          }}
        >
          {/* Text row: SEE and SAW from the start, spread by progress */}
          <div
            className="relative w-[min(280px,75vw)] sm:w-[320px] md:w-[380px]"
            style={{ minHeight: "1.2em" }}
          >
            <span
              className="absolute bottom-0 font-bold tracking-tight text-black dark:text-zinc-100 text-2xl sm:text-3xl md:text-4xl transition-all duration-700 ease-out"
              style={{
                fontFamily: "var(--font-biorhyme)",
                left: `${seeLeft}%`,
                transitionDuration:
                  phase === "spread"
                    ? "800ms"
                    : phase === "tilt"
                      ? "700ms"
                      : "0ms",
              }}
            >
              SEE
            </span>
            <span
              className="absolute bottom-0 font-bold tracking-tight text-black dark:text-zinc-100 text-2xl sm:text-3xl md:text-4xl transition-all duration-700 ease-out"
              style={{
                fontFamily: "var(--font-biorhyme)",
                right: `${sawRight}%`,
                transitionDuration:
                  phase === "spread"
                    ? "800ms"
                    : phase === "tilt"
                      ? "700ms"
                      : "0ms",
              }}
            >
              SAW
            </span>
          </div>

          {/* Horizontal line (seesaw plank) - same width as text row */}
          <div
            className="mt-1 h-px w-[min(280px,75vw)] sm:w-[320px] md:w-[380px] bg-black/80 dark:bg-white/80"
            aria-hidden
          />
        </div>

        {/* Triangular fulcrum: fixed below, does not rotate */}
        <div className="relative -mt-px flex justify-center" aria-hidden>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black/70 dark:text-white/70"
          >
            <path
              d="M12 0L0 14H24L12 0Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
