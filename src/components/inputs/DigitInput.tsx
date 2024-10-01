"use client";
import { InputBase, Stack, useTheme } from "@mui/material";
import React from "react";

import useDigitInput from "react-digit-input";
type DigitInputProps = {
  name: string;
  length: number;
};
const DigitInput = ({ length, name }: DigitInputProps) => {
  const CELL_WIDTH = "3rem";

  const theme = useTheme();
  const [value, onChange] = React.useState("");
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length,
    value,
    onChange,
  });
  return (
    <Stack direction="row" columnGap={1} alignItems="center">
      {digits.map((digit, index) => (
        <InputBase
          key={`digit-${name}-${index}`}
          type="text"
          sx={{
            width: CELL_WIDTH,
            height: CELL_WIDTH,
            position: "relative",
            color: digit.value ? "primary.main" : theme.palette.grey[300],
            border: 1,
            borderRadius: 2,
            borderColor: "currentcolor",
            "&::after": {
              content: `"${digit.value ?? ""}"`,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,calc(-50%))",
              lineHeight: "1rem",
              fontSize: "1rem",
              color: theme.palette.grey[700],
              fontWeight: 600,
            },
            "@keyframes blinker": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
            "&:focus-within": {
              "&::after": {
                animation: "blinker .5s linear infinite",
                ...(!digit.value && {
                  background: "currentColor",
                  width: "1px",
                  height: "1rem",
                }),
              },
            },
            input: {
              opacity: 0,
            },
          }}
          inputProps={{
            inputMode: "decimal",
            autoFocus: index == 0,
            ...digit,
          }}
        />
      ))}
    </Stack>
  );
};

export default DigitInput;
