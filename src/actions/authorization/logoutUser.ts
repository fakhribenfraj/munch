"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const logoutUser = async () => {
  const res = await secureFetch(endpoints.LOGOUT, {
    method: "POST",
  });
  const data = await res.json();
  return JSON.stringify({ ok: res.ok, message: data.message });
};
