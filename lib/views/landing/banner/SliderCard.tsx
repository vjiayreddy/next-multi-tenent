import React from "react";
import { Box, styled, Typography } from "@mui/material";
import NextImage from "next/image";

const StyledBannerCard = styled(Box)(({ theme }) => ({
  height: 650,
  minWidth:300,
  //width: "100%",
  backgroundColor: theme.palette.grey[100],
  position: "relative",
  overflow: "hidden",
  "& .next-image": {
    objectFit: "cover",
    objectPosition: "50% 50%",
    zIndex: 1,
    filter: `brightness(90%) grayscale(40%)`,
    "& :hover": {
      filter: `brightness(90%)`,
    },
  },
  "& .section-content-wrapper": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 2,
    "& .MuiTypography-h1": {
      //borderTop: `1px solid ${theme.palette.common.white}`,
     // borderBottom: `1px solid ${theme.palette.common.white}`,
      padding: 10,
      width: "100%",
    },
  },
}));

interface BannerSliderCardProps {
  image: string;
  label: string;
  caption: string;
}

const BannerSliderCard = ({ image, label, caption }: BannerSliderCardProps) => {
  return (
    <StyledBannerCard className="cross-stitch">
      <NextImage className="next-image" src={image} fill={true} alt="suit" />
      <Box component="div" className="section-content-wrapper">
        <p
          id="sale-caption"
          className="font-medium text-sm tracking-tight text-white bg-secondary-800 pl-2 pr-2 rounded-full" 
        >
          {caption}
        </p>
        <Typography
          textAlign="center"
          variant="h1"
          id="sale-heading"
          className="text-5xl font-bold tracking-widest text-white text-stroke-3"
        >
          {label}
        </Typography>
      </Box>
    </StyledBannerCard>
  );
};

export default BannerSliderCard;
