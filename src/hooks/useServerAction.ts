import { ActionResponse } from "@/types/api";
import { useState, useTransition } from "react";

const useServerAction = (action: () => Promise<ActionResponse<any>>) => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ActionResponse<any>>();
  const startAction = (onSuccess?: VoidFunction) => {
    startTransition(async () => {
      const res = await action();
      setResponse(res);
      if (res.code == 200 && onSuccess) {
        onSuccess();
      }
    });
  };
  return { response, isPending, startAction };
};

export default useServerAction;
