"use client";
import { BaseSyntheticEvent, ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

type FormProps = {
  onSubmit?: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  children: ReactNode;
  methods: UseFormReturn<any>;
};
const ActionForm = ({ children, onSubmit, methods }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export default ActionForm;
