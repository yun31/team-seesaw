"use client";

import { useState } from "react";
import Header from "../../components/Header";
import AITabContent from "./components/AITabContent";
import ExhibitionTabContent from "./components/ExhibitionTabContent";
import SoundTabContent from "./components/SoundTabContent";
import { TabNav, type TabId } from "./components/TabNav";

export default function SafeRangeSystemPage() {
  const [activeTab, setActiveTab] = useState<TabId>("ai");

  return (
    <div
      className={`works-page min-h-screen font-sans ${activeTab === "sound" ? "bg-black bg-cover bg-top bg-no-repeat" : "bg-black"}`}
      style={
        activeTab === "sound"
          ? { backgroundImage: "url(/image/safe_sound_bg.png)" }
          : undefined
      }
    >
      <Header />

      <main className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* 1행: 연도 + 가로선 */}
          <div className="flex items-center gap-4">
            <span
              className="shrink-0 text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-pretendard)" }}
            >
              2025
            </span>
            <span className="h-px flex-1 min-w-0 bg-white/40" aria-hidden />
          </div>

          {/* 2행: Exhibition + 제목 */}
          <p
            className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            AI Exhibition
          </p>
          <p
            className="mt-1 text-lg font-medium text-white sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            SAFE RANGE SYSTEM
          </p>

          <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "ai" && <AITabContent />}
          {activeTab === "sound" && <SoundTabContent />}
          {activeTab === "exhibition" && <ExhibitionTabContent />}
        </div>
      </main>
    </div>
  );
}
