import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type RHFTextFieldProps = TextFieldProps & {
  name: string;
  debounce?: boolean;
  hideError?: boolean;
};
const RHFTextField = ({ name, hideError, ...props }: RHFTextFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...field}
            value={field.value ?? ""}
            onChange={(event) => {
              const typedValue =
                props.type == "number"
                  ? parseFloat(event.target.value)
                  : event.target.value;
              field.onChange(typedValue);
            }}
            {...props}
            error={fieldState.invalid}
            helperText={hideError ? null : fieldState.error?.message}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
