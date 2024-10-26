"use client";
import {
  Box,
  InputBase,
  InputBaseComponentProps,
  InputBaseProps,
  SxProps,
  Theme,
} from "@mui/material";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

type FileInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  id: string; //used for linking label and input
  sx?: SxProps;
  onChange?: (files: File[]) => void;
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
          let files = (e.target as HTMLInputElement).files;
          if (files && files?.length > 0) {
            onChange && onChange(Array.from(files));
          }
        }}
      />
    </Box>
  );
};
export default FileInput;
