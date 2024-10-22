"use client";
import { Box, BoxProps, Stack } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
type FileInputProps = BoxProps & {
  id: string; //used for linking label and input
  onChange?: (files: File[]) => void;
  accept?: string;
  children: ReactNode;
};
const FileInput = ({ children, accept, id, onChange, sx }: FileInputProps) => {
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    if (files) {
      onChange && onChange(files);
    }
  }, [files, onChange]);

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
        id={id}
        type="file"
        hidden
        accept={accept}
        onChange={(e) => {
          let files = e.target.files;
          if (files && files?.length > 0) {
            setFiles(Array.from(files));
          }
        }}
      />
    </Box>
  );
};
export default FileInput;
