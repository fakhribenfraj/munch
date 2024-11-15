import { routing } from "./routing";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import LOCALES from "../src/constants/locales";

// Can be imported from a shared config

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!LOCALES.map((locale) => locale.code).includes(locale as any)) notFound();
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
