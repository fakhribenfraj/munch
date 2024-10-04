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
  console.log({
    email,
    password,
  });

  const res = await fetch(endpoints.SIGNIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return { data: await res.json() };
};
