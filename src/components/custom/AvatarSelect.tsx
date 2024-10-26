"use client";
import { Avatar, Box, Chip } from "@mui/material";
import React, { useState } from "react";
import FileInput from "../common/inputs/FileInput";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { ReactPhotoEditor } from "react-photo-editor";

type AvatarSelectProps = {
  alt?: string;
  src: string;
};
const AvatarSelect = ({ alt, src }: AvatarSelectProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [editedFile, setEditedFile] = useState<File | undefined>();

  const [showModal, setShowModal] = useState(false);

  console.log({ file });
  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        mb: 2,
      }}
    >
      <Avatar
        sx={{
          width: 160,
          height: 160,
          bgcolor: "grey.400",
        }}
        alt={alt}
        src={editedFile && URL.createObjectURL(editedFile)}
      />
      <ReactPhotoEditor
        open={showModal}
        onClose={() => setShowModal(false)}
        file={file ?? editedFile}
        onSaveImage={(editedFile) => {
          setEditedFile(editedFile);
        }}
        allowColorEditing={false}
      />
      <FileInput
        id="avatar"
        accept="image/*"
        onClick={() => {
          setFile(undefined);
          setShowModal(true);
        }}
        onChange={(files: File[]) => setFile(files[0])}
      >
        <Chip
          icon={<PhotoCameraIcon />}
          label="Edit"
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
    </Box>
  );
};

export default AvatarSelect;
