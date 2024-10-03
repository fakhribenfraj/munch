import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import LOCALES from "./constants/locales";
import routes from "./constants/routes";

const intlMiddleware = createMiddleware({
  locales: LOCALES.map((locate) => locate.code),
  defaultLocale: LOCALES[0].code,
  localePrefix: "never",
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
