"use client";

import Image from "next/image";
import Header from "../components/Header";

const TEAM = [
  {
    image: "/image/about/park.png",
    tag: "Aesthetic Structuring",
    name: "DANBI PARK",
    role: "Visual Art Direction & Sonic Structuring",
    education: "B.A. in Composition",
    lines: [
      "Leads system design and visual direction;",
      "Translates rhythm and data into form.",
    ],
  },
  {
    image: "/image/about/choi.png",
    tag: "Human-AI Interaction",
    name: "YUNSEO CHOI",
    role: "HCI Research & Interaction Design",
    education: "M.S. in Artificial Intelligence",
    lines: [
      "Designs the encounter between AI systems and human perception;",
      "Makes those interpretations visible and tangible.",
    ],
  },
  {
    image: "/image/about/kim.png",
    tag: "Real-time Computation",
    name: "HYUNDONG KIM",
    role: "Real-time System Development",
    education: "B.S. in Computer Science",
    lines: [
      "Builds the real-time AI system architecture;",
      "Extracts facial and speech data to compute stability metrics.",
    ],
  },
  {
    image: "/image/about/seo.png",
    tag: "Algorithmic Bias",
    name: "SEUNGWOO SEO",
    role: "AI Model Research",
    education: "M.S. in Artificial Intelligence",
    lines: [
      "Researches AI inference models and dataset bias;",
      "Examines how model choices shape standards and norms.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="dark min-h-screen bg-black font-sans">
      <Header />

      <main className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* 타이틀 */}
          <section className="text-center">
            <p
              className="mt-2 text-sm font-bold uppercase  text-white/90 sm:text-base"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              Designing the Translation
              <br />
              Between Humans and AI
            </p>
          </section>

          {/* 다이어그램 */}
          <section className="mt-10 sm:mt-14">
            <div className="rounded border border-white/30 bg-black/40 px-6 py-8 sm:px-8 sm:py-10">
              {/* Layer 01 + 연결선(모두 점선): 세로 → 가로 → 세로 3개 */}
              <div className="mx-auto flex max-w-2xl flex-col items-center">
                {/* Layer 01 박스 */}
                <div className="rounded border border-white/60 px-6 py-3 text-center sm:px-8 sm:py-4">
                  <span className="text-sm font-medium uppercase tracking-wide text-white sm:text-base">
                    Layer 01 Sensing Human Signals
                  </span>
                </div>

                {/* 점선 세로: Layer 01 하단 중앙에 딱 붙음 */}
                <div
                  className="h-6 w-px shrink-0 border-l-2 border-dotted border-white/50 sm:h-8"
                  aria-hidden
                />

                {/* 가로 점선: 양끝 세로선 위치에 맞춤 (1/6 ~ 5/6) */}
                <div className="relative h-px w-full shrink-0">
                  <div
                    className="absolute left-[16%] right-[16%] top-0 border-t-2 border-dotted border-white/50"
                    aria-hidden
                  />
                </div>

                {/* 세로 점선 3개 + Layer 02/03/04 박스 (선이 박스 상단에 딱 붙음) */}
                <div className="flex w-full justify-between gap-2 sm:gap-4">
                  <div className="flex flex-1 flex-col items-center">
                    <div
                      className="h-8 w-0 shrink-0 border-l-2 border-dotted border-white/50 sm:h-10"
                      aria-hidden
                    />
                    <div className="flex flex-col items-center rounded border border-white/60 px-4 py-3 sm:px-5 sm:py-4">
                      <span className="text-xs font-medium uppercase tracking-wide text-white sm:text-sm">
                        Layer 02
                      </span>
                    </div>
                    <p className="mt-2 text-center text-xs text-white/90 sm:text-sm">
                      Real-Time
                      <br />
                      Data Processing
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col items-center">
                    <div
                      className="h-8 w-0 shrink-0 border-l-2 border-dotted border-white/50 sm:h-10"
                      aria-hidden
                    />
                    <div className="flex flex-col items-center rounded border border-white/60 px-4 py-3 sm:px-5 sm:py-4">
                      <span className="text-xs font-medium uppercase tracking-wide text-white sm:text-sm">
                        Layer 03
                      </span>
                    </div>
                    <p className="mt-2 text-center text-xs text-white/90 sm:text-sm">
                      AI Interpretation &
                      <br />
                      Modeling
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col items-center">
                    <div
                      className="h-8 w-0 shrink-0 border-l-2 border-dotted border-white/50 sm:h-10"
                      aria-hidden
                    />
                    <div className="flex flex-col items-center rounded border border-white/60 px-4 py-3 sm:px-5 sm:py-4">
                      <span className="text-xs font-medium uppercase tracking-wide text-white sm:text-sm">
                        Layer 04
                      </span>
                    </div>
                    <p className="mt-2 text-center text-xs text-white/90 sm:text-sm">
                      Sensory Feedback &
                      <br />
                      Interaction Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 하단 문장 */}
          <p
            className="mt-10 text-center text-sm leading-relaxed text-white/95 sm:mt-12 sm:text-base"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            We design systems where technology, aesthetics,
            <br />
            and human behavior work together as one.
          </p>

          {/* 팀 프로필 2x2 */}
          <section className="mt-14 sm:mt-20">
            <div className="rounded-xl border border-white/30 bg-black/40 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
                {TEAM.map((person) => (
                  <article
                    key={person.name}
                    className="flex flex-col"
                    style={{ fontFamily: "var(--font-pretendard)" }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg sm:h-36 sm:w-36">
                        <Image
                          src={person.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 128px, 144px"
                        />
                      </div>
                      <span className="rounded-full border border-white/40 bg-black/60 px-3 py-1.5 text-xs font-medium text-white sm:text-sm">
                        {person.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                      {person.name}
                    </h3>
                    <p className="mt-1 font-medium text-xs text-white/85 sm:text-sm">
                      {person.role}
                    </p>
                    <p className="mt-3 text-xs text-white/80 sm:text-sm">
                      {person.education};
                    </p>
                    <ul className="mt-2 list-none space-y-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                      {person.lines.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
