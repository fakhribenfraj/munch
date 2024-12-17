"use client";
import ArrowsDownIconOutlined from "@/components/icons/outlined/ArrowsDown";
import { alpha, Box, BoxProps, IconButton, Stack } from "@mui/material";
import React, { ReactNode, useRef, useState } from "react";

type HorizontalScrollBoxProps = BoxProps & {
  showMore?: boolean;
};

const HorizontalScrollBox = ({ children }: HorizontalScrollBoxProps) => {
  const [isOpended, setIsOpended] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openedHeight = ref.current?.offsetTop ?? 0;

  return (
    <Stack>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexWrap: isOpended ? "wrap" : "nowrap",
          gap: { xs: 1, md: 2 },
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            WebkitAppearance: "none",
            height: "6px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: 5,
            backgroundColor: (theme) => alpha(theme.palette.grey[400], 0.8),
            boxShadow: (theme) => `0 0 2px ${theme.palette.grey[100]}`,
          },
          transition: "height 0.3s ease-in-out",
        }}
      >
        {children}
      </Box>
      <IconButton
        sx={{
          display: "block",
          margin: "auto",
        }}
        onClick={() => {
          if (isOpended) {
            document?.querySelector("main")?.scroll({
              top: openedHeight - 215,
              behavior: "smooth",
            });
          }
          setIsOpended(!isOpended);
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: isOpended ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <ArrowsDownIconOutlined />
        </Box>
      </IconButton>
    </Stack>
  );
};

export default HorizontalScrollBox;
