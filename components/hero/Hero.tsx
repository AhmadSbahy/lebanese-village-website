"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { restaurant } from "@/data/restaurant";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as "en" | "ar";
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Rich layered background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(145deg, #f5e8cc 0%, #eedfc4 40%, #e6d2a8 100%)",
        }}
        aria-hidden
      />

      {/* Vibrant warm glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 15% 65%, rgba(198,93,58,0.32) 0%, rgba(184,134,58,0.18) 50%, transparent 72%)",
        }}
        aria-hidden
      />

      {/* Pomegranate accent top-right */}
      <div
        className="absolute top-0 end-0 w-[45%] h-[50%] z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(142,42,42,0.16) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Subtle gold dot grid — bottom-left decoration */}
      <div
        className="absolute bottom-0 start-0 w-[280px] h-[280px] z-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 1px, transparent 1px) 0 0 / 14px 14px",
          maskImage: "radial-gradient(ellipse at 0% 100%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 0% 100%, black 30%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="container-px max-w-7xl mx-auto relative z-10 w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Left: text */}
          <div>
            <motion.span
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow mb-6"
              style={{ fontWeight: 700, color: "var(--ink)" }}
            >
              {t("eyebrow")}
            </motion.span>

            <h1 className="display-xl text-balance text-[var(--ink)] mt-6">
              <motion.span
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="block overflow-hidden"
              >
                <span className="block">{t("titleLine1")}</span>
              </motion.span>
              <motion.span
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="block overflow-hidden"
              >
                <span className="block italic headline-italic">{t("titleItalic")}</span>
              </motion.span>
              <motion.span
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                className="block overflow-hidden"
              >
                <span className="block">{t("titleLine2")}</span>
              </motion.span>
            </h1>

            <motion.p
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-6 max-w-xl text-[17px] md:text-[18px] font-medium leading-relaxed text-[var(--ink)] text-pretty"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <MagneticButton href="#menu" className="btn-primary">
                {t("cta1")}
                <ArrowRight size={16} className={locale === "ar" ? "rotate-180" : ""} />
              </MagneticButton>
              <MagneticButton href={restaurant.mapsLink} className="btn-ghost">
                <MapPin size={16} />
                {t("cta2")}
              </MagneticButton>
            </motion.div>

          </div>

          {/* Right: food photo */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: locale === "ar" ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div
              className="relative h-[520px] lg:h-[600px] rounded-[32px] overflow-hidden border border-[var(--border)]"
              style={{ boxShadow: "0 32px 80px rgba(42,31,24,0.22), 0 8px 24px rgba(42,31,24,0.12)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80"
                alt="Lebanese restaurant food spread"
                fill
                className="object-cover object-center"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(42,31,24,0.45) 100%)",
                }}
              />
              {/* Image inner glow */}
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
                }}
              />
            </div>

            {/* Gold accent dot pattern */}
            <div
              className="absolute -top-6 -end-6 w-32 h-32 opacity-35 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--gold) 1.5px, transparent 1.5px) 0 0 / 12px 12px",
              }}
              aria-hidden
            />

          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 start-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--ink-muted)]"
        aria-hidden
      >
        <span>{t("scrollHint")}</span>
        <span className="block w-px h-10 bg-[var(--ink-muted)]/50 animate-drift" />
      </motion.div>
    </section>
  );
}
