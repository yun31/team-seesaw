"use client";

import Image from "next/image";
import { useTranslations } from "../../../context/translations";

const IMG = "/image";

export default function ExhibitionTabContent() {
  const { ts } = useTranslations();
  const bodyText = ts("works.safeRangeSystem.exhibition.body");

  return (
    <div
      className="mt-10 flex w-full flex-col gap-6"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      {/* 상단: safe_ex_1 · safe_ex_2 나란히, 너비 꽉 차도록 */}
      <div className="grid w-full grid-cols-2 gap-2 sm:gap-4">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={`${IMG}/safe_ex_1.png`}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={`${IMG}/safe_ex_2.png`}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 하단: 왼쪽(텍스트 + safe_ex_3) · 오른쪽(safe_ex_4 위아래로 길게) */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-sm leading-relaxed text-white/90 sm:text-base">
            {bodyText}
          </p>
          <div className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[480px]">
            <Image
              src={`${IMG}/safe_ex_4.png`}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative aspect-3/4 w-full overflow-hidden sm:aspect-auto sm:min-h-[280px] sm:flex-1">
          <Image
            src={`${IMG}/safe_ex_3.png`}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
