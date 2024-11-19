import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import LOCALES from "./constants/locales";

const intlMiddleware = createMiddleware({
  locales: LOCALES.map((locate) => locate.code),
  defaultLocale: LOCALES[0].code,
  localePrefix: "never",
});

export default function middleware(req: NextRequest) {
  const request = new NextRequest(req);
  request.headers.set("x-pathname", req.nextUrl.pathname);
  return intlMiddleware(req);
}
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
