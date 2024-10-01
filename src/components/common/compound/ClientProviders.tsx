"use client";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { SessionProvider as nextAuthPrivider } from "next-auth/react";

type ClientProvidersProps = {
  children?: ReactNode;
};
const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      maxSnack={2}
    >
      {children}
    </SnackbarProvider>
  );
};
export const SessionProvider = nextAuthPrivider;
export default ClientProviders;
