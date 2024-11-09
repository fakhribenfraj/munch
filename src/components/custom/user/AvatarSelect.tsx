"use client";
import useSelectFile from "@/hooks/useSelectFile";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Avatar, Box, ButtonBase, Chip } from "@mui/material";
import { useState } from "react";
import MuiPhotoEditor from "../../common/image/MuiPhotoEditor";
import PreviewImage from "../../common/image/PreviewImage";
import FileInput from "../../common/inputs/FileInput";
import addAvatar from "@/actions/profile/addAvatar";
import deleteAvatar from "@/actions/profile/deleteAvatar";

type AvatarSelectProps = {
  name: string;
  src: string;
};
const AvatarSelect = ({ name, src }: AvatarSelectProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(src);

  const [showEditor, setShowEditor] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { file, handleFileSelect, resetFile, setFile } = useSelectFile();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        mb: 2,
      }}
    >
      <ButtonBase
        onClick={() => {
          setShowPreview(true);
          setFile(null);
        }}
        disabled={!avatarUrl}
      >
        <Avatar
          sx={{
            width: 144,
            height: 144,
            bgcolor: "grey.400",
            fontSize: "3.5rem",
            textTransform: "uppercase",
            mx: "auto",
          }}
          alt={name}
          src={avatarUrl ?? undefined}
        >
          {name.split(" ").length > 1
            ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
            : `${name.split(" ")[0][0]}${name.split(" ")[0][1]}`}
        </Avatar>
      </ButtonBase>
      <PreviewImage
        src={file ? file : (avatarUrl as string)}
        open={showPreview}
        showSave={!!file}
        onClose={() => {
          setShowPreview(false);
          setShowEditor(false);
        }}
        onSave={(editedFile: string) => {
          editedFile && setAvatarUrl(editedFile);
          setFile(editedFile);
          addAvatar(editedFile);
        }}
        onDelete={() => {
          setAvatarUrl(null);
          resetFile();
          deleteAvatar();
        }}
      />
      {file && (
        <MuiPhotoEditor
          name="avatar"
          file={file}
          open={showEditor}
          onClose={() => setShowEditor(false)}
          onSaveImage={(editedFile: string) => {
            setFile(editedFile);
            setShowPreview(true);
          }}
        />
      )}
      {!avatarUrl && (
        <FileInput
          id="avatar-add"
          accept="image/*"
          value={file ?? undefined}
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
