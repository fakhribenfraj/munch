import {
  Button,
  ButtonProps,
  ButtonPropsColorOverrides,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import ButtonModal, { CloseModalButton } from "./ButtonModal";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
type ConfirmationButtonProps = Omit<ButtonProps, "onClick"> & {
  onConfirm: VoidFunction;
  onCancel?: VoidFunction;
  color?: ButtonPropsColorOverrides;
  content: string;
  title?: string;
  confirmLabel?: string;
};
const ConfirmationButton = ({
  children,
  color,
  title,
  content,
  confirmLabel,
  ...props
}: ConfirmationButtonProps) => {
  return (
    <ButtonModal label={children as string} buttonProps={props}>
      <DialogTitle sx={{ m: 0, p: 2, bgcolor: "grey.100" }}>
        {title ?? "are you sure?"}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Stack
          sx={{
            alignItems: "center",
            rowGap: 4,
            maxWidth: "80%",
            margin: "auto",
            mt: 2,
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: "5rem", color: `${color}.main` }} />
          {content}
        </Stack>
      </DialogContent>
      <DialogActions>
        <CloseModalButton variant="soft" color="inherit" />
        <Button
          variant="contained"
          color={color}
          sx={{
            textTransform: "capitalize",
          }}
        >
          {confirmLabel ?? "confirm"}
        </Button>
      </DialogActions>
    </ButtonModal>
  );
};

export default ConfirmationButton;
