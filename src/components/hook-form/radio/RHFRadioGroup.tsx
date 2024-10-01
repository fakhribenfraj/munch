import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
export type RHFRadioGroupProps = RadioGroupProps & {
  name: string;
  debounce?: boolean;
  label?: string;
  variant?: "filled" | "outlined" | "standard";
};
const RHFRadioGroup = ({
  name,
  children,
  debounce,
  defaultValue,
  label,
  variant,
  ...props
}: RHFRadioGroupProps) => {
  const { control, setValue } = useFormContext();
  const submitRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box sx={{ width: "100%" }}>
          <FormControl
            variant={variant ?? "outlined"}
            fullWidth
            error={fieldState.invalid}
          >
            {label && (
              <FormLabel id="demo-controlled-radio-buttons-group">
                {label}
              </FormLabel>
            )}
            <RadioGroup
              {...field}
              {...props}
              row
              onChange={(event) => {
                field.onChange(event.target.value);
                if (debounce) {
                  submitRef?.current?.click();
                }
              }}
              radioGroup=""
              value={field.value ?? ""}
              sx={{
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              {children}
            </RadioGroup>
          </FormControl>
          <Button type="submit" sx={{ display: "none" }} ref={submitRef} />
        </Box>
      )}
    />
  );
};

export default RHFRadioGroup;
