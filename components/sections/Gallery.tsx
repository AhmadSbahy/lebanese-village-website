"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Instagram, ArrowUpRight } from "lucide-react";
import { gallery } from "@/data/gallery";
import { restaurant } from "@/data/restaurant";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/cn";

export function Gallery() {
  const t = useTranslations("gallery");
  const locale = useLocale() as "en" | "ar";
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight")
        setOpenIdx((i) => (i === null ? null : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) =>
          i === null ? null : (i - 1 + gallery.length) % gallery.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <section id="gallery" className="relative py-14 md:py-20">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <FadeUp>
              <span className="eyebrow">{t("eyebrow")}</span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="display-lg mt-4 text-balance max-w-xl">
                {t("title")}{" "}
                <em className="headline-italic not-italic">{t("titleItalic")}</em>
              </h2>
            </FadeUp>
          </div>
        </div>

        <div
          ref={listRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[220px]"
        >
          {gallery.map((img, i) => (
            <motion.button
              key={i}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenIdx(i)}
              className={cn(
                "relative overflow-hidden rounded-[20px] border border-[var(--border)] group",
                img.span === "tall" && "row-span-2",
                img.span === "wide" && "col-span-2"
              )}
              aria-label={`Open image: ${img.alt[locale]}`}
            >
              <Image
                src={img.src}
                alt={img.alt[locale]}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(42,31,24,0.6) 100%)",
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Instagram CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
            <p className="text-[15px] font-medium text-[var(--ink-muted)] text-center sm:text-start">
              {locale === "en"
                ? "Follow our daily flavours on Instagram"
                : "تابعنا على إنستغرام لنكهات يومية"}
            </p>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 shrink-0"
            >
              <Instagram size={14} />
              {restaurant.instagramHandle}
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--ink)]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setOpenIdx(null)}
          >
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-6 end-6 h-11 w-11 rounded-full bg-[var(--bg)]/10 border border-[var(--bg)]/20 text-[var(--bg)] flex items-center justify-center hover:bg-[var(--bg)]/20 transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.div
              key={openIdx}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl aspect-[4/3] rounded-[24px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[openIdx].src}
                alt={gallery[openIdx].alt[locale]}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
