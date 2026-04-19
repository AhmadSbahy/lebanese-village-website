"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/motion/FadeUp";

export function Story() {
  const t = useTranslations("story");
  const locale = useLocale() as "en" | "ar";
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yText = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-14 md:py-20 container-px max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5 relative">
          <motion.div
            style={reduced ? undefined : { y }}
            className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden
                       border border-[var(--border)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1400&q=80"
              alt="Lebanese kibbeh and mezze"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(42,31,24,0.4) 100%)",
              }}
            />
          </motion.div>

          {/* Decorative secondary image */}
          <motion.div
            style={reduced ? undefined : { y: yText }}
            className={`hidden md:block absolute ${
              locale === "ar" ? "-left-6" : "-right-6"
            } -bottom-10 w-44 aspect-square rounded-[24px] overflow-hidden border border-[var(--border)] shadow-xl`}
          >
            <Image
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80"
              alt="Fresh pita bread"
              fill
              sizes="200px"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="md:col-span-7 md:ps-8">
          <FadeUp>
            <span className="eyebrow">{t("eyebrow")}</span>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="display-lg mt-5 text-balance">
              {t("title")}{" "}
              <em className="headline-italic not-italic md:inline">
                {t("titleItalic")}
              </em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-8 text-[17px] font-medium leading-relaxed text-[var(--ink-muted)] text-pretty max-w-xl">
              {t("paragraph1")}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-5 text-[17px] font-medium leading-relaxed text-[var(--ink-muted)] text-pretty max-w-xl">
              {t("paragraph2")}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <figure className="mt-10 ps-6 border-s-2 border-[var(--terracotta)]">
              <blockquote className="font-display italic text-[22px] md:text-[26px] text-[var(--ink)] leading-snug">
                {t("quote")}
              </blockquote>
              <figcaption className="mt-3 text-[13px] tracking-wide uppercase text-[var(--ink-muted)]">
                {t("quoteAuthor")}
              </figcaption>
            </figure>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
