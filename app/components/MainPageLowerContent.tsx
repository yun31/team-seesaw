"use client";

import { useLanguage } from "../context/LanguageContext";

export default function MainPageLowerContent() {
  const { lang } = useLanguage();

  if (lang === "EN") {
    return (
      <section className="mt-30 flex w-full justify-center px-6 py-12 sm:mt-50 sm:py-16 md:py-24">
        <div className="flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-16 md:gap-24 lg:gap-40">
          <div
            className="flex shrink-0 flex-col justify-center text-black dark:text-zinc-50"
            style={{ fontFamily: "var(--font-biorhyme)" }}
          >
            <div className="flex gap-4 sm:gap-6 md:gap-10">
              <div className="flex flex-col text-2xl font-bold leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl">
                <span>S</span>
                <span>E</span>
                <span>E</span>
              </div>
              <div className="flex flex-col text-2xl font-bold leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl">
                <span>S</span>
                <span>A</span>
                <span>W</span>
              </div>
            </div>
          </div>
          <div
            className="flex min-w-0 flex-1 flex-col gap-4 text-sm leading-relaxed text-black/90 sm:gap-5 sm:text-base md:gap-6 md:text-sm dark:text-white"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            <p>
              SEESAW is an AI interaction collective composed of Hyundong Kim,
              <br />
              Danbi Park, Seungwoo Seo, and Yunseo Choi. With backgrounds in
              <br />
              sound and visual design, AI development, and HCI research, the
              <br />
              collective designs translation structures between artificial
              <br />
              intelligence technologies and sensory experience.
            </p>
            <p>
              Through data extraction and perception technologies, SEESAW
              <br />
              detects human signals such as emotion, behavior, and rhythm,
              <br />
              and reconstructs them into visual and sonic languages.
              <br />
              Technology is not treated merely as a tool for implementation,
              <br />
              but as a medium that reveals underlying social structures.
            </p>
            <p>
              The collective proposes experiential frameworks that examine
              <br />
              how algorithms interpret humans, and how such interpretations
              <br />
              shape social norms, power dynamics, and forms of perception.
            </p>
            <p className="lower-content-muted">
              AI is both potential and paradox.
              <br />
              It amplifies expansion and connection while simultaneously
              <br />
              embedding standardization and control. SEESAW understands
              <br />
              this duality as a spectrum, exploring both the beneficial
              <br />
              functions of technology and its structural tensions.
            </p>
            <p className="lower-content-muted">
              Rather than presenting judgments, the collective generates
              <br />
              questions; rather than concluding, it keeps discourse open.
            </p>
            <p className="lower-content-muted">
              SEESAW observes the shifting balance at the intersection of
              <br />
              technology and humanity, data and emotion, systems and
              <br />
              society—continuously experimenting with new sensory
              <br />
              languages and technological discourse within that tension.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // KR (default)
  return (
    <section className="mt-30 flex w-full justify-center px-6 py-12 sm:mt-50 sm:py-16 md:py-24">
      <div className="flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-16 md:gap-24 lg:gap-40">
        <div
          className="flex shrink-0 flex-col justify-center text-black dark:text-zinc-50"
          style={{ fontFamily: "var(--font-biorhyme)" }}
        >
          <div className="flex gap-4 sm:gap-6 md:gap-10">
            <div className="flex flex-col text-2xl font-bold leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl">
              <span>S</span>
              <span>E</span>
              <span>E</span>
            </div>
            <div className="flex flex-col text-2xl font-bold leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl">
              <span>S</span>
              <span>A</span>
              <span>W</span>
            </div>
          </div>
        </div>
        <div
          className="flex min-w-0 flex-1 flex-col gap-4 text-sm leading-relaxed text-black/90 sm:gap-5 sm:text-base md:gap-6 md:text-sm dark:text-white"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          <p>
            SEESAW는 김현동, 박단비, 서승우, 최윤서로 구성된 AI 인터랙션
            <br />
            콜렉티브로, 사운드·시각 디자인, AI 개발, HCI 연구를 기반으로
            <br />
            인공지능 기술과 감각적 경험 사이의 번역 구조를 설계한다.
          </p>
          <p>
            데이터 추출과 인식 기술을 통해 감정, 행동, 리듬과 같은 인간의 신호를
            <br />
            감지하고, 이를 시각과 사운드의 언어로 재구성하며 기술은 단순한
            <br />
            구현의 대상이 아니라, 사회적 구조를 드러내는 매개로 여긴다.
          </p>
          <p>
            우리는 알고리즘이 인간을 해석하는 방식, 그리고 그 해석이 사회적
            <br />
            규범과 권력, 감각의 형식에 어떤 영향을 미치는지를 경험의 형태로
            <br />
            제안하고자 한다.
          </p>
          <p className="lower-content-muted">
            AI는 가능성이자 역설이다.
            <br />
            확장과 연결을 증폭시키는 동시에, 표준화와 통제를 내포한다.
            <br />
            SEESAW는 이 양면성을 하나의 스펙트럼으로 인식하며,
            <br />
            기술의 순기능과 구조적 긴장을 동시에 탐구한다.
          </p>
          <p className="lower-content-muted">
            판단을 제시하기보다 질문을 생성하고,
            <br />
            결론을 단정하기보다 담론을 열어두는 방식으로
          </p>
          <p className="lower-content-muted">
            SEESAW는 기술과 인간, 데이터와 감정,
            <br />
            시스템과 사회가 교차하는 지점에서 발생하는 균형의 움직임을
            <br />
            관찰하며, 그 긴장 속에서 새로운 감각적 언어와
            <br />
            기술 담론을 지속적으로 실험한다.
          </p>
        </div>
      </div>
    </section>
  );
}
