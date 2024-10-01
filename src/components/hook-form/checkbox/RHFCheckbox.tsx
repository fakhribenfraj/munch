import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
export type RHFCheckboxProps = CheckboxProps & {
  name: string;
  debounce?: boolean;
  label?: string;
};
const RHFCheckbox = ({
  name,
  debounce,
  defaultValue,
  label,
  ...props
}: RHFCheckboxProps) => {
  const { control, setValue } = useFormContext();
  const submitRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              control={<Checkbox {...field} {...props} checked={field.value} />}
              label={label ?? ""}
            />
            <Button type="submit" sx={{ display: "none" }} ref={submitRef} />
          </Box>
        );
      }}
    />
  );
};

export default RHFCheckbox;
