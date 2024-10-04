"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await secureFetch(endpoints.REGISTER);

  return res;
};
