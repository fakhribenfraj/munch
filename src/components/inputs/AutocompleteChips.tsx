"use client";
import { Autocomplete, Chip, TextField } from "@mui/material";
import React from "react";

type AutocompleteChipsProps = {
  options: string[];
  placeholder?: string;
};
const AutocompleteChips = ({
  options,
  placeholder,
}: AutocompleteChipsProps) => {
  return (
    <Autocomplete
      multiple
      options={options}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            {...getTagProps({ index })}
            variant="filled"
            label={option}
            key={option}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder={placeholder} />
      )}
    />
  );
};

export default AutocompleteChips;
