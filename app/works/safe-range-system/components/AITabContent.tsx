"use client";

import { useTranslations } from "../../../context/translations";

function parseStringArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

export default function AITabContent() {
  const { t } = useTranslations();
  const description = parseStringArray(t("works.safeRangeSystem.ai.description"));
  const row2 = parseStringArray(t("works.safeRangeSystem.ai.row2"));

  return (
    <div className="mt-10 flex flex-col gap-20 sm:gap-24">
      {/* 1행: safe_ai_1 | safe_ai_2 | 텍스트 */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-10">
        <div className="flex h-[300px] shrink-0 items-center sm:h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/safe_ai_1.png"
            alt=""
            className="h-full w-auto max-w-[280px] object-contain sm:max-w-[340px]"
          />
        </div>
        <div className="flex h-[300px] shrink-0 items-center sm:h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/safe_ai_2.png"
            alt=""
            className="h-full w-auto max-w-[280px] object-contain sm:max-w-[340px]"
          />
        </div>
        <div className="flex flex-col gap-4 min-w-0 flex-1">
          {description.map((paragraph, i) => (
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

      {/* 2행: 왼쪽 텍스트 | 오른쪽 safe_ai_4 */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="min-w-0 flex-1 space-y-4">
          {row2.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-white/95 sm:text-base"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="shrink-0 max-w-[480px] sm:max-w-lg lg:max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/safe_ai_4.png"
            alt=""
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* 3행: safe_ai_5 (흰색 테두리) */}
      <div className="max-w-full rounded-4xl border-[0.5px] border-white/40 p-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/safe_ai_5.png"
          alt=""
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
