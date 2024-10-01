import {
  Box,
  Button,
  MenuItem,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { debounce } from "lodash";

type RHFSelectProps = Omit<TextFieldProps, "multiple"> & {
  name: string;
  debounceDelay?: number;
};
const RHFSelect = ({
  name,
  placeholder,
  children,
  debounceDelay,
  defaultValue,
  ...props
}: RHFSelectProps) => {
  const { control, setValue } = useFormContext();
  const submitRef = useRef<HTMLButtonElement>(null);

  const placeholderProps = placeholder ? { displayEmpty: true } : {};
  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box>
          <TextField
            {...field}
            {...props}
            {...placeholderProps}
            onChange={(event) => {
              field.onChange(event.target.value);
              if (debounceDelay) {
                debounce(() => {
                  submitRef?.current?.click();
                }, debounceDelay)();
              }
            }}
            select
            value={field.value ?? ""}
            error={fieldState.invalid}
          >
            {placeholder && (
              <MenuItem disabled value="">
                <Typography variant="body2" color="text.disabled">
                  {placeholder}
                </Typography>
              </MenuItem>
            )}
            {children}
          </TextField>
          <Button type="submit" sx={{ display: "none" }} ref={submitRef} />
        </Box>
      )}
    />
  );
};

export default RHFSelect;
