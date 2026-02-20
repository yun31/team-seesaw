"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"KR" | "EN">("KR");

  return (
    <header className="flex w-full flex-col gap-1 px-4 py-4 sm:gap-2 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-16">
      {/* 위쪽 줄: 오른쪽에 KR / EN만 */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setLang(lang === "KR" ? "EN" : "KR")}
          className="whitespace-nowrap text-xs text-black hover:opacity-70 dark:text-zinc-50 sm:text-sm"
          style={{ fontFamily: "var(--font-pretendard)" }}
          aria-label={lang === "KR" ? "Switch to English" : "한국어로 전환"}
        >
          KR / EN
        </button>
      </div>

      {/* 아래쪽 줄: 로고와 메뉴 같은 높이 */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold uppercase tracking-wide text-black dark:text-zinc-50 sm:text-lg md:text-xl"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          SEESAW
        </Link>
        <nav
          className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          style={{ fontFamily: "var(--font-pretendard)" }}
        >
          <Link
            href="/"
            className="text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg"
          >
            Home
          </Link>
          <Link
            href="/ai-sound-waves"
            className="text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg"
            title="AI · Sound Works"
          >
            <span className="sm:hidden">Works</span>
            <span className="hidden sm:inline">AI · Sound Works</span>
          </Link>
          <Link
            href="/history"
            className="text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg"
          >
            History
          </Link>
        </nav>
      </div>
    </header>
  );
}
