"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import nextLogger from "@/next-logger";
import { getServerSession } from "next-auth";
import { getLocale } from "next-intl/server";

const secureFetch = async (url: string | URL, params?: RequestInit) => {
  const locale = await getLocale();
  const urlObj = new URL(url);
  urlObj.searchParams.append("lang", locale);
  const session = await getServerSession(authOptions);

  return fetch(urlObj, {
    ...params,
    headers: {
      ...(session && { Authorization: `Bearer ${session?.user.token}` }),
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
      ...params?.headers,
    },
  });
};
export default secureFetch;
