import SaveIcon from "@mui/icons-material/Save";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

const SubmitButton = ({ children, disabled, ...props }: LoadingButtonProps) => {
  return (
    <LoadingButton
      {...props}
      loadingPosition="start"
      disabled={props.loading || disabled}
      startIcon={<SaveIcon />}
      variant="contained"
      color="primary"
      type="submit"
    >
      {children}
    </LoadingButton>
  );
};

export default SubmitButton;
