"use client";

import { useTranslations } from "../context/translations";

function Paragraph({
  text,
  muted,
}: {
  text: string;
  muted?: boolean;
}) {
  const lines = text.split("\n");
  return (
    <p className={muted ? "lower-content-muted" : undefined}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

export default function MainPageLowerContent() {
  const { ts } = useTranslations();

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
          <Paragraph text={ts("home.lowerContent.p1")} />
          <Paragraph text={ts("home.lowerContent.p2")} />
          <Paragraph text={ts("home.lowerContent.p3")} />
          <Paragraph text={ts("home.lowerContent.p4")} muted />
          <Paragraph text={ts("home.lowerContent.p5")} muted />
          <Paragraph text={ts("home.lowerContent.p6")} muted />
        </div>
      </div>
    </section>
  );
}
