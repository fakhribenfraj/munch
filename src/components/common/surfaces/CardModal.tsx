"use client";
import { Card, CardContent } from "@mui/material";
import Modal, { ModalProps } from "@mui/material/Modal";
import { useRouter } from "next/navigation";

export type CardModalProps = ModalProps & {
  href?: string;
};
const CardModal = ({
  href,
  children,
  sx,
  onClose,
  ...props
}: CardModalProps) => {
  const router = useRouter();
  return (
    <Modal
      {...props}
      onClose={(event, reason) => {
        onClose && onClose(event, reason);
        if (href) {
          router.replace(href);
        }
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "55rem",
          maxHeight: "90vh",
          outline: "none",
          padding: { xs: 2, md: 5 },
          ...sx,
        }}
      >
        <CardContent
          sx={{
            height: "100%",
          }}
        >
          {children}
        </CardContent>
      </Card>
    </Modal>
  );
};
export default CardModal;
