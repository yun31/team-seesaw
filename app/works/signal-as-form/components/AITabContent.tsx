import Image from "next/image";

const BLOCKS = [
  {
    title: "음색 분석 기반 PBR 머티리얼 매핑 AI",
    subtitle:
      "Timbre Analysis-Based Physically Based Rendering (PBR) Material Mapping AI",
    body: [
      "같은 음이라도 금속처럼 차갑게, 나무처럼 따뜻하게 들릴 수 있다. 음색은 단순한 음높이가 아니라, 구조이다.",
      "AI는 주파수 스펙트럼, 배음 밀도, 에너지 분포 등 음향의 물리적 특성을 추출하여 이 데이터는 Physically Based Rendering(PBR) 기법을 통해 표면 질감의 속성으로 번역된다.",
      "소리는 표면이 되고, 주파수는 질감이 된다.",
      "하나의 음은 반사율이 높은 금속처럼 시각화되거나, 따뜻한 목재 질감으로 나타날 수 있다. 이는 은유가 아니라, 데이터 기반 번역이다.",
      "이 과정은 음악의 질적 차이를 시각적·공간적 구조로 드러내며, 음색 인지의 접근성을 확장한다.",
    ],
  },
  {
    title: "Valence-Arousal 추정 기반 컬러 매핑 AI",
    subtitle: "Valence-Arousal Estimation-Based Color Mapping AI",
    body: [
      "음악 감정 연구에서는 Russell의 Circumplex Model of Affect가 널리 활용된다. Valence(쾌·불쾌)와 Arousal(긴장·활동성)은 정서를 구성하는 이차원 구조이다.",
      "저희 AI는 멜스펙트로그램, 템포, 리듬, 크로마 등의 특징을 분석하여 실시간으로 정서 벡터를 추정하고, 이 벡터는 색 공간으로 매핑된다.",
      "높은 각성과 긍정적 정서는 따뜻한 색조로, 낮은 각성이나 차분한 정서는 차가운 색조로 변환된다.",
      "청자는 감정을 해석하는 대신, 그 흐름을 색과 공간으로 경험할 수 있도록 하는데 목표로 한다.",
    ],
  },
  {
    title: "MR 기반 시각·햅틱 피드백 시스템",
    subtitle: "MR-Based Visual and Haptic Feedback System",
    body: [
      "소리는 본래 공기의 진동이다.",
      "MR 환경에서는 이 진동을 빛, 색, 촉각 진동으로 전환할 수 있다. 해당 시스템은 실시간 음향 분석 데이터를 MR 시각화와 햅틱 인터페이스에 통합한다.",
      "파동은 시각적 필드로 드러나고, 리듬은 신체적 진동으로 전달된다. 이 구조는 농인과 비농인이 서로 다른 감각을 통해 동일한 소리를 경험하도록 설계되었다.",
      "이는 청각의 대체가 아니라, 지각의 재분배이며, 다감각적 접근성의 확장으로 접근하고자 한다.",
    ],
  },
];

export default function AITabContent() {
  return (
    <div
      className="mt-10 flex flex-col gap-10 sm:gap-12"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      {/* 상단 인트로 텍스트 */}
      <p className="text-center text-sm leading-relaxed text-white/95 sm:text-base">
        본 프레임워크는 인공지능을 감각 번역 시스템으로 다루며,
        <br />
        음향 신호를 정서 밀도로 전환하는 과정을 탐구한다.
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

      {/* Our AI Impact + 사각형 3개 */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold text-white sm:text-xl">
          Our AI Impact
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOCKS.map((block, i) => (
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
