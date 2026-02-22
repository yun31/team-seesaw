"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const isLightHeader = pathname === "/";
  const isWorksActive =
    pathname === "/works" || pathname.startsWith("/works/");

  return (
    <header className="flex w-full flex-col gap-1 px-4 py-4 sm:gap-2 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-16">
      {/* 위쪽 줄: 오른쪽에 EN / KR 버튼 */}
      <div className="flex justify-end gap-1 sm:gap-2">
        <button
          type="button"
          onClick={() => setLang("EN")}
          className={`whitespace-nowrap text-xs sm:text-sm ${lang === "EN" ? "font-semibold opacity-100" : "hover:opacity-80"} ${isLightHeader ? (lang === "EN" ? "text-black" : "text-black/60") : lang === "EN" ? "text-white" : "text-white/60"}`}
          style={{ fontFamily: "var(--font-pretendard)" }}
          aria-label="English"
          aria-pressed={lang === "EN"}
        >
          EN
        </button>
        <span
          className={`text-xs sm:text-sm ${isLightHeader ? "text-black/40" : "text-white/40"}`}
          aria-hidden
        >
          /
        </span>
        <button
          type="button"
          onClick={() => setLang("KR")}
          className={`whitespace-nowrap text-xs sm:text-sm ${lang === "KR" ? "font-semibold opacity-100" : "hover:opacity-80"} ${isLightHeader ? (lang === "KR" ? "text-black" : "text-black/60") : lang === "KR" ? "text-white" : "text-white/60"}`}
          style={{ fontFamily: "var(--font-pretendard)" }}
          aria-label="한국어"
          aria-pressed={lang === "KR"}
        >
          KR
        </button>
      </div>

      {/* 아래쪽 줄: 로고와 메뉴 같은 높이 */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className={`shrink-0 text-base font-semibold uppercase tracking-wide sm:text-lg md:text-xl ${isLightHeader ? "text-black" : "text-white"}`}
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
            className={`header-nav-link text-sm hover:opacity-70 sm:text-base md:text-lg pb-1 border-b-2 ${
              pathname === "/" ? "font-bold" : "border-transparent"
            } ${pathname === "/" ? (isLightHeader ? "border-black" : "border-white") : "border-transparent"} ${isLightHeader ? "text-black" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/works"
            className={`header-nav-link text-sm hover:opacity-70 sm:text-base md:text-lg pb-1 border-b-2 ${
              isWorksActive ? "header-nav-link-active font-bold" : "border-transparent"
            } ${isWorksActive ? (isLightHeader ? "border-black" : "border-white") : "border-transparent"} ${isLightHeader ? "text-black" : "text-white"}`}
            title="Works"
          >
            Works
          </Link>
          <Link
            href="/about"
            className={`header-nav-link text-sm hover:opacity-70 sm:text-base md:text-lg pb-1 border-b-2 ${
              pathname === "/about" ? "font-bold" : "border-transparent"
            } ${pathname === "/about" ? (isLightHeader ? "border-black" : "border-white") : "border-transparent"} ${isLightHeader ? "text-black" : "text-white"}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
