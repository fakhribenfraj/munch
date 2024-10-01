"use client";
import { Button, ButtonProps } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ReturnButton = (props: Omit<ButtonProps, "href">) => {
  const router = useRouter();
  const t_actions = useTranslations("genericActions");
  return (
    <Button
      {...props}
      color="primary"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={() => router.back()}
    >
      {t_actions("return")}
    </Button>
  );
};

export default ReturnButton;
