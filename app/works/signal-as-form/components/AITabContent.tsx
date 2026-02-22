"use client";

import Image from "next/image";
import { useTranslations } from "../../../context/translations";

interface Block {
  title: string;
  subtitle: string;
  body: string[];
}

function parseBlocks(value: unknown): Block[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    const o = item as Record<string, unknown>;
    return {
      title: typeof o.title === "string" ? o.title : "",
      subtitle: typeof o.subtitle === "string" ? o.subtitle : "",
      body: Array.isArray(o.body) ? (o.body as string[]) : [],
    };
  });
}

export default function AITabContent() {
  const { t, ts } = useTranslations();
  const intro = ts("works.signalAsForm.ai.intro");
  const impactTitle = ts("works.signalAsForm.ai.impactTitle");
  const blocks = parseBlocks(t("works.signalAsForm.ai.blocks"));

  return (
    <div
      className="mt-10 flex flex-col gap-10 sm:gap-12"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <p className="text-center text-sm leading-relaxed text-white/95 sm:text-base">
        {intro.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < intro.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* 플로우차트 이미지 */}
      <div className="flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/image/silo_ai_1.png"
          alt="Audio-visual Research Prototype flowchart"
          width={900}
          height={600}
          className="h-auto w-[80%] object-contain sm:w-[60%]"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold text-white sm:text-xl">
          {impactTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl border border-white/20 bg-white/5 p-4 sm:p-5"
            >
              <h3 className="text-sm font-bold text-white sm:text-base">
                {block.title}
              </h3>
              <p className="text-xs text-white/80 sm:text-sm">
                {block.subtitle}
              </p>
              <span className="h-px w-full bg-white/30" aria-hidden />
              <div className="flex flex-col gap-3">
                {block.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed text-white/90 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System 이미지 (silo_ai_2) */}
      <div className="mt-20 flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/image/silo_ai_2.png"
          alt="System diagram"
          width={900}
          height={500}
          className="h-auto w-[80%] object-contain sm:w-[60%]"
        />
      </div>

      {/* 시스템 플로우 다이어그램 */}
      <div className="flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/image/silo_ai_3.png"
          alt="System flow: Input & Tracking → Signal Processing & Control → Output Driving → Multi-Channel Haptic Feedback"
          width={900}
          height={500}
          className="h-auto w-[90%] object-contain sm:w-[70%]"
        />
      </div>
    </div>
  );
}
