"use client";

import Header from "../../components/Header";
import { useTranslations } from "../../context/translations";

export default function ResonanceProtocolPage() {
  const { ts } = useTranslations();
  const paragraphs = [
    ts("works.resonanceProtocol.p1"),
    ts("works.resonanceProtocol.p2"),
    ts("works.resonanceProtocol.p3"),
  ];

  return (
    <div className="works-page min-h-screen bg-black font-sans">
      <Header />

      <main className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span
              className="shrink-0 text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              2025
            </span>
            <span className="h-px flex-1 min-w-0 bg-white/40" aria-hidden />
          </div>

          <p
            className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            VR Exhibition
          </p>
          <p
            className="mt-1 text-lg font-medium text-white sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            Resonance Protocol
          </p>

          <div className="mt-10 flex flex-col gap-12 sm:gap-16">
            <div className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/vr.png"
                alt=""
                className="h-auto w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-white/95 sm:text-base"
                  style={{ fontFamily: "var(--font-pretendard)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
