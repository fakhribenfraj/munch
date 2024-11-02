"use client";
import { Box, SxProps } from "@mui/material";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef
} from "react";

type FileInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value"
> & {
  id: string; //used for linking label and input
  sx?: SxProps;
  value?: File[] | File;
  children: ReactNode;
};
const FileInput = ({ children, id, sx, value, ...props }: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && !value) {
      inputRef.current.files = new DataTransfer().files;
    }
  }, [value]);

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
      <input {...props} ref={inputRef} id={id} type="file" hidden />
    </Box>
  );
};
export default FileInput;
