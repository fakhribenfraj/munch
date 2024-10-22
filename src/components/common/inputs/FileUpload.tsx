"use client";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
type FileUploadProps = {
  id: string;
  onChange?: (files: File[]) => void;
  accept: string;
};
const FileUpload = ({ accept, id, onChange }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileEnter, setFileEnter] = useState(false);
  useEffect(() => {
    if (files) {
      onChange && onChange(files);
    }
  }, [files, onChange]);

  return (
    <Stack rowGap={2}>
      <Paper
        sx={{
          display: "flex",
          border: 0.5,
          borderColor: "grey.400",
          color: "grey.500",
          backgroundColor: "grey.100",
          alignItems: "center",
          overflow: "hidden",
          alignSelf: "flex-end",
        }}
        component="label"
        htmlFor={id}
      >
        {files.length > 0 && (
          <IconButton
            sx={{ ml: "auto" }}
            onClick={() => {
              setFiles([]);
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
        <Typography sx={{ px: 1 }}>
          {files.length > 0 ? "Clear files" : "Choose files to upload"}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "primary.main",
            color: "common.white",
            p: 1,
            cursor: "pointer",
          }}
        >
          Browse files
        </Typography>
      </Paper>
      {files.length == 0 ? (
        <Paper
          sx={{
            border: fileEnter ? 4 : 2,
            borderStyle: "dashed",
            borderColor: "grey.300",
            color: "grey.500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, md: 4 },
            backgroundColor: "grey.100",
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={(e) => {
            setFileEnter(false);
          }}
          onDragEnd={(e) => {
            e.preventDefault();
            setFileEnter(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setFileEnter(false);
            if (e.dataTransfer.items) {
              Array.from(e.dataTransfer.items).forEach((item, i) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    setFiles((files) => [...files, file]);
                  }
                }
              });
            } else {
              Array.from(e.dataTransfer.files).forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
              });
            }
          }}
        >
          <Stack alignItems="center" rowGap={1}>
            <CloudUploadIcon fontSize="large" />
            <Typography>Drag and drop files here</Typography>
          </Stack>
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
        </Paper>
      ) : (
        <List>
          {files.map((file) => (
            <ListItem
              key={file.name}
              sx={{
                boxShadow: 2,
              }}
            >
              <AttachFileIcon />
              <Typography sx={{ mx: 2 }}>{file.name}</Typography>
              <IconButton
                sx={{ ml: "auto" }}
                onClick={() => {
                  setFiles((files) =>
                    files.filter((f) => f.name !== file.name)
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
};
export default FileUpload;
