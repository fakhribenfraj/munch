"use client";
import useActionSnackbar from "@/hooks/useActionSnackbar";
import { BaseSyntheticEvent, ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

type FormProps = {
  onSubmit?: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  children: ReactNode;
  methods: UseFormReturn<any>;
  state: any;
  disableSnackbar?: boolean;
};
const ActionForm = ({
  children,
  state,
  onSubmit,
  methods,
  disableSnackbar,
}: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export default ActionForm;
