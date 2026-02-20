import Header from "../components/Header";
import Link from "next/link";
import { Fragment } from "react";

const WORKS = [
  {
    year: "2025",
    category: "AI Exhibition",
    title: "《SAFE RANGE SYSTEM》",
    image: "/image/thum_safe.png",
    detailHref: "/works/safe",
  },
  {
    year: "2025",
    category: "VR Exhibition",
    title: "《Resonance Protocol》",
    image: "/image/thum_vr.png",
    detailHref: "/works/vr",
  },
  {
    year: "2024",
    category: "AI Sound Universal Project",
    title: "《SIGNAL AS FORM》",
    image: "/image/thum_silo.png",
    detailHref: "/works/silo",
  },
] as const;

function ArrowButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex shrink-0 items-center justify-center text-white hover:opacity-80 transition-opacity"
      aria-label="View detail"
    >
      <svg
        width="45"
        height="18.5"
        viewBox="0 0 90 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M71 0.353516L89 18.3535M89 18.3535L71 36.3535M89 18.3535H0"
          stroke="currentColor"
        />
      </svg>
    </Link>
  );
}

export default function WorksPage() {
  return (
    <div className="works-page min-h-screen bg-black font-sans">
      <Header />

      <main className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-16 sm:space-y-20 md:space-y-24">
          {WORKS.map((work, index) => (
            <Fragment key={index}>
              <section className="flex flex-col">
                {/* 1행: 연도 + 가로선 */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl shrink-0"
                    style={{ fontFamily: "var(--font-pretendard)" }}
                  >
                    {work.year}
                  </span>
                  <span
                    className="h-px flex-1 min-w-0 bg-white/40"
                    aria-hidden
                  />
                </div>

                {/* 2행: 두 줄 제목 + 우측 화살표 */}
                <div className="mt-3 flex items-start justify-between gap-4 sm:mt-4">
                  <div className="min-w-0">
                    <p
                      className="text-sm text-white/90 sm:text-base"
                      style={{ fontFamily: "var(--font-pretendard)" }}
                    >
                      {work.category}
                    </p>
                    <p
                      className="mt-1 text-lg font-medium text-white sm:text-xl md:text-2xl leading-tight"
                      style={{ fontFamily: "var(--font-pretendard)" }}
                    >
                      {work.title}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <ArrowButton href={work.detailHref} />
                  </div>
                </div>

                {/* 3행: 그 아래 사진 (오른쪽 정렬, 1/2 너비, 각 이미지 원본 비율) */}
                <div className="mt-6 flex justify-end sm:mt-8">
                  <div className="w-1/2 min-w-[200px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={work.image} alt="" className="h-auto w-full" />
                  </div>
                </div>
              </section>
            </Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
