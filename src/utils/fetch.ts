"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { getLocale } from "next-intl/server";

const secureFetch = async (url: string | URL, params?: RequestInit) => {
  // const locale = await getLocale();
  // const urlObj = new URL(url);
  // urlObj.searchParams.append("lang", locale);
  const session = await getServerSession(authOptions);
  const res = await fetch(url, {
    ...params,
    headers: {
      ...(session && { Authorization: `Bearer ${session?.access_token}` }),
      Accept: "application/json, text/plain",
      ...params?.headers,
    },
  });

  const resData = await res.json();

  return { ...resData, ok: res.ok };
};
export default secureFetch;
