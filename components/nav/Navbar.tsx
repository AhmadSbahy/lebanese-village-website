"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { LangToggle } from "./LangToggle";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#menu", key: "menu" },
  { href: "#story", key: "story" },
  { href: "#gallery", key: "gallery" },
  { href: "#visit", key: "visit" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]/60"
            : "bg-transparent"
        )}
      >
        <div className="container-px max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            className="font-display text-[22px] md:text-[24px] leading-none text-[var(--ink)] tracking-tight"
          >
            <span className="italic headline-italic">Lebanese</span>{" "}
            <span className="font-medium">Village</span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="relative text-[14px] font-medium text-[var(--ink)]/75 hover:text-[var(--ink)]
                           transition-colors group"
              >
                {t(l.key)}
                <span className="absolute -bottom-1 start-0 h-px w-0 bg-[var(--terracotta)]
                                 group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LangToggle />
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="hidden md:inline-flex items-center gap-2 h-10 px-4 rounded-full
                         bg-[var(--ink)] text-[var(--bg)] text-[13px] font-medium
                         transition-all duration-300 hover:bg-[var(--terracotta)]"
            >
              <Phone size={14} strokeWidth={2} />
              {t("callNow")}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full
                         border border-[var(--ink)]/20 text-[var(--ink)]"
              aria-label="Open menu"
            >
              <MenuIcon size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-all duration-500",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[var(--ink)]/60 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute top-0 end-0 h-full w-[min(360px,86vw)] bg-[var(--bg)] shadow-2xl",
            "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open
              ? "translate-x-0"
              : locale === "ar"
                ? "-translate-x-full"
                : "translate-x-full"
          )}
        >
          <div className="grain-overlay" aria-hidden="true" />
          <div className="relative flex items-center justify-between p-6">
            <span className="font-display text-xl">
              <span className="italic headline-italic">Lebanese</span> Village
            </span>
            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full
                         border border-[var(--ink)]/20"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="relative flex flex-col px-6 gap-1 mt-6">
            {LINKS.map((l, i) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[40px] leading-tight py-3 text-[var(--ink)]
                           hover:text-[var(--terracotta)] transition-colors"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 600ms ${120 + i * 70}ms, transform 600ms ${120 + i * 70}ms`,
                }}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="relative mt-auto absolute bottom-0 inset-x-0 p-6 flex flex-col gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="btn-primary w-full"
            >
              <Phone size={16} />
              {t("callNow")}
            </a>
            <a
              href={restaurant.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full"
            >
              {t("directions")}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
