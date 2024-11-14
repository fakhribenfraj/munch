import { useState, useTransition } from "react";

const useServerAction = <T>() => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<T>();
  const startAction = (
    action: Promise<any | undefined>,
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
  };
  return { response, isPending, startAction };
};

export default useServerAction;
