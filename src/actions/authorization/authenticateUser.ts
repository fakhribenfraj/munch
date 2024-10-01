"use server";
import endpoints from "@/constants/endpoints";

export const authenticateUser = async ({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) => {
  const res = await fetch(endpoints.SIGNIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
