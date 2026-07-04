import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Yengantiwar | Software Engineering Student",
  description:
    "Premium portfolio for Rohit Yengantiwar, a software engineering student focused on backend systems, full-stack applications, and AI-powered products.",
  keywords: [
    "Rohit Yengantiwar",
    "software engineer",
    "backend developer",
    "full stack",
    "portfolio",
    "Django",
    "Next.js",
  ],
  openGraph: {
    title: "Rohit Yengantiwar | Software Engineering Student",
    description:
      "Portfolio showcasing backend engineering, scalable systems, and product-minded software development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white transition-colors duration-500 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
