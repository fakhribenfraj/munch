import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller, useFormContext } from "react-hook-form";
type RHFTextFieldProps = TextFieldProps & {
  name: string;
  debounce?: boolean;
  hideError?: boolean;
};
const RHFTextField = ({ name, hideError, ...props }: RHFTextFieldProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
            {...(props.type == "password" && {
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            })}
            {...(props.type == "password" && {
              type: showPassword ? "text" : "password",
            })}
            error={fieldState.invalid}
            helperText={hideError ? null : fieldState.error?.message}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
