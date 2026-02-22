"use client";

import Image from "next/image";
import { useTranslations } from "../../../context/translations";

export default function OverviewTabContent() {
  const { ts } = useTranslations();

  return (
    <div
      className="mt-10 flex flex-col gap-8"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <h2 className="text-lg font-medium text-white sm:text-xl">
        {ts("works.signalAsForm.overview.title")}
      </h2>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-white/90 sm:text-base">
        <p>{ts("works.signalAsForm.overview.intro1")}</p>
        <p>{ts("works.signalAsForm.overview.intro2")}</p>
      </div>

      <div className="flex flex-col gap-1 text-sm text-white/85 sm:text-base">
        <p>{ts("works.signalAsForm.overview.spec")}</p>
      </div>

      <span className="h-px w-full bg-white/30" aria-hidden />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-white sm:text-base">
          {ts("works.signalAsForm.overview.technicalTitle")}
        </p>
        <p className="text-sm leading-relaxed text-white/90 sm:text-base">
          {ts("works.signalAsForm.overview.technicalBody")}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-white sm:text-base">
          {ts("works.signalAsForm.overview.softwareTitle")}
        </p>
        <ul className="list-none space-y-1 text-sm leading-relaxed text-white/90 sm:text-base">
          <li>TouchDesigner</li>
          <li>Max / Ableton Live</li>
          <li>Python</li>
          <li>Unity</li>
          <li>GLSL Shader</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 pt-2">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/image/silo_ov_1.png"
            alt=""
            width={1200}
            height={600}
            className="h-auto w-full object-contain"
          />
        </div>
        {/* silo_ov_2: 화면 너비에 맞추고 높이 자동 */}
        <div className="relative left-1/2 w-screen -ml-[50vw] max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/silo_ov_2.png"
            alt=""
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
