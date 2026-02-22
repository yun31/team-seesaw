"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 이미지 중앙 기준 오프셋. 이미지 width/height의 몇 % 이동했는지 (반응형 유지)
type WordPosition = {
  word: string;
  offsetX: number; // 이미지 width 대비 %, 음수=왼쪽
  offsetY: number; // 이미지 height 대비 %, 음수=위
  align?: "left" | "right" | "center";
};

const WORD_POSITIONS: WordPosition[] = [
  { word: "CONNECTION", offsetX: -52, offsetY: -34, align: "left" },
  { word: "INTELLIGENCE", offsetX: -70, offsetY: -26, align: "left" },
  { word: "AUTOMATION", offsetX: -81, offsetY: -14, align: "left" },
  { word: "INTERPRETATION", offsetX: -88, offsetY: -2, align: "left" },
  { word: "PERSONALIZATION", offsetX: -82, offsetY: 12, align: "left" },
  { word: "STABILITY", offsetX: -73, offsetY: 28, align: "left" },
  { word: "AMPLIFICATION", offsetX: -65, offsetY: 38, align: "left" },
  { word: "EXPANSION", offsetX: -58, offsetY: 48, align: "left" },
  { word: "OPTIMIZATION", offsetX: 64, offsetY: -26, align: "right" },
  { word: "ACCESSIBILITY", offsetX: 72, offsetY: -2, align: "right" },
  { word: "CARE", offsetX: 69, offsetY: 24, align: "right" },
  { word: "PREDICTION", offsetX: 60, offsetY: 36, align: "right" },
  { word: "ADAPTATION", offsetX: 55, offsetY: 48, align: "right" },
  { word: "AUGMENTATION", offsetX: -15, offsetY: 53, align: "center" },
  { word: "EFFICIENCY", offsetX: 19, offsetY: 54, align: "center" },
  { word: "ASSISTANCE", offsetX: 0, offsetY: 62, align: "center" },
];

const SEE_HIGHLIGHT_WORDS = new Set([
  "OPTIMIZATION",
  "STABILITY",
  "PREDICTION",
  "ADAPTATION",
  "EFFICIENCY",
]);

// SAW 선택 시 같은 16개 위치에 표시할 단어 (이미지 기준: 왼쪽·오른쪽·하단)
const SAW_WORDS = [
  "BIAS",
  "POWER",
  "DISTORTION",
  "SURVEILLANCE",
  "DISTORTION",
  "INTRUSION",
  "TRACKING",
  "NORMALIZATION",
  "DEPENDENCY",
  "CONTROL",
  "SURVEILLANCE",
  "CONFORMITY",
  "REPLACEMENT",
  "STANDARDIZATION",
  "ELIMINATION",
];
const SAW_HIGHLIGHT_WORDS = new Set([
  "NORMALIZATION",
  "CONTROL",
  "SURVEILLANCE",
  "CONFORMITY",
  "STANDARDIZATION",
]);

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

const HIGHLIGHT_DELAY_MS = 600;

export default function CenterImageSection() {
  // false = SEE 쪽 올라감(기본), true = SAW 쪽 올라감
  const [sawUp, setSawUp] = useState(false);
  const [highlightDelay, setHighlightDelay] = useState(false);
  const prevSawUpRef = useRef(sawUp);
  const highlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const switchMode = (toSaw: boolean) => {
    if (prevSawUpRef.current === toSaw) return;
    if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
    prevSawUpRef.current = toSaw;
    setSawUp(toSaw);
    setHighlightDelay(true);
    highlightTimerRef.current = setTimeout(() => {
      highlightTimerRef.current = null;
      setHighlightDelay(false);
    }, HIGHLIGHT_DELAY_MS);
  };

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
            {/* Central image: SEE/SAW 크로스페이드 */}
            <div className="absolute left-1/2 top-10 w-[26vw] min-w-40 -translate-x-1/2 overflow-hidden aspect-square md:top-12 md:w-[28vw] md:min-w-44">
              <Image
                src="/image/main.png"
                alt="SEESAW - AI network visualization"
                fill
                className="object-contain transition-opacity duration-500 ease-in-out"
                style={{ opacity: sawUp ? 0 : 1 }}
                priority
                sizes="38vw"
              />
              <Image
                src="/image/main_dark.png"
                alt=""
                fill
                className="pointer-events-none object-contain transition-opacity duration-500 ease-in-out"
                style={{ opacity: sawUp ? 1 : 0 }}
                sizes="38vw"
                aria-hidden
              />
            </div>

            {/* 단어 레이어: SEE/SAW 크로스페이드 */}
            <div
              className="pointer-events-none absolute left-1/2 top-10 w-[26vw] min-w-40 -translate-x-1/2 aspect-square md:top-12 md:w-[28vw] md:min-w-44"
              aria-hidden
            >
              {/* SEE 단어: 전환 직후엔 하이라이트도 검정 → 이어서 #009DFF로 전환 */}
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: sawUp ? 0 : 1 }}
              >
                {WORD_POSITIONS.map(({ word, offsetX, offsetY, align }) => {
                  const isHighlight = SEE_HIGHLIGHT_WORDS.has(word);
                  const useBaseColor = isHighlight && highlightDelay;
                  return (
                    <span
                      key={word}
                      className={`absolute whitespace-nowrap tracking-tight ${isHighlight ? "font-bold" : "font-medium"} ${!isHighlight ? "text-black dark:text-zinc-800" : ""}`}
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        left: `calc(50% + ${offsetX}%)`,
                        top: `calc(50% + ${offsetY}%)`,
                        fontSize: isHighlight
                          ? "clamp(6px, 1.95vw, 13px)"
                          : "clamp(5px, 1.6vw, 11px)",
                        color: useBaseColor
                          ? undefined
                          : isHighlight
                            ? "#009DFF"
                            : undefined,
                        transition: "color 0.6s ease",
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
                  );
                })}
              </div>
              {/* SAW 단어: 전환 직후엔 하이라이트도 흰색 → 이어서 #7DFF86로 전환 */}
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: sawUp ? 1 : 0 }}
              >
                {WORD_POSITIONS.map(({ offsetX, offsetY, align }, i) => {
                  const displayWord = SAW_WORDS[i];
                  const isHighlight =
                    SAW_HIGHLIGHT_WORDS.has(displayWord);
                  const useBaseColor = isHighlight && highlightDelay;
                  return (
                    <span
                      key={`${i}-${displayWord}`}
                      className={`absolute whitespace-nowrap tracking-tight ${isHighlight ? "font-bold" : "font-medium"} ${!isHighlight ? "text-black dark:text-zinc-800" : ""}`}
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        left: `calc(50% + ${offsetX}%)`,
                        top: `calc(50% + ${offsetY}%)`,
                        fontSize: isHighlight
                          ? "clamp(6px, 1.95vw, 13px)"
                          : "clamp(5px, 1.6vw, 11px)",
                        color: useBaseColor
                          ? "#fff"
                          : isHighlight
                            ? "#7DFF86"
                            : undefined,
                        transition: "color 0.6s ease",
                        transform:
                          align === "center"
                            ? "translate(-50%, -50%)"
                            : align === "right"
                              ? "translate(-100%, -50%)"
                              : "translate(0, -50%)",
                      }}
                    >
                      {displayWord}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* 시소 오버레이: 선·원·SEE/SAW 텍스트 디졸브 전환 */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 100"
                fill="none"
                preserveAspectRatio="none"
              >
                <g
                  className="transition-opacity duration-500 ease-in-out"
                  style={{ opacity: sawUp ? 0 : 1 }}
                >
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
                <g
                  className="transition-opacity duration-500 ease-in-out"
                  style={{ opacity: sawUp ? 1 : 0 }}
                >
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
            {/* 양끝 원 */}
            <span
              className="absolute pointer-events-none h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-zinc-100 transition-opacity duration-500"
              style={{
                left: `${endpoints.left.x}%`,
                top: `${endpoints.left.y}%`,
              }}
              aria-hidden
            />
            <span
              className="absolute pointer-events-none h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-zinc-100 transition-opacity duration-500"
              style={{
                left: `${endpoints.right.x}%`,
                top: `${endpoints.right.y}%`,
              }}
              aria-hidden
            />
            {/* SEE / SAW 라벨: 크기·색 전환. 비선택 쪽에 호흡 애니메이션. seesaw-label-transition으로 SAW 선택 시에도 크기 전환 유지 */}
            <span
              className={`seesaw-label-transition absolute pointer-events-none font-bold whitespace-nowrap ${
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
              <span className={sawUp ? "seesaw-label-breathe" : undefined}>
                SEE
              </span>
            </span>
            <span
              className={`seesaw-label-transition absolute pointer-events-none font-bold whitespace-nowrap ${
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
              <span className={!sawUp ? "seesaw-label-breathe" : undefined}>
                SAW
              </span>
            </span>
            {/* SEE 히트박스: 선 왼쪽 끝(SEE) 위치에 맞춤 */}
            <button
              type="button"
              className="absolute cursor-pointer pointer-events-auto opacity-0"
              style={{
                left: `${Math.max(0, endpoints.left.x - 10)}%`,
                top: `${Math.max(0, endpoints.left.y - 8)}%`,
                width: "22%",
                height: "20%",
              }}
              aria-label="SEE - tilt seesaw up"
              onClick={() => switchMode(false)}
            />
            {/* SAW 히트박스: 선 오른쪽 끝(SAW) 위치에 맞춤 */}
            <button
              type="button"
              className="absolute cursor-pointer pointer-events-auto opacity-0"
              style={{
                left: `${endpoints.right.x - 12}%`,
                top: `${Math.max(0, endpoints.right.y - 10)}%`,
                width: "24%",
                height: "22%",
              }}
              aria-label="SAW - tilt seesaw"
              onClick={() => switchMode(true)}
            />
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
