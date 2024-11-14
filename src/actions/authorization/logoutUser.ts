"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const logoutUser = async () => {
  const res = await secureFetch(endpoints.LOGOUT, {
    method: "POST",
  });
  return res;
};
