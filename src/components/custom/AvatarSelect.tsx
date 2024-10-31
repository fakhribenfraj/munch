"use client";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Avatar, Box, Chip } from "@mui/material";
import { useState } from "react";
import FileInput from "../common/inputs/FileInput";
import MuiPhotoEditor from "../common/MuiPhotoEditor";
import addAvatar from "@/actions/profile/addAvatar";

type AvatarSelectProps = {
  alt?: string;
  src: string;
};
const AvatarSelect = ({ alt, src }: AvatarSelectProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [editedFile, setEditedFile] = useState<File | undefined>();

  const [showModal, setShowModal] = useState(false);

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
        src={editedFile ? URL.createObjectURL(editedFile) : src}
      />
      {file && (
        <MuiPhotoEditor
          file={file}
          open={showModal}
          onClose={() => setShowModal(false)}
          onSaveImage={(editedFile: File) => {
            setEditedFile(editedFile);
            addAvatar.bind(null, editedFile);
          }}
        />
      )}
      <FileInput
        id="avatar"
        accept="image/*"
        value={file}
        onClick={() => {
          setFile(undefined);
        }}
        onChange={(e) => {
          let files = (e.target as HTMLInputElement).files;
          if (files && files?.length > 0) {
            setFile(files[0]);
            setShowModal(true);
          }
        }}
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
