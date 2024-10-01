"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import nextLogger from "@/next-logger";
import { getServerSession } from "next-auth";
import { getLocale } from "next-intl/server";

const secureFetch = async <T>(url: string | URL, params?: RequestInit) => {
  try {
    const locale = await getLocale();
    const urlObj = new URL(url);
    urlObj.searchParams.append("lang", locale);
    const session = await getServerSession(authOptions);

    const res = await fetch(urlObj, {
      ...params,
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        ...params?.headers,
      },
    });

    // if (!res.ok) {
    //   let message = "Unable to fetch data.";

    //   try {
    //     const json = await res.json();
    //     if (json.message) {
    //       message = json.message;
    //     }
    //     if (json.title) {
    //       message = json.title;
    //     }
    //   } catch (error) {
    //     if (res.statusText) {
    //       message = res.statusText;
    //     }
    //   }
    //   throw new Error(message);
    // }
    try {
      const data = await res.json();

      return { code: res.status, data };
    } catch (error) {
      return { code: res.status };
    }
  } catch (error: any) {
    nextLogger.error(error);
    return { code: error.code, error: error.message };
  }
};
export default secureFetch;
