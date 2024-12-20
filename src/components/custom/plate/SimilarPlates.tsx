"use client";
import { Box } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import PlateCard from "./PlateCard";
import dynamic from "next/dynamic";
const AccordionCarousel = dynamic(
  () => import("@/components/common/AccordionCarousel"),
  { ssr: false }
);
const SimilarPlates = () => {
  const img = "/images/plates/plate-1.jpg";
  return (
    <Stack>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Similar dishes
      </Typography>
      <AccordionCarousel
        slidesToShow={{ xs: 2, sm: 3 }}
        autoPlay={2000}
        infinite
      >
        {[
          {
            title: "Ramen Noodles",
            price: 15.0,
            image: img,
          },
          {
            title: "Pho Noodles",
            price: 20.0,
            image: img,
          },
          {
            title: "Ramen Noodles",
            price: 15.0,
            image: img,
          },
          {
            title: "Pho Noodles",
            price: 20.0,
            image: img,
          },
          {
            title: "Ramen Noodles",
            price: 15.0,
            image: img,
          },
          {
            title: "Pho Noodles",
            price: 20.0,
            image: img,
          },
        ].map((dish, index) => (
          <Box key={index} p={1}>
            <PlateCard
              id={index.toString()}
              title={dish.title}
              image={dish.image}
              price={dish.price}
              rating={4.9}
            />
          </Box>
        ))}
      </AccordionCarousel>
    </Stack>
  );
};

export default SimilarPlates;
