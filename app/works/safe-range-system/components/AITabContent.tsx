const DESCRIPTION = [
  "SAFE RANGE SYSTEM은 실시간 얼굴 인식과 음성 분석 기술을 기반으로 작동하는 알고리즘 시스템이다.",
  "카메라와 마이크를 통해 수집된 데이터는 안면 특징점 추출, 미세 표정 분석, 시선 움직임 추적, 음성 스펙트럼 분석 및 발화 간 간격 측정 과정을 거쳐 정량화된다. 이 데이터는 통계적 평균과의 편차를 기준으로 파라미터화되고, 정규화 알고리즘을 통해 허용 범위 안으로 재배치된다.",
  "얼굴은 평균 모델에 기반한 3D 마스크로 출력되며, 음성은 디지털 신호 처리와 BPM 동기화 과정을 통해 74 BPM 리듬 구조에 정렬된다. 결과적으로 개인의 고유한 신호는 확장되는 대신, 통계적 안정성을 중심으로 재정렬되며, 알고리즘은 신호를 표준으로 수렴시키는 메커니즘으로 기능한다.",
] as const;

const ROW2_TEXT = [
  "본 작품은 관객의 얼굴에서 감지되는 미세한 신호들을 입력값으로 수집하는 시스템으로 구성된다. 눈의 움직임, 동공의 반응, 입술의 곡선 변화, 안면 근육의 긴장도와 같은 실시간 시각 데이터는 라이브 입력 단계에서 개별 요소로 분리되어 측정되며, 이후 알고리즘적 해석(Algorithmic Interpretation) 단계로 전달된다.",
  "이 단계에서 각 신호는 'Divergence Index'라는 값으로 변환되어 통계적 평균으로부터 얼마나 벗어나 있는지가 계산된다. 이러한 편차는 개인의 고유한 특성으로 유지되지 않고, 파라미터화 과정을 거쳐 수치화된 구조적 값으로 다시 배열된다.",
  "정리된 데이터는 정규화 필드를 통과하면서 허용 가능한 범위 안으로 조정된다. 이후 평균 모델을 기준으로 재구성되어, 최종적으로 3D 마스크 형태로 시각화된다.",
  "이 시스템은 새로운 얼굴을 창조하는 것이 아니라, 측정된 차이를 표준 구조에 맞추어 조정하는 방식으로 작동한다.",
] as const;

export default function AITabContent() {
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
          {DESCRIPTION.map((paragraph, i) => (
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
          {ROW2_TEXT.map((paragraph, i) => (
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
