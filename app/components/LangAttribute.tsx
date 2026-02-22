"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LangAttribute() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "KR" ? "ko" : "en";
  }, [lang]);

  return null;
}
