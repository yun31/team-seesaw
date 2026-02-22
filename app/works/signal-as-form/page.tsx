"use client";

import { useState } from "react";
import Header from "../../components/Header";
import AITabContent from "./components/AITabContent";
import OverviewTabContent from "./components/OverviewTabContent";
import { TabNav, type TabId } from "./components/TabNav";

export default function SignalAsFormPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div
      className="works-page min-h-screen bg-black font-sans"
      style={{
        backgroundImage: "url(/image/silo_bg.png)",
        backgroundSize: "120% auto",
        backgroundPosition: "right 20%",
        backgroundRepeat: "no-repeat",
      }}
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
            <span className="h-px min-w-0 flex-1 bg-white/40" aria-hidden />
          </div>

          {/* 2행: Exhibition + 제목 */}
          <p
            className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            AI Sound Universial Project
          </p>
          <p
            className="mt-1 text-lg font-medium text-white sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-pretendard)" }}
          >
            SIGNAL AS FORM
          </p>

          <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "overview" && <OverviewTabContent />}
          {activeTab === "ai" && <AITabContent />}
        </div>
      </main>
    </div>
  );
}
