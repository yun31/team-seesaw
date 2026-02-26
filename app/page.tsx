import Header from "./components/Header";
import CenterImageSection from "./components/CenterImageSection";
import MainPageLowerContent from "./components/MainPageLowerContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E7E9] font-sans">
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

      {/* Lower content: vertical SEESAW + paragraphs (KR/EN 전환) */}
      <MainPageLowerContent />

      {/* 이메일 연락처 */}
      <footer className="mt-2 flex w-full justify-center pb-16 sm:mt-4 sm:pb-20">
        <a
          href="mailto:admin@teamseesaw.com"
          className="flex items-center gap-2 font-medium text-base text-black/80 hover:text-black hover:opacity-90 dark:text-zinc-400 dark:hover:text-white sm:gap-3 sm:text-lg"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span className="sr-only">Email: </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5 shrink-0"
            aria-hidden
          >
            <rect width="20" height="16" x="2" y="4" />
            <path d="M2 7 L12 14 L22 7" />
          </svg>
          admin@teamseesaw.com
        </a>
      </footer>
    </div>
  );
}
