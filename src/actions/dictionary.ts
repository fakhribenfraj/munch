"use server";
import { getTranslations } from "next-intl/server";

const getDictionary = async (dictionary: string, key: string) => {
  const translation = await getTranslations(dictionary);
  return translation(key);
};

export { getDictionary };
