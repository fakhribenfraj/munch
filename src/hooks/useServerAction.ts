import { ActionResponse } from "@/types/api";
import { useCallback, useState, useTransition } from "react";

const useServerAction = <T>() => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ActionResponse<T>>();
  const startAction = useCallback(
    (
      action: Promise<ActionResponse<T> | undefined>,
      onSuccess?: VoidFunction
    ) => {
      startTransition(async () => {
        const res = await action;
        if (res) {
          setResponse(res);
          if (res.ok && onSuccess) {
            onSuccess();
          }
        }
      });
    },
    []
  );
  return { response, isPending, startAction };
};

export default useServerAction;
