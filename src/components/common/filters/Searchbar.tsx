"use client";
import RHFSelect from "@/components/hook-form/select/RHFSelect";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { Box, InputAdornment, MenuItem, Stack } from "@mui/material";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type SearchInput =
  | { label?: string; name: string; placeholder?: string } & (
      | { type: "text"; icon?: ReactNode }
      | {
          type: "select";
          options: {
            value: string | number | null | boolean;
            label: string;
          }[];
        }
    );
type SearchbarProps = {
  inputs: SearchInput[];
  searchHandler: (params: any) => void;
};
const Searchbar = ({ inputs, searchHandler }: SearchbarProps) => {
  const methods = useForm({
    mode: "onChange",
  });
  const { handleSubmit } = methods;
  const searchParser = () => {
    searchHandler(
      Object.fromEntries(
        Object.entries(methods.getValues()).map(([key, value]) => {
          let parsedValue = value;
          if (value == "null" || value == "true" || value == "false") {
            parsedValue = JSON.parse(value);
          }
          return [key, parsedValue];
        })
      )
    );
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(searchParser)}>
        <Stack direction="row" flexWrap="wrap">
          {inputs.map((input) => {
            return input.type == "select" ? (
              <Box
                key={input.name}
                sx={{
                  padding: 1,
                  flex: 1,
                  minWidth: "20%",
                }}
              >
                <RHFSelect
                  variant="outlined"
                  name={input.name}
                  debounceDelay={10}
                  fullWidth
                  defaultValue={input.options[0]?.value ?? "null"}
                >
                  {input.options.map((option, index) => (
                    <MenuItem
                      key={`${option.value}-${index}`}
                      value={
                        typeof option.value == "boolean" || option.value == null
                          ? JSON.stringify(option.value)
                          : option.value
                      }
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Box>
            ) : (
              <Box
                key={input.name}
                sx={{
                  padding: 1,
                  flex: 3,
                  minWidth: "50%",
                }}
              >
                <RHFTextField
                  key={input.name}
                  name={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  fullWidth
                  InputProps={
                    input.icon
                      ? {
                          startAdornment: (
                            <InputAdornment position="start">
                              {input.icon}
                            </InputAdornment>
                          ),
                        }
                      : undefined
                  }
                />
              </Box>
            );
          })}
        </Stack>
      </form>
    </FormProvider>
  );
};

export default Searchbar;
