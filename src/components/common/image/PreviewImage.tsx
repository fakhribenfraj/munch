"use client";
import useSelectFile from "@/hooks/useSelectFile";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import FileInput from "../inputs/FileInput";
import MuiPhotoEditor from "./MuiPhotoEditor";
type PreviewImageProps = {
  src: string;
  open?: boolean;
  onClose?: VoidFunction;
  onSave?: (editedFile: string) => void;
};
const PreviewImage = ({
  src,
  open = false,
  onClose,
  onSave,
}: PreviewImageProps) => {
  const [showEditor, setShowEditor] = useState(false);
  const { file, handleFileSelect, resetFile, setFile } = useSelectFile();
  const handleClose = () => {
    resetFile();
    onClose && onClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ m: 0, p: 2 }}>preview Photo</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Image
          src={file ? URL.createObjectURL(file) : src}
          alt="preview"
          width={300}
          height={300}
        />
        <MuiPhotoEditor
          file={file ? URL.createObjectURL(file) : src}
          open={showEditor}
          onClose={() => setShowEditor(false)}
          onSaveImage={(editedFile: File) => {
            setFile(editedFile);
            // addAvatar.bind(null, editedFile);
          }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row">
          <Button
            variant="text"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => {
              setShowEditor(true);
            }}
          >
            Edit
          </Button>

          <Button
            variant="text"
            color="primary"
            startIcon={<CloudUploadIcon />}
          >
            <FileInput
              id="avatar"
              accept="image/*"
              value={file}
              onChange={(e) => handleFileSelect(e, () => setShowEditor(true))}
            >
              Upload
            </FileInput>
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="text" color="primary" onClick={resetFile}>
            Delete
          </Button>
          {file && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onSave && onSave(file ? URL.createObjectURL(file) : src);
                handleClose();
                //   resetFile();
              }}
            >
              save
            </Button>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewImage;
