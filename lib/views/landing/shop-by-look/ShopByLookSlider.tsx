import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiperSlider from "@/lib/components/swiper/SwiperSlider";
import { styled, Box, Typography } from "@mui/material";
import NextImage from "next/image";
import { homeLookBooks } from "@/lib/utils/constants";

const StyledShopByLookSlide = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 500,
  backgroundColor: theme.palette.grey[100],
  overflow: "hidden",
  position: "relative",
  "& .overly": {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 30,
  },
}));

const ShopByLookSlider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="swiper-loader">Loading...</div>;
  }

  return (
    <CustomSwiperSlider
      centeredSlides={true}
      freeMode={true}
      mousewheel={true}
      keyboard={true}
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      modules={[]}
      loop={true}
      observer={true}
      observeParents={true}
    >
      {homeLookBooks.map((look) => (
        <SwiperSlide key={look.name}>
          <StyledShopByLookSlide>
            <NextImage
              fill={true}
              alt={look.name}
              src={look.image}
              className="size-full object-cover"
            />
            <Box width="100%" component="div" className="overly bg-gradient-to-t  from-slate-800">
              <Typography width="100%" align="center" variant="h1" className="text-2xl tracking-wide text-white">
                {look.name}
              </Typography>
            </Box>
          </StyledShopByLookSlide>
        </SwiperSlide>
      ))}
    </CustomSwiperSlider>
  );
};

export default ShopByLookSlider;
