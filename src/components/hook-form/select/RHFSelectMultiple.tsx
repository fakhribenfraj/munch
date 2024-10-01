import {
  MenuItem,
  SelectVariants,
  TextField,
  TextFieldProps,
  Typography
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type RHFSelectMultipleProps = TextFieldProps & {
  name: string;
  variant?: SelectVariants;
};
const RHFSelectMultiple = ({
  name,
  placeholder,
  children,
  ...props
}: RHFSelectMultipleProps) => {
  const { control } = useFormContext();
  const placeholderProps = placeholder ? { displayEmpty: true } : {};
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          {...placeholderProps}
          SelectProps={{ multiple: true }}
          value={
            field.value?.filter((val: string) => !!val).length > 0
              ? field.value?.filter((val: string) => !!val)
              : [""]
          }
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
      )}
    />
  );
};

export default RHFSelectMultiple;
