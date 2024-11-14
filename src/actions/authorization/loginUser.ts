"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const loginUser = async (email: string, password: string) => {
  const res = await secureFetch(endpoints.LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password, device_name: "mobile" }),
  });

  return res;
};
