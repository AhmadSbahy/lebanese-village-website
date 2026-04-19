"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { categoryOrder, menu, type MenuCategoryId } from "@/data/menu";
import { FadeUp } from "@/components/motion/FadeUp";
import { Leaf, Flame, Utensils, Wheat, Star, Coffee } from "lucide-react";

const CATEGORY_ICONS: Record<MenuCategoryId, React.ReactElement> = {
  mezze: <Leaf size={12} strokeWidth={2} />,
  grills: <Flame size={12} strokeWidth={2} />,
  shawarma: <Utensils size={12} strokeWidth={2} />,
  manakish: <Wheat size={12} strokeWidth={2} />,
  desserts: <Star size={12} strokeWidth={2} />,
  drinks: <Coffee size={12} strokeWidth={2} />,
};

export function MenuSection() {
  const t = useTranslations("menu");
  const locale = useLocale() as "en" | "ar";
  const [active, setActive] = useState<MenuCategoryId>("mezze");
  const reduced = useReducedMotion();

  const items = menu[active];

  return (
    <section id="menu" className="relative py-14 md:py-20">
      <div className="container-px max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="eyebrow">{t("eyebrow")}</span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display-lg mt-5 text-balance">
              {t("title")}{" "}
              <em className="headline-italic not-italic">{t("titleItalic")}</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-5 text-[17px] font-medium text-[var(--ink)] text-pretty">
              {t("subtitle")}
            </p>
          </FadeUp>
        </div>

        {/* Unified panel: tabs + items */}
        <FadeUp delay={0.15}>
          <div
            className="mt-10 rounded-3xl border border-[var(--border)] overflow-hidden"
            style={{
              background: "rgba(229,211,168,0.45)",
              boxShadow: "0 4px 24px rgba(42,31,24,0.06), inset 0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            {/* Tab header strip */}
            <div
              className="flex gap-2 overflow-x-auto px-4 md:px-6 py-4 border-b border-[var(--border)] justify-center"
              style={{ scrollbarWidth: "none" }}
              role="tablist"
              aria-label="Menu categories"
            >
              {categoryOrder.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => setActive(cat)}
                  data-active={active === cat}
                  className="tab-pill shrink-0"
                >
                  {CATEGORY_ICONS[cat]}
                  {t(`categories.${cat}`)}
                </button>
              ))}
            </div>

            {/* Items grid */}
            <div className="p-4 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  {items.map((item, i) => (
                    <motion.article
                      key={item.id}
                      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: i * 0.04 },
                      }}
                      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 md:p-6
                                 hover:border-[var(--terracotta)]/40 transition-all duration-300"
                      style={{ boxShadow: "0 1px 4px rgba(42,31,24,0.04)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 24px rgba(42,31,24,0.10), 0 2px 8px rgba(198,93,58,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 1px 4px rgba(42,31,24,0.04)";
                      }}
                    >
                      {/* Name + price */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[20px] md:text-[22px] text-[var(--ink)] leading-snug flex-1">
                          {item.name[locale]}
                        </h3>
                        <div className="shrink-0 text-end">
                          <span className="tnum font-display text-[20px] md:text-[22px] text-[var(--terracotta)] leading-none">
                            {item.price.toFixed(2)}
                          </span>
                          <span className="block text-[11px] text-[var(--ink-muted)] tracking-wide mt-0.5">
                            {t("priceSuffix")}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mt-3 h-px bg-[var(--border)]" />

                      {/* Description */}
                      <p className="mt-3 text-[14px] md:text-[14.5px] font-medium text-[var(--ink-muted)] leading-relaxed text-pretty">
                        {item.desc[locale]}
                      </p>

                      {/* Tags */}
                      {(item.signature || item.vegetarian) && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                          {item.signature && (
                            <span
                              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest
                                         text-[var(--pomegranate)] rounded-xl px-3 py-1"
                              style={{ background: "rgba(142,42,42,0.09)" }}
                            >
                              <Flame size={10} strokeWidth={2} />
                              {locale === "en" ? "Signature" : "مميّز"}
                            </span>
                          )}
                          {item.vegetarian && (
                            <span
                              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest
                                         text-[var(--olive)] rounded-xl px-3 py-1"
                              style={{ background: "rgba(107,122,62,0.09)" }}
                            >
                              <Leaf size={10} strokeWidth={2} />
                              {locale === "en" ? "Vegetarian" : "نباتي"}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
