"use client";
import { Box, SxProps } from "@mui/material";
import { ReactNode, useState } from "react";
type FileInputProps = {
  id: string; //used for linking label and input
  sx?: SxProps;
  onChange?: (files: File[]) => void;
  accept?: string;
  disabled?: boolean;
  children: ReactNode;
};
const FileInput = ({
  children,
  id,
  onChange,
  sx,
  ...props
}: FileInputProps) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        ...sx,
      }}
      component="label"
      htmlFor={id}
    >
      {children}
      <input
        {...props}
        id={id}
        type="file"
        hidden
        onChange={(e) => {
          let files = e.target.files;
          if (files && files?.length > 0) {
            onChange && onChange(Array.from(files));
          }
        }}
      />
    </Box>
  );
};
export default FileInput;
