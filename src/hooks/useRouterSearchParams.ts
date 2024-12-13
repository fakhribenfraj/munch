import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useRouterSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const setParam = (key: string, value: string) => {
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`);
  };
  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  return { setParam, getParam };
};

export default useRouterSearchParams;
