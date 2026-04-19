import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Fraunces, DM_Sans, Noto_Naskh_Arabic, Tajawal } from "next/font/google";
import { locales, getDir, type Locale } from "@/lib/i18n";
import { SmoothScrollProvider } from "@/lib/lenis";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const displayAr = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-display-ar",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyAr = Tajawal({
  subsets: ["arabic"],
  variable: "--font-body-ar",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lebanese Village · Muscat",
  description:
    "Authentic Lebanese mezze, charcoal grills, and family recipes in the heart of Muscat, Oman.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = getDir(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${display.variable} ${body.variable} ${displayAr.variable} ${bodyAr.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
