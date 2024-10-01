import { getDictionary } from "@/actions/dictionary";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
type UseActionSnackbarOptions = {
  message?: string;
  disableSuccess?: boolean;
};
const useActionSnackbar = (
  state: any,
  { message, disableSuccess }: UseActionSnackbarOptions = {}
) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (state) {
      if (state.status == "success") {
        if (!disableSuccess) {
          enqueueSnackbar({ variant: "success", message: "success" });
        }
      } else {
        if (state.error) {
          enqueueSnackbar({ variant: "error", message: state?.error });
        } else {
          getDictionary("snackbar", "error").then((translation: any) => {
            enqueueSnackbar({
              variant: "error",
              message: message ?? translation,
            });
          });
        }
      }
    }
  }, [state, message, disableSuccess, enqueueSnackbar]);
};

export default useActionSnackbar;
