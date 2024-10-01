import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { Controller, useFormContext } from "react-hook-form";
type RHFTelInputProps = MuiTelInputProps & {
  name: string;
};
const RHFTelInput = ({ name, ...props }: RHFTelInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref: fieldRef, ...fieldProps }, fieldState }) => (
        <MuiTelInput
          {...fieldProps}
          {...props}
          forceCallingCode
          inputRef={fieldRef}
          defaultCountry="TN"
          helperText={fieldState.error?.message ?? ""}
          error={fieldState.invalid}
        />
      )}
    />
  );
};

export default RHFTelInput;
