"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashDone, setSplashDone] = useState(false);

  if (!splashDone) {
    return <SplashScreen onComplete={() => setSplashDone(true)} />;
  }

  return <>{children}</>;
}
