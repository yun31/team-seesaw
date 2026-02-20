const BODY_TEXT =
  "본 작품은 개별 참여형 인터랙티브 설치로 구성되어, 관객의 얼굴과 목소리가 실시간으로 분석되고 재구성되는 과정을 현장에서 직접 경험할 수 있도록 제시되었다. 관객은 짧은 시간 동안 알고리즘이 표정과 발화를 정렬하는 과정을 체험하며, 스크린에는 평균 모델과 동기화된 결과가 시각적으로 드러난다. 작품은 기술적 처리 과정을 노출함으로써, 개인의 신호가 어떻게 평균 구조로 수렴되는지를 공간 안에서 체감하도록 구성되었다.";

export default function ExhibitionTabContent() {
  return (
    <div className="mt-16 flex flex-col gap-10 sm:gap-12">
      <p
        className="text-sm leading-relaxed text-white/95 sm:text-base"
        style={{ fontFamily: "var(--font-pretendard)" }}
      >
        {BODY_TEXT}
      </p>
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/safe_ex.png"
          alt=""
          className="h-auto w-full max-w-full"
        />
      </div>
    </div>
  );
}
