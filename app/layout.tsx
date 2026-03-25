import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajay's Portfolio | Full Stack Developer",
  description:
    "Modern portfolio showcasing projects, skills, and experience. Full stack developer specializing in React, Next.js, and TypeScript.",
  keywords:
    "portfolio, developer, full stack, React, Next.js, TypeScript, web development",
  openGraph: {
    title: "Ajay's Portfolio | Full Stack Developer",
    description:
      "Modern portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0e27",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
