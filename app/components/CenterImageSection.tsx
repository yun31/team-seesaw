"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 이미지 중앙 기준 오프셋. 이미지 width/height의 몇 % 이동했는지 (반응형 유지)
type WordPosition = {
  word: string;
  offsetX: number; // 이미지 width 대비 %, 음수=왼쪽
  offsetY: number; // 이미지 height 대비 %, 음수=위
  align?: "left" | "right" | "center";
};

const WORD_POSITIONS: WordPosition[] = [
  { word: "CONNECTION", offsetX: -60, offsetY: -36, align: "left" },
  { word: "INTELLIGENCE", offsetX: -77, offsetY: -26, align: "left" },
  { word: "AUTOMATION", offsetX: -81, offsetY: -14, align: "left" },
  { word: "INTERPRETATION", offsetX: -88, offsetY: -2, align: "left" },
  { word: "PERSONALIZATION", offsetX: -85, offsetY: 12, align: "left" },
  { word: "STABILITY", offsetX: -73, offsetY: 28, align: "left" },
  { word: "AMPLIFICATION", offsetX: -65, offsetY: 38, align: "left" },
  { word: "EXPANSION", offsetX: -58, offsetY: 48, align: "left" },
  { word: "OPTIMIZATION", offsetX: 77, offsetY: -26, align: "right" },
  { word: "ACCESSIBILITY", offsetX: 88, offsetY: -2, align: "right" },
  { word: "CARE", offsetX: 62, offsetY: 30, align: "right" },
  { word: "PREDICTION", offsetX: 65, offsetY: 40, align: "right" },
  { word: "ADAPTATION", offsetX: 62, offsetY: 48, align: "right" },
  { word: "AUGMENTATION", offsetX: -15, offsetY: 53, align: "center" },
  { word: "EFFICIENCY", offsetX: 19, offsetY: 54, align: "center" },
  { word: "ASSISTANCE", offsetX: 0, offsetY: 62, align: "center" },
];

// viewBox 0 0 200 100. 기울기 각도와 동일한 수식으로 선·원·텍스트 위치 계산
const SEESAW_ANGLE = 7.5;
const SEESAW_RADIUS = 82;
const SEESAW_CENTER_Y = 14;

function getSeesawEndpoints(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  const leftX = 100 - SEESAW_RADIUS * c;
  const leftY = SEESAW_CENTER_Y + SEESAW_RADIUS * s;
  const rightX = 100 + SEESAW_RADIUS * c;
  const rightY = SEESAW_CENTER_Y - SEESAW_RADIUS * s;
  return {
    left: { x: (leftX / 200) * 100, y: (leftY / 100) * 100 },
    right: { x: (rightX / 200) * 100, y: (rightY / 100) * 100 },
  };
}

// 선 끝점 (getSeesawEndpoints와 동일 수식 → viewBox 0 0 200 100 좌표)
function getSeesawLine(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return {
    x1: 100 - SEESAW_RADIUS * c,
    y1: SEESAW_CENTER_Y + SEESAW_RADIUS * s,
    x2: 100 + SEESAW_RADIUS * c,
    y2: SEESAW_CENTER_Y - SEESAW_RADIUS * s,
  };
}
const SEE_UP_LINE = getSeesawLine(-SEESAW_ANGLE);
const SAW_UP_LINE = getSeesawLine(SEESAW_ANGLE);

export default function CenterImageSection() {
  // false = SEE 쪽 올라감(기본), true = SAW 쪽 올라감
  const [sawUp, setSawUp] = useState(false);
  const endpoints = sawUp
    ? getSeesawEndpoints(SEESAW_ANGLE)
    : getSeesawEndpoints(-SEESAW_ANGLE);

  // SAW 선택 시 페이지 배경 검정, 모든 텍스트 흰색
  useEffect(() => {
    if (sawUp) {
      document.body.classList.add("saw-selected");
    } else {
      document.body.classList.remove("saw-selected");
    }
    return () => document.body.classList.remove("saw-selected");
  }, [sawUp]);

  return (
    <section className="relative flex w-full flex-col items-center overflow-visible px-6 pt-16 pb-1 md:pt-24 md:pb-2">
      <div className="grid w-full max-w-[95vw] grid-cols-[1fr_auto_1fr] items-start justify-items-center gap-4 md:gap-6 overflow-visible">
        <div />
        <div className="flex flex-col items-center overflow-visible">
          {/* 이미지 + 시소 wrapper (선 길이 = 화면 너비 80%) */}
          <div
            className="relative w-[80vw] min-w-[300px] max-w-[1400px] max-h-[55vh] overflow-visible mt-4 md:mt-6"
            style={{ aspectRatio: "1.4/1" }}
          >
            {/* Central image */}
            <div className="absolute left-1/2 top-10 w-[26vw] min-w-40 -translate-x-1/2 overflow-hidden aspect-square md:top-12 md:w-[28vw] md:min-w-44">
              <Image
                src={sawUp ? "/image/main_dark.png" : "/image/main.png"}
                alt="SEESAW - AI network visualization"
                fill
                className="object-contain"
                priority
                sizes="38vw"
              />
            </div>

            {/* 단어 레이어: 이미지와 동일한 위치·크기, 이미지 중앙 기준 offsetX/offsetY % → 반응형 유지 */}
            <div
              className="pointer-events-none absolute left-1/2 top-10 w-[26vw] min-w-40 -translate-x-1/2 aspect-square md:top-12 md:w-[28vw] md:min-w-44"
              aria-hidden
            >
              {WORD_POSITIONS.map(({ word, offsetX, offsetY, align }) => (
                <span
                  key={word}
                  className="absolute whitespace-nowrap font-medium tracking-tight text-black dark:text-zinc-800"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    left: `calc(50% + ${offsetX}%)`,
                    top: `calc(50% + ${offsetY}%)`,
                    fontSize: "clamp(5px, 1.6vw, 11px)",
                    transform:
                      align === "center"
                        ? "translate(-50%, -50%)"
                        : align === "right"
                          ? "translate(-100%, -50%)"
                          : "translate(0, -50%)",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>

            {/* 시소 오버레이: 두 상태의 선 중 선택된 것만 표시 */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 100"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* SEE 쪽 올라간 선 */}
                <g visibility={sawUp ? "hidden" : "visible"}>
                  <line
                    x1={SEE_UP_LINE.x1}
                    y1={SEE_UP_LINE.y1}
                    x2={SEE_UP_LINE.x2}
                    y2={SEE_UP_LINE.y2}
                    stroke="currentColor"
                    strokeWidth="0.05"
                    className="text-black dark:text-zinc-100"
                  />
                </g>
                {/* SAW 쪽 올라간 선 */}
                <g visibility={sawUp ? "visible" : "hidden"}>
                  <line
                    x1={SAW_UP_LINE.x1}
                    y1={SAW_UP_LINE.y1}
                    x2={SAW_UP_LINE.x2}
                    y2={SAW_UP_LINE.y2}
                    stroke="currentColor"
                    strokeWidth="0.05"
                    className="text-black dark:text-zinc-100"
                  />
                </g>
              </svg>
            </div>
            {/* 양끝 원: SVG 밖에서 rounded-full로 그려 찌그러짐 방지 */}
            <span
              className="absolute pointer-events-none h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-zinc-100"
              style={{
                left: `${endpoints.left.x}%`,
                top: `${endpoints.left.y}%`,
              }}
              aria-hidden
            />
            <span
              className="absolute pointer-events-none h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-zinc-100"
              style={{
                left: `${endpoints.right.x}%`,
                top: `${endpoints.right.y}%`,
              }}
              aria-hidden
            />
            {/* SEE: 선택 시 큰 검정, 비선택 시 작은 회색 */}
            <span
              className={`absolute pointer-events-none font-bold whitespace-nowrap ${
                sawUp
                  ? "text-zinc-400 dark:text-zinc-400 text-sm md:text-lg lg:text-xl"
                  : "text-black dark:text-zinc-100 text-3xl md:text-4xl lg:text-5xl"
              }`}
              style={{
                left: `${endpoints.left.x}%`,
                top: `${endpoints.left.y}%`,
                fontFamily: "var(--font-biorhyme)",
                transform: "translate(-50%, calc(-100% - 0.5em))",
              }}
            >
              SEE
            </span>
            {/* SAW: 선택 시 큰 검정, 비선택 시 작은 회색 */}
            <span
              className={`absolute pointer-events-none font-bold whitespace-nowrap ${
                sawUp
                  ? "text-black dark:text-zinc-100 text-3xl md:text-4xl lg:text-5xl"
                  : "text-zinc-400 dark:text-zinc-400 text-sm md:text-lg lg:text-xl"
              }`}
              style={{
                left: `${endpoints.right.x}%`,
                top: `${endpoints.right.y}%`,
                fontFamily: "var(--font-biorhyme)",
                transform: "translate(-50%, calc(-100% - 0.5em))",
              }}
            >
              SAW
            </span>
            <button
              type="button"
              className="absolute left-0 top-0 h-[25%] w-[35%] cursor-pointer pointer-events-auto opacity-0"
              aria-label="SEE - tilt seesaw up"
              onClick={() => setSawUp(false)}
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-[25%] w-[35%] cursor-pointer pointer-events-auto opacity-0"
              aria-label="SAW - tilt seesaw"
              onClick={() => setSawUp(true)}
            />
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
