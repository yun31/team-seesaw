/**
 * All image paths used across the site (for splash preload).
 * Must match paths used in pages (under /image/ from public).
 */
export const PRELOAD_IMAGE_URLS = [
  "/image/main.png",
  "/image/main_dark.png",
  "/image/vr.png",
  "/image/thum_safe.png",
  "/image/thum_vr.png",
  "/image/thum_silo.png",
  "/image/about/park.png",
  "/image/about/choi.png",
  "/image/about/kim.png",
  "/image/about/seo.png",
  "/image/safe_ai_1.png",
  "/image/safe_ai_2.png",
  "/image/safe_ai_4.png",
  "/image/safe_ai_5.png",
  "/image/silo_ai_1.png",
  "/image/silo_ai_2.png",
  "/image/silo_ai_3.png",
  "/image/silo_ov_1.png",
  "/image/silo_ov_2.png",
  "/image/safe_ex_1.png",
  "/image/safe_ex_2.png",
  "/image/safe_ex_3.png",
  "/image/safe_ex_4.png",
] as const;

export function preloadImages(): void {
  PRELOAD_IMAGE_URLS.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
