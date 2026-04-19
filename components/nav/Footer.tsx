"use client";

import { useTranslations, useLocale } from "next-intl";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const NAV_LINKS = [
  { href: "#menu", en: "Menu", ar: "القائمة" },
  { href: "#story", en: "Our Story", ar: "قصتنا" },
  { href: "#gallery", en: "Gallery", ar: "معرض الصور" },
  { href: "#visit", en: "Visit Us", ar: "زورونا" },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as "en" | "ar";

  return (
    <footer className="relative bg-[var(--ink)] text-[var(--bg)] overflow-hidden">
      {/* Grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(198,93,58,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-px max-w-7xl mx-auto py-16 md:py-20 relative">
        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-14 border-b border-[var(--bg)]/10">

          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <a href="#top" className="inline-block">
              <span className="font-display text-[34px] md:text-[40px] leading-none">
                <em className="not-italic text-[var(--terracotta-soft)]">
                  {locale === "en" ? "Lebanese" : "الضيعة"}
                </em>{" "}
                <span>{locale === "en" ? "Village" : "اللبنانية"}</span>
              </span>
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--bg)]/55 max-w-[240px]">
              {locale === "en"
                ? "Authentic Lebanese cuisine in the heart of Muscat, Oman — since 1998."
                : "مطبخ لبناني أصيل في قلب مسقط، عُمان — منذ ١٩٩٨."}
            </p>
            <p className="mt-4 text-[13px] text-[var(--bg)]/38 leading-relaxed">
              {restaurant.address[locale]}
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--bg)]/38 mb-6 font-medium">
              {locale === "en" ? "Explore" : "تصفح"}
            </h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[var(--bg)]/65 hover:text-[var(--terracotta-soft)] transition-colors duration-200"
                  >
                    {link[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--bg)]/38 mb-6 font-medium">
              {locale === "en" ? "Contact" : "تواصل معنا"}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                  className="text-[15px] text-[var(--bg)]/65 hover:text-[var(--terracotta-soft)] transition-colors duration-200"
                >
                  {restaurant.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[var(--bg)]/65 hover:text-[var(--terracotta-soft)] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={restaurant.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[var(--bg)]/65 hover:text-[var(--terracotta-soft)] transition-colors duration-200"
                >
                  {restaurant.instagramHandle}
                </a>
              </li>
              <li className="pt-1 text-[13px] text-[var(--bg)]/40 leading-relaxed">
                {restaurant.hours[locale]}
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons + ornament + copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social icons */}
          <div className="flex items-center gap-3 text-[var(--bg)]/60">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full
                         border border-[var(--bg)]/15 hover:border-[var(--terracotta-soft)] hover:text-[var(--terracotta-soft)]
                         transition-all duration-200"
              aria-label={t("visit.phoneLabel")}
            >
              <Phone size={15} />
            </a>
            <a
              href={restaurant.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full
                         border border-[var(--bg)]/15 hover:border-[var(--terracotta-soft)] hover:text-[var(--terracotta-soft)]
                         transition-all duration-200"
              aria-label={t("visit.whatsappLabel")}
            >
              <MessageCircle size={15} />
            </a>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full
                         border border-[var(--bg)]/15 hover:border-[var(--terracotta-soft)] hover:text-[var(--terracotta-soft)]
                         transition-all duration-200"
              aria-label={t("visit.instagramLabel")}
            >
              <Instagram size={15} />
            </a>
            <a
              href={restaurant.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full
                         border border-[var(--bg)]/15 hover:border-[var(--terracotta-soft)] hover:text-[var(--terracotta-soft)]
                         transition-all duration-200"
              aria-label="Location"
            >
              <MapPin size={15} />
            </a>
          </div>

          {/* SVG ornament */}
          <svg
            viewBox="0 0 320 28"
            className="hidden md:block w-[200px] text-[var(--gold)]/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <path d="M 20 14 L 130 14" />
            <circle cx="160" cy="14" r="2.5" fill="currentColor" />
            <path d="M 140 14 C 148 7, 152 7, 160 14 C 168 21, 172 21, 180 14" />
            <path d="M 190 14 L 300 14" />
          </svg>

          {/* Copyright */}
          <div className="flex flex-col md:items-end gap-1 text-center md:text-end">
            <span className="text-[12px] text-[var(--bg)]/35">{t("footer.rights")}</span>
            <span className="text-[12px] italic font-display text-[var(--bg)]/30">
              {t("footer.madeWith")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
