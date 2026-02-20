"use client";

export type TabId = "ai" | "sound" | "exhibition";

const TABS: { id: TabId; label: string }[] = [
  { id: "ai", label: "AI" },
  { id: "sound", label: "Sound" },
  { id: "exhibition", label: "Exhibition" },
];

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

export function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2 sm:mt-10"
      style={{ fontFamily: "var(--font-pretendard)" }}
      aria-label="AI, Sound, Exhibition tabs"
    >
      {TABS.map((tab, i) => (
        <span key={tab.id} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`cursor-pointer px-3 py-2 text-sm sm:px-4 sm:text-base ${
              activeTab === tab.id
                ? "font-bold text-[#7DFF86]"
                : "text-white hover:opacity-80"
            }`}
          >
            {tab.label}
          </button>
          {i < TABS.length - 1 && (
            <span
              className={`text-sm sm:text-base ${
                activeTab === tab.id ? "text-[#7DFF86]" : "text-white/60"
              }`}
              aria-hidden
            >
              |
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
