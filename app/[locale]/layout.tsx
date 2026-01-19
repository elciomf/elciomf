import "../globals.css";
import {
  Fira_Code,
  Geist_Mono,
  Inter,
} from "next/font/google";
import type { Metadata } from "next";
import { I18nProviderClient } from "@/locales/client";
import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Élcio M. Fernandes | Software Engineer",
    template: "%s | Élcio M. Fernandes",
  },
  description:
    "Software Engineer focused on building robust Full-stack digital experiences with Next.js, TypeScript, and Node.js.",
  keywords: [
    "Software Engineer",
    "Full-stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Élcio Fernandes",
  ],
  authors: [{ name: "Élcio M. Fernandes" }],
  creator: "Élcio M. Fernandes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elcio.dev",
    title: "Élcio M. Fernandes | Software Engineer",
    description:
      "Crafting scalable, high-performance digital solutions.",
    siteName: "Élcio M. Fernandes Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Élcio M. Fernandes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Élcio M. Fernandes | Software Engineer",
    description:
      "Full-stack Developer focused on robust architectures.",
    images: ["/og-image.jpg"],
  },
};

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <main className="container mx-auto ">
              {children}
            </main>
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
