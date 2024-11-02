"use client";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { SessionProvider as nextAuthPrivider } from "next-auth/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

type ClientProvidersProps = {
  children?: ReactNode;
};
const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        maxSnack={2}
      >
        {children}
      </SnackbarProvider>
    </LocalizationProvider>
  );
};
export const SessionProvider = nextAuthPrivider;
export default ClientProviders;
