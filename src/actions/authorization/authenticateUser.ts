"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const authenticateUser = async ({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) => {
  const res = await secureFetch(endpoints.SIGNIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return res;
};
