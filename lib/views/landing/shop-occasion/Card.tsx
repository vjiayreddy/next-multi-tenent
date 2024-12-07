"use client";
import React from "react";
import { styled, Box, Typography } from "@mui/material";
import NextImage from "next/image";
import { motion } from "framer-motion";

const StyledShopByProductCard = styled(Box)(({ theme }) => ({
  height: 380,
  width: "100%",
  backgroundColor: theme.palette.grey[100],
  overflow: "hidden",
  position: "relative",
  "& .next-image": {
    objectPosition: "top center",
    objectFit: "cover",
    filter: "brightness(1)",
  },
  "& .section-content": {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 30,
    zIndex: 2,
    padding: 10,
    backgroundColor: theme.palette.common.white,
  },
}));

interface ShopByProductCardProps {
  image: string;
  label: string;
}

const ShopByOccasionCard = ({ image, label }: ShopByProductCardProps) => {
  return (
    <StyledShopByProductCard>
      <NextImage src={image} className="next-image" fill={true} alt={label} />
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          className="text-2xl font-normal tracking-widest text-secondary-800"
        >
          {label}
        </Typography>
      </motion.div>
    </StyledShopByProductCard>
  );
};

export default ShopByOccasionCard;
