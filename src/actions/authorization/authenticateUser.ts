"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const authenticateUser = async ({
  username,
  password,
}: {
  username?: string;
  password?: string;
}) => {
  const res = await secureFetch(endpoints.LOGIN, {
    method: "POST",
    body: JSON.stringify({ email: username, password, device_name: "web" }),
  });

  return await res.json();
};
