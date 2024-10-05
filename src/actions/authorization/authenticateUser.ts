"use server";
import endpoints from "@/constants/endpoints";

export const authenticateUser = async ({
  username,
  password,
}: {
  username?: string;
  password?: string;
}) => {
  const res = await fetch(endpoints.SIGNIN, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  return { data: await res.json() };
};
