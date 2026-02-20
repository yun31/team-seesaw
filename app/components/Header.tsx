"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="flex w-full flex-col gap-1 px-4 py-4 sm:gap-2 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-16">
      {/* 위쪽 줄: 오른쪽에 KR / EN 버튼 */}
      <div className="flex justify-end gap-1 sm:gap-2">
        <button
          type="button"
          onClick={() => setLang("KR")}
          className={`whitespace-nowrap text-xs sm:text-sm ${lang === "KR" ? "font-semibold text-black dark:text-zinc-50 opacity-100" : "text-black/60 dark:text-zinc-400 hover:opacity-80"}`}
          style={{ fontFamily: "var(--font-pretendard)" }}
          aria-label="한국어"
          aria-pressed={lang === "KR"}
        >
          KR
        </button>
        <span
          className="text-xs text-black/40 dark:text-zinc-500 sm:text-sm"
          aria-hidden
        >
          /
        </span>
        <button
          type="button"
          onClick={() => setLang("EN")}
          className={`whitespace-nowrap text-xs sm:text-sm ${lang === "EN" ? "font-semibold text-black dark:text-zinc-50 opacity-100" : "text-black/60 dark:text-zinc-400 hover:opacity-80"}`}
          style={{ fontFamily: "var(--font-pretendard)" }}
          aria-label="English"
          aria-pressed={lang === "EN"}
        >
          EN
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
            className={`header-nav-link text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg pb-1 border-b-2 ${
              pathname === "/"
                ? "header-nav-link-active font-bold border-black dark:border-white"
                : "border-transparent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/works"
            className={`header-nav-link text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg pb-1 border-b ${
              pathname === "/works"
                ? "header-nav-link-active font-bold border-black dark:border-white"
                : "border-transparent"
            }`}
            title="AI · Sound Works"
          >
            <span className="sm:hidden">Works</span>
            <span className="hidden sm:inline">AI · Sound Works</span>
          </Link>
          <Link
            href="/history"
            className={`header-nav-link text-sm text-black hover:opacity-70 dark:text-zinc-50 sm:text-base md:text-lg pb-1 border-b ${
              pathname === "/history"
                ? "header-nav-link-active font-bold border-black dark:border-white"
                : "border-transparent"
            }`}
          >
            History
          </Link>
        </nav>
      </div>
    </header>
  );
}
