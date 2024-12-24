import ClientProviders, {
  SessionProvider,
} from "@/components/common/ClientProviders";
import LOCALES from "@/constants/locales";
import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import "../globals.css";
import NavigationProvider from "@/contexts/navigation-context";
import { ReactQueryClientProvider } from "@/components/common/ReactQueryClientProvider";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const session = await getServerSession(authOptions);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppRouterCacheProvider>
        <ThemeProvider>
          <SessionProvider session={session}>
            <NavigationProvider>
              <ReactQueryClientProvider>
                <ClientProviders>
                  <html lang={locale}>
                    <body className={inter.className}>{children}</body>
                  </html>
                </ClientProviders>
              </ReactQueryClientProvider>
            </NavigationProvider>
          </SessionProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}
export function generateStaticParams() {
  return LOCALES.map((locale: { code: string; name: string }) => ({
    locale: locale.code,
  }));
}
