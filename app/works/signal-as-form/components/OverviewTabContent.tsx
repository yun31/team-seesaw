import Image from "next/image";

export default function OverviewTabContent() {
  return (
    <div
      className="mt-10 flex flex-col gap-8"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <h2 className="text-lg font-medium text-white sm:text-xl">
        Sound Visualization
      </h2>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-white/90 sm:text-base">
        <p>
          Sound Visualization은 인공지능을 감각을 확장하는 번역 장치로 다루는
          연구에서 출발하며 본 작업은 소리를 청각적 현상이 아닌, 분석 가능한
          신호 구조로 인식하고 그 물리적 특성을 시각적·공간적 형태로 전환하는
          과정을 탐구한다.
        </p>
        <p>
          데이터 추출 및 인식 기술을 통해 음량, 진폭, 주파수, 리듬을 분해하고,
          이를 파동, 점, 입자, 스펙트럼의 네 가지 표현 방식으로 재구성하였다.
          시간에 따라 변화하는 음량은 입체 곡선으로, 주파수 분포는 점으로
          이루어진 구체로, 리듬은 입자의 확산과 밀도 변화로 번역된다. 이
          시각화는 소리를 형태와 움직임으로 경험하게 하며, 청각 중심 감각을
          시각적 구조로 확장하는 감각 전환의 실험이다.
        </p>
      </div>

      <div className="flex flex-col gap-1 text-sm text-white/85 sm:text-base">
        <p>
          2024, Audio-visual Research Prototype, Real-time generative
          visualization, Stereo Sound, Dimensions variable
        </p>
      </div>

      <span className="h-px w-full bg-white/30" aria-hidden />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-white sm:text-base">
          Technical Setup
        </p>
        <p className="text-sm leading-relaxed text-white/90 sm:text-base">
          Stereo sound system, Full HD projection, Real-time processing
          workstation, Microphone input
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-white sm:text-base">Software</p>
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
