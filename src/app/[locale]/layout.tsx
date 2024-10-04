import ClientProviders, {
  SessionProvider,
} from "@/components/common/compound/ClientProviders";
import LOCALES from "@/constants/locales";
import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Munch",
  description: "The best app to find the best restaurant for you",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["munch", "tunisia", "restaurant", "eat"],
  icons: [
    { rel: "apple-touch-icon", url: "/assets/favicon.ico" },
    { rel: "icon", url: "/assets/favicon.ico" },
  ],
};
export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const session = await getServerSession(authOptions);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <SessionProvider session={session}>
              <body className={inter.className}>
                <ClientProviders>{children}</ClientProviders>
              </body>
            </SessionProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </NextIntlClientProvider>
    </html>
  );
}
export function generateStaticParams() {
  return LOCALES.map((locale: { code: string; name: string }) => ({
    locale: locale.code,
  }));
}
