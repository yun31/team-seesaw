"use client";

import type { Lang } from "./LanguageContext";
import { useLanguage } from "./LanguageContext";

import ko from "@/locales/ko.json";
import en from "@/locales/en.json";

const messages: Record<Lang, object> = { KR: ko, EN: en };

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}

export function getTranslation(lang: Lang, path: string): unknown {
  return getByPath(messages[lang], path);
}

export function getString(lang: Lang, path: string): string {
  const value = getByPath(messages[lang], path);
  return typeof value === "string" ? value : "";
}

export function useTranslations() {
  const { lang } = useLanguage();
  const t = (path: string) => getTranslation(lang, path);
  const ts = (path: string) => getString(lang, path);
  return { t, ts, lang };
}
