import {
  Autocomplete,
  AutocompleteProps,
  TextField
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type RHFAutocompleteProps = Omit<
  AutocompleteProps<string, false, false, false, "div">,
  "renderInput"
> & {
  name: string;
  label?: string;
};
const RHFAutocomplete = ({ name, label, ...props }: RHFAutocompleteProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Autocomplete
            {...field}
            {...props}
            onChange={(event: any, newValue) => {
              field.onChange(newValue);
            }}
            value={field.value?? ''}
            disablePortal
            renderInput={(params) => (
              <TextField
                {...params}
                name={name}
                label={label}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />
        );
      }}
    />
  );
};

export default RHFAutocomplete;
