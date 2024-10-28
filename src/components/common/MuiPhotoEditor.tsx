import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import CloseIcon from "@mui/icons-material/Close";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
type MuiPhotoEditorProps = {
  file: File;
  open?: boolean;
  onClose: VoidFunction;
};
const MuiPhotoEditor = ({
  file,
  open = false,
  onClose,
}: MuiPhotoEditorProps) => {
  const editor = useRef(null);
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);

  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  const resetFilters = () => {
    setPosition({ x: 0.5, y: 0.5 });
    setScale(1);
    setRotate(0);
  };
  const handleClose = () => {
    resetFilters();
    onClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Edit Photo
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <AvatarEditor
          width={300}
          height={300}
          borderRadius={300}
          border={0}
          image={file}
          ref={editor}
          scale={scale}
          position={position}
          rotate={rotate}
          onPositionChange={(pos) => setPosition(pos)}
        />

        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", mb: 1, width: "100%" }}
        >
          <IconButton
            disabled={scale == 1}
            onClick={() => setScale((scale) => scale - 0.1)}
          >
            <ZoomOutIcon />
          </IconButton>
          <Slider
            aria-label="zoom"
            min={1}
            max={10}
            step={0.1}
            value={scale}
            onChange={(event: Event, newValue: number | number[]) => {
              setScale(newValue as number);
            }}
          />
          <IconButton
            disabled={scale == 10}
            onClick={() => setScale((scale) => scale + 0.1)}
          >
            <ZoomInIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", mb: 1, width: "100%" }}
        >
          <IconButton
            disabled={rotate == -180}
            onClick={() => setRotate((rotate) => rotate - 1)}
          >
            <RotateLeftIcon />
          </IconButton>
          <Slider
            aria-label="zoom"
            min={-180}
            max={180}
            step={1}
            value={rotate}
            onChange={(event: Event, newValue: number | number[]) => {
              setRotate(newValue as number);
            }}
          />
          <IconButton
            disabled={rotate == 180}
            onClick={() => setRotate((rotate) => rotate + 1)}
          >
            <RotateRightIcon />
          </IconButton>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="primary" onClick={resetFilters}>
          Reset
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuiPhotoEditor;
