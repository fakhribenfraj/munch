import { Box, Link, Typography } from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      sx={{
        textDecoration: "none",
      }}
    >
      <Image
        src="/assets/icons/logo.png"
        alt="logo"
        height={32}
        width={160}
        priority
      />
    </Link>
  );
};

export default Logo;
