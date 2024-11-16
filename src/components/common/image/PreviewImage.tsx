"use client";
import useSelectFile from "@/hooks/useSelectFile";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import FileInput from "../inputs/FileInput";
import MuiPhotoEditor from "./MuiPhotoEditor";
type PreviewImageProps = {
  src: string;
  open?: boolean;
  showSave?: boolean;
  onClose?: VoidFunction;
  onSave?: (editedFile: string) => void;
  onDelete?: VoidFunction;
};
const PreviewImage = ({
  src,
  open = false,
  showSave = false,
  onClose,
  onSave,
  onDelete,
}: PreviewImageProps) => {
  const t = useTranslations();
  const [showEditor, setShowEditor] = useState(false);
  const { file, handleFileSelect, resetFile, setFile } = useSelectFile(src);
  const handleClose = () => {
    resetFile();
    onClose && onClose();
  };

  useEffect(() => {
    if (src) {
      setFile(src);
    }
  }, [src, setFile]);
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
        {file && (
          <Image
            src={file}
            alt="preview"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
        )}
        <MuiPhotoEditor
          name="avatar"
          file={file ? file : src}
          open={showEditor}
          onClose={() => setShowEditor(false)}
          onSaveImage={(editedFile: string) => {
            setFile(editedFile);
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
              value={file ?? undefined}
              onChange={(e) => handleFileSelect(e, () => setShowEditor(true))}
            >
              Upload
            </FileInput>
          </Button>
        </Stack>
        <Stack direction="row">
          {(src || file) && (
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                resetFile();
                onDelete && onDelete();
                handleClose();
              }}
            >
              Delete
            </Button>
          )}
          {(showSave || file) && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onSave && file && onSave(file);
                handleClose();
              }}
            >
              {t("SAVE")}
            </Button>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewImage;
