"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { signature } from "@/data/gallery";
import { FadeUp } from "@/components/motion/FadeUp";

export function SignatureDishes() {
  const t = useTranslations("signature");
  const locale = useLocale() as "en" | "ar";

  return (
    <section
      id="signature"
      className="relative py-14 md:py-20 bg-[var(--surface)]/40 overflow-hidden"
    >
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <FadeUp>
            <span className="eyebrow">{t("eyebrow")}</span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display-lg mt-4 text-balance">
              {t("title")}{" "}
              <em className="headline-italic not-italic">{t("titleItalic")}</em>
            </h2>
          </FadeUp>
        </div>

        {/* Bento grid — all 6 dishes visible at once, no scroll hijacking */}
        <div
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6
                     auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[230px]"
        >
          {/* Dish 1 — Hummus (tall left) */}
          <DishCard
            dish={signature[0]}
            locale={locale}
            index={0}
            className="col-span-2 md:col-span-3 md:row-span-2"
          />

          {/* Dish 2 — Mixed Grill (wide top-right) */}
          <DishCard
            dish={signature[1]}
            locale={locale}
            index={1}
            className="col-span-2 md:col-span-3"
          />

          {/* Dish 3 — Kibbeh */}
          <DishCard
            dish={signature[2]}
            locale={locale}
            index={2}
            className="col-span-1 md:col-span-2"
          />

          {/* Dish 4 — Tabbouleh */}
          <DishCard
            dish={signature[3]}
            locale={locale}
            index={3}
            className="col-span-1 md:col-span-1"
          />

          {/* Dish 5 — Baklava */}
          <DishCard
            dish={signature[4]}
            locale={locale}
            index={4}
            className="col-span-1 md:col-span-3 md:row-span-2"
          />

          {/* Dish 6 — Shawarma */}
          <DishCard
            dish={signature[5]}
            locale={locale}
            index={5}
            className="col-span-1 md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}

function DishCard({
  dish,
  locale,
  index,
  className = "",
}: {
  dish: (typeof signature)[number];
  locale: "en" | "ar";
  index: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href="#menu"
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] border border-[var(--border)] block cursor-pointer ${className}`}
    >
      <Image
        src={dish.src}
        alt={dish.name[locale]}
        fill
        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 50vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />

      {/* Bottom gradient — always slightly present, stronger on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,31,24,0) 30%, rgba(42,31,24,0.55) 75%, rgba(42,31,24,0.88) 100%)",
        }}
      />

      {/* Warm wash that appears on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(198,93,58,0.3), transparent 60%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Number badge */}
      <div className="absolute top-5 start-5 text-[var(--bg)]/80 text-[10px] tracking-[0.2em] uppercase">
        N° {String(index + 1).padStart(2, "0")}
      </div>

      {/* Name + caption */}
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-7 text-[var(--bg)]">
        <h3 className="font-display text-[24px] md:text-[30px] lg:text-[34px] leading-[1.05] text-[var(--bg)]">
          {dish.name[locale]}
        </h3>
        <p className="mt-1.5 text-[12px] md:text-[13px] tracking-wide text-[var(--bg)]/75">
          {dish.caption[locale]}
        </p>
      </div>

      {/* Subtle arrow on hover (top-right) */}
      <div
        className="absolute top-5 end-5 h-9 w-9 rounded-full bg-[var(--bg)]/10 border border-[var(--bg)]/25
                      flex items-center justify-center text-[var(--bg)]
                      translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-400 backdrop-blur-sm"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d={locale === "ar" ? "M 9 3 L 3 3 L 3 9 M 3 3 L 11 11" : "M 5 3 L 11 3 L 11 9 M 11 3 L 3 11"}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}
