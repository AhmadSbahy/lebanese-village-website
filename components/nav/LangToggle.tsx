"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export function LangToggle() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = locale === "en" ? "ar" : "en";

  function switchLocale() {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "ar") segments[0] = next;
    else segments.unshift(next);
    startTransition(() => router.push("/" + segments.join("/")));
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="relative inline-flex items-center justify-center h-10 px-4 rounded-full
                 border border-[var(--ink)]/20 text-[13px] font-medium text-[var(--ink)]
                 transition-all duration-300
                 hover:border-[var(--ink)]/50 hover:bg-[var(--ink)]/5
                 disabled:opacity-60"
      aria-label={`Switch language to ${t("language")}`}
    >
      <span className="tracking-wide">{t("language")}</span>
    </button>
  );
}
