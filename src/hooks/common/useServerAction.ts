import { useCallback, useState, useTransition } from "react";

const useServerAction = <T>() => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<T & { ok: boolean }>();
  const startAction = useCallback(
    (
      action: Promise<(T & { ok: boolean }) | undefined>,
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
