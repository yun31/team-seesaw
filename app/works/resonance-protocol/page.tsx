import Header from "../../components/Header";

const BODY_PARAGRAPHS = [
  "《Resonance Protocol》은 인간의 감정이 기술에 의해 '읽히는' 순간을 다루는 대신, 그 감정이 어떻게 형식화되고 배열되는지를 드러내는 VR 작업이다. 관객은 어두운 가상 공간에 입장하며, 자신의 호흡과 음성, 움직임이 빛과 사운드의 파동으로 변환되는 경험을 한다. 이 번역은 직관적이고 아름답게 느껴지지만, 시간이 지날수록 그 구조는 점차 특정한 스펙트럼으로 정렬된다.",
  "감정은 자유로운 흐름이 아니라, 점점 안정적이고 예측 가능한 범주로 재구성된다. 관객은 표현하고 있다고 느끼는 동시에, 더 선명하고 조화로운 피드백을 얻기 위해 스스로를 조정하고 있음을 인식하게 된다. 이 과정에서 기술은 단순한 감지 장치를 넘어 감정의 형식을 설계하는 체계로 작동한다.",
  "SEESAW는 이 작업을 통해 감정 인식 기술이 중립적인 도구가 아니라, 인간의 감각을 일정한 구조 안으로 배치하는 번역 장치임을 제안한다. 《Resonance Protocol》은 질문을 남긴다. 우리가 경험하는 감정은 얼마나 자율적인가. 그리고 기술이 제시하는 '안정된 모델'은 누구의 기준 위에 세워져 있는가.",
];

export default function ResonanceProtocolPage() {
  return (
    <div className="works-page min-h-screen bg-black font-sans">
      <Header />

      <main className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* 1행: 연도 + 가로선 */}
          <div className="flex items-center gap-4">
            <span
              className="shrink-0 text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              2025
            </span>
            <span className="h-px flex-1 min-w-0 bg-white/40" aria-hidden />
          </div>

          {/* 2행: VR Exhibition + 제목 */}
          <p
            className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            VR Exhibition
          </p>
          <p
            className="mt-1 text-lg font-medium text-white sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            Resonance Protocol
          </p>

          <div className="mt-10 flex flex-col gap-12 sm:gap-16">
            <div className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/vr.png"
                alt=""
                className="h-auto w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              {BODY_PARAGRAPHS.map((paragraph, i) => (
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
        </div>
      </main>
    </div>
  );
}
