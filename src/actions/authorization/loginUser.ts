"use server";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const loginUser = async (email: string, password: string) => {
  const headersList = await headers();
  const { browser } = userAgent({ headers: headersList });
  const res = await secureFetch(endpoints.LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password, device_name: browser.name }),
  });
  return res;
};
