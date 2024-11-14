"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const forgotPassword = async (email: string) => {
  const res = await secureFetch(`${endpoints.PASSWORD}/forgot`, {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  });


  return res;
};
