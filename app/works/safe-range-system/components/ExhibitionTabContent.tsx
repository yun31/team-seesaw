import Image from "next/image";

const BODY_TEXT =
  "본 작품은 개별 참여형 인터랙티브 설치로 구성되어, 관객의 얼굴과 목소리가 실시간으로 분석되고 재구성되는 과정을 현장에서 직접 경험할 수 있도록 제시되었다. 관객은 짧은 시간 동안 알고리즘이 표정과 발화를 정렬하는 과정을 체험하며, 스크린에는 평균 모델과 동기화된 결과가 시각적으로 드러난다. 작품은 기술적 처리 과정을 노출함으로써, 개인의 신호가 어떻게 평균 구조로 수렴되는지를 공간 안에서 체감하도록 구성되었다.";

const IMG = "/image";

export default function ExhibitionTabContent() {
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
            {BODY_TEXT}
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
