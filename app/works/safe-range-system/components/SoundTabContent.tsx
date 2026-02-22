"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DEVICE_IMG = "/image/safe_sound_device";

/** 74 BPM: 811ms마다 한 번 */
const INTERVAL_MS = 810;

/** 키보드 on 순서: 1 → 5 → 9 → 2 → 6 → 4 → 3 → 7 → 8 */
const KEY_ORDER = [1, 5, 9, 2, 6, 4, 3, 7, 8];

export default function SoundTabContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const [keyOrderIndex, setKeyOrderIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setIndicatorIndex((i) => (i + 1) % 4);
      setKeyOrderIndex((i) => (i + 1) % KEY_ORDER.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIndicatorIndex(0);
      setKeyOrderIndex(0);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-20 flex flex-col gap-16 overflow-visible">
      {/* 타이틀: 74BPM + 상태 문구 */}
      <div className="flex flex-col gap-1">
        <p
          className="text-5xl mb-2 font-medium tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          74BPM
        </p>
        <p
          className="text-sm text-white/90 sm:text-base"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          LIVE SIGNAL ADJUSTING...
        </p>
        <p
          className="text-sm text-white/90 sm:text-base"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          TIMING OFFSET REDUCED
        </p>
        <p
          className="text-sm text-white/90 sm:text-base"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          VARIANCE APPROACHING ZERO
        </p>
      </div>

      {/* 디바이스: bg.png 크기만큼 영역 설정, 이미지 잘리지 않음 */}
      <div className="flex justify-center overflow-visible">
        <div className="relative w-fit shrink-0">
          {/* bg.png 높이 = 화면 높이 96%, 비율 유지 */}
          <Image
            src={`${DEVICE_IMG}/bg.png`}
            alt=""
            width={2640}
            height={4938}
            className="block h-[92vh] w-auto object-contain object-top"
          />
          {/* 디바이스 위 오버레이: 인디케이터·스크린·버튼·키보드 */}
          <div className="absolute inset-0 flex flex-col items-center px-[10%] pt-[24%] pb-[6%]">
            {/* 인디케이터 4개 나란히 (버튼 on 시 74 BPM으로 순서대로 light_on) */}
            <div className="mb-[6%] flex items-center justify-center gap-[5vh]">
              {[0, 1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={
                    isPlaying && indicatorIndex === i
                      ? `${DEVICE_IMG}/light_on.png`
                      : `${DEVICE_IMG}/light.png`
                  }
                  alt=""
                  width={32}
                  height={32}
                  className="h-[2vh] min-h-[16px] w-auto shrink-0 object-contain"
                />
              ))}
            </div>

            {/* 디스플레이 영역: btn_off → screen_off, btn_on → screen_on + 숫자 오버레이 */}
            <div className="relative mb-[13%] w-full shrink-0">
              <Image
                src={
                  isPlaying
                    ? `${DEVICE_IMG}/screen_on.png`
                    : `${DEVICE_IMG}/screen_off.png`
                }
                alt=""
                width={320}
                height={160}
                className="mx-auto h-auto w-full max-w-full object-contain"
              />
              {isPlaying && (
                <>
                  {/* 왼쪽: num_on_1 ~ 4가 74 BPM으로 순서대로 반복 */}
                  <Image
                    src={`${DEVICE_IMG}/num_on_${indicatorIndex + 1}.png`}
                    alt=""
                    width={320}
                    height={160}
                    className="absolute left-[9%] top-[62%] h-[36%] w-[30%] max-w-full -translate-y-1/2 object-contain object-left"
                  />
                  {/* 오른쪽: 74 고정 */}
                  <Image
                    src={`${DEVICE_IMG}/num_on_74.png`}
                    alt=""
                    width={320}
                    height={160}
                    className="absolute right-[22%] top-[62%] h-[65%] w-[30%] max-w-full -translate-y-1/2 object-contain object-right"
                  />
                </>
              )}
            </div>

            {/* 버튼: 클릭 시 살짝 눌렀다가 이미지 전환 (on/off 토글) */}
            <div className="mb-[8%] flex items-center justify-center">
              <button
                type="button"
                className="focus:outline-none active:scale-90 transition-transform duration-75 ease-out"
                aria-label={isPlaying ? "Stop" : "Play"}
                onClick={handleTogglePlay}
              >
                <Image
                  src={
                    isPlaying
                      ? `${DEVICE_IMG}/btn_on.png`
                      : `${DEVICE_IMG}/btn_off.png`
                  }
                  alt=""
                  width={56}
                  height={56}
                  className="h-[6%] max-h-14 w-auto object-contain pointer-events-none select-none"
                />
              </button>
            </div>

            {/* 3x3 그리드: 버튼 on 시 74 BPM으로 1-5-9-2-6-4-3-7-8 순서대로 on/off 루프 */}
            <div className="grid w-full max-w-[90%] grid-cols-3 gap-[10%]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                const isKeyOn = isPlaying && KEY_ORDER[keyOrderIndex] === n;
                return (
                  <div key={n} className="shrink-0">
                    <Image
                      src={`${DEVICE_IMG}/keyboard/${
                        isKeyOn ? "on" : "off"
                      }/${n}.png`}
                      alt=""
                      width={80}
                      height={80}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
