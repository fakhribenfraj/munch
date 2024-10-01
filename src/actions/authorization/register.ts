"use server";
import endpoints from "@/constants/endpoints";

export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch(endpoints.REGISTER, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
