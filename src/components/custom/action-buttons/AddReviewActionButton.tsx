"use client";
import { Box, Typography } from "@mui/material";
import ButtonModal from "@/components/common/buttons/ButtonModal";
import { DialogContent } from "@mui/material";
import MobileActionButton from "@/components/common/buttons/MobileActionButton";
import React from "react";
import dynamic from "next/dynamic";
const AddReviewForm = dynamic(
  () => import("@/components/forms/restaurant/reviews/AddReviewForm"),
  { ssr: false }
);
type AddReviewActionButtonProps = {
  label: string;
};

const AddReviewActionButton = ({ label }: AddReviewActionButtonProps) => {
  return (
    <MobileActionButton>
      <ButtonModal
        label={label}
        buttonProps={{
          variant: "contained",
          color: "primary",
          fullWidth: true,
          sx: {
            display: "block",
            maxWidth: "24rem",
            m: "auto",
            p: 1.5,
          },
        }}
      >
        <DialogContent>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {label}
            </Typography>
            <AddReviewForm />
          </Box>
        </DialogContent>
      </ButtonModal>
    </MobileActionButton>
  );
};

export default AddReviewActionButton;
