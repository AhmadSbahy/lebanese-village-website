"use client";

import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, MessageCircle, Instagram, Clock, ArrowUpRight } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { FadeUp } from "@/components/motion/FadeUp";

export function Visit() {
  const t = useTranslations("visit");
  const locale = useLocale() as "en" | "ar";

  return (
    <section id="visit" className="relative py-14 md:py-20 bg-[var(--surface)]/40">
      <div className="container-px max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
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
              <dl className="mt-10 space-y-7">
                <InfoRow
                  icon={<MapPin size={18} />}
                  label={t("addressLabel")}
                  value={restaurant.address[locale]}
                />
                <InfoRow
                  icon={<Clock size={18} />}
                  label={t("hoursLabel")}
                  value={restaurant.hours[locale]}
                />
                <InfoRow
                  icon={<Phone size={18} />}
                  label={t("phoneLabel")}
                  value={restaurant.phoneDisplay}
                  href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                />
                <InfoRow
                  icon={<MessageCircle size={18} />}
                  label={t("whatsappLabel")}
                  value={restaurant.whatsapp}
                  href={restaurant.whatsappLink}
                  external
                />
                <InfoRow
                  icon={<Instagram size={18} />}
                  label={t("instagramLabel")}
                  value={restaurant.instagramHandle}
                  href={restaurant.instagram}
                  external
                />
              </dl>
            </FadeUp>

            <FadeUp delay={0.15}>
              <a
                href={restaurant.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 inline-flex"
              >
                {t("directionsCta")}
                <ArrowUpRight size={16} />
              </a>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-[var(--border)] shadow-lg">
              <iframe
                src={restaurant.mapsEmbed}
                title="Lebanese Village — Muscat location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                allowFullScreen
                style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--ink)]/5 rounded-[32px]" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="mt-0.5 h-9 w-9 flex-shrink-0 rounded-full border border-[var(--border)] inline-flex items-center justify-center text-[var(--terracotta)] group-hover:bg-[var(--terracotta)] group-hover:text-[var(--bg)] group-hover:border-[var(--terracotta)] transition-colors duration-300">
        {icon}
      </span>
      <div className="flex flex-col">
        <dt className="text-[11px] uppercase tracking-widest text-[var(--ink-muted)]">
          {label}
        </dt>
        <dd className="text-[16px] md:text-[17px] text-[var(--ink)] mt-0.5">
          {value}
        </dd>
      </div>
    </div>
  );

  if (!href) return <div>{content}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
