"use client";
import useSelectFile from "@/hooks/useSelectFile";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Avatar, Box, ButtonBase, Chip } from "@mui/material";
import { useState } from "react";
import MuiPhotoEditor from "../common/image/MuiPhotoEditor";
import PreviewImage from "../common/image/PreviewImage";
import FileInput from "../common/inputs/FileInput";

type AvatarSelectProps = {
  alt?: string;
  src: string;
};
const AvatarSelect = ({ alt, src }: AvatarSelectProps) => {
  const [fileUrl, setFileUrl] = useState<string>();

  const [showEditor, setShowEditor] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { file, handleFileSelect, resetFile, setFile } = useSelectFile();

  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        mb: 2,
      }}
    >
      <ButtonBase
        onClick={() => setShowPreview(true)}
        disabled={!fileUrl && !src}
      >
        <Avatar
          sx={{
            width: 160,
            height: 160,
            bgcolor: "grey.400",
          }}
          alt={alt}
          src={fileUrl ? fileUrl : src}
        />
      </ButtonBase>
      <PreviewImage
        src={fileUrl ? fileUrl : src}
        open={showPreview}
        onClose={() => {
          setShowPreview(false);
          setShowEditor(false);
        }}
        onSave={(editedFile: string) => {
          setFileUrl(editedFile);
          // addAvatar.bind(null, editedFile);
        }}
      />
      {file && (
        <MuiPhotoEditor
          file={file}
          open={showEditor}
          onClose={() => setShowEditor(false)}
          onSaveImage={(editedFile: File) => {
            setShowPreview(true);
            setFile(editedFile);
          }}
        />
      )}
      {!fileUrl && !src && (
        <FileInput
          id="avatar-add"
          accept="image/*"
          value={file}
          onClick={resetFile}
          onChange={(e) => handleFileSelect(e, () => setShowEditor(true))}
        >
          <Chip
            icon={<PhotoCameraIcon />}
            label="Add"
            variant="filled"
            color="warning"
            sx={{
              bgcolor: "common.white",
              boxShadow: 4,
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translate(-50%,50%)",
            }}
          />
        </FileInput>
      )}
    </Box>
  );
};

export default AvatarSelect;
