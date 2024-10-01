import {
  Autocomplete,
  AutocompleteProps,
  Chip,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
export type AutoCompleteOption = { name: string; value: string };
type RHFAutocompleteMultipleProps = Omit<
  AutocompleteProps<AutoCompleteOption | string, true, false, false, "div">,
  "renderInput"
> & {
  name: string;
  label?: string;
};
const RHFAutocompleteMultiple = ({
  name,
  label,
  options,
  ...props
}: RHFAutocompleteMultipleProps) => {
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
            options={options.filter((option) =>
              typeof option == "string"
                ? !field.value?.includes(option)
                : !field.value?.some(
                    (optionObj: AutoCompleteOption) =>
                      optionObj.value == option.value
                  )
            )}
            multiple
            isOptionEqualToValue={(option, value) =>
              typeof option == "string" || typeof value == "string"
                ? option == value
                : option.value == value.value
            }
            filterSelectedOptions
            onChange={(event: any, newValue) => {
              field.onChange(newValue);
            }}
            getOptionLabel={(option) =>
              typeof option == "string" ? option : option.name
            }
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                return (
                  <Chip
                    variant="outlined"
                    label={typeof option == "string" ? option : option.name}
                    {...getTagProps({ index })}
                    key={typeof option == "string" ? option : option.value}
                  />
                );
              })
            }
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

export default RHFAutocompleteMultiple;
