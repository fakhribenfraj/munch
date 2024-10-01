import { useState, useTransition } from "react";
import { UseFormReturn } from "react-hook-form";

const useRHFActionForm = (
  methods: UseFormReturn<any>,
  action: (data: any) => Promise<any>
) => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<any>();
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const res = await action(data);
      setResponse(res);
    });
  });
  return { response, isPending, onSubmit };
};

export default useRHFActionForm;
