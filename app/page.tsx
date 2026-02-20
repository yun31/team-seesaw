import Header from "./components/Header";
import CenterImageSection from "./components/CenterImageSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E7E9] font-sans dark:bg-black">
      <Header />
      <CenterImageSection />

      {/* SEESAW 타이틀 + 설명: 화면 너비 1/3 지점부터 시작 */}
      <div className="mt-20 flex w-full flex-col items-start pl-[12vw] pr-4 sm:pl-[16vw] sm:pr-6 sm:mt-30 md:pl-[24vw] md:mt-70">
        <p
          className="mt-1 text-xl font-medium tracking-tight text-black sm:text-2xl md:text-4xl lg:text-5xl dark:text-zinc-50"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {"{ SEESAW"}
        </p>
        {/* 문구 끝 지점 바로 아래에 세로선 + 선 기준 가운데 정렬 문단 */}
        <div className="relative mt-1 inline-block sm:mt-2 md:mt-6">
          <p
            className="text-xl font-medium tracking-tight text-black/90 sm:text-2xl md:text-4xl lg:text-5xl dark:text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            An AI Interaction Collective
          </p>
          <div className="mt-2 absolute left-full top-full flex min-w-[min(280px,85vw)] -translate-x-1/2 flex-col items-center pt-1 sm:min-w-[min(360px,88vw)] md:mt-4 md:pt-2 lg:min-w-[min(640px,92vw)]">
            <span
              className="h-12 w-px shrink-0 bg-black dark:bg-white sm:h-16 md:h-24"
              aria-hidden
            />
            <p
              className="mt-4 w-full max-w-[85vw] shrink-0 text-center text-xs leading-snug text-zinc-500 sm:max-w-[88vw] sm:text-sm md:mt-8 md:max-w-[90vw] md:text-base md:leading-normal lg:max-w-none lg:text-lg lg:whitespace-nowrap dark:text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Exploring Parts of Essential and Reference of Artificial
              Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Lower content: vertical SEESAW + paragraphs (화면 너비 기준 가운데) */}
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
              데이터 추출과 인식 기술을 통해 감정, 행동, 리듬과 같은 인간의
              신호를
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
    </div>
  );
}
