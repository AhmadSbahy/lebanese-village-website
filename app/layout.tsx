import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lebanese Village · Muscat",
  description:
    "Authentic Lebanese mezze, charcoal grills, and family recipes in the heart of Muscat, Oman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
