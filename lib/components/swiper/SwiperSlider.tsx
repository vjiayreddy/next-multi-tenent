import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { SwiperModule } from "swiper/types";
import "swiper/css/free-mode";

interface SwiperSliderProps extends SwiperProps {
  modules: SwiperModule[];
}

const CustomSwiperSlider = ({
  slidesPerView,
  modules,
  children,
  ...rest
}: SwiperSliderProps) => {
  return (
    <Box position="relative">
      <Swiper
        {...rest}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2500,
        }}
        modules={[Navigation, Autoplay, FreeMode, ...modules]}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        onSwiper={(swiper) => {
          const prevBtn = document.querySelector(".custom-swiper-button-prev");
          const nextBtn = document.querySelector(".custom-swiper-button-next");
          if (swiper.isBeginning) {
            prevBtn?.classList.add("custom-swiper-button-disabled");
          }
          if (swiper.isEnd) {
            nextBtn?.classList.add("custom-swiper-button-disabled");
          }
        }}
        onSlideChange={(swiper) => {
          const prevBtn = document.querySelector(".custom-swiper-button-prev");
          const nextBtn = document.querySelector(".custom-swiper-button-next");
          if (swiper.isBeginning) {
            prevBtn?.classList.add("custom-swiper-button-disabled");
          } else {
            prevBtn?.classList.remove("custom-swiper-button-disabled");
          }
          if (swiper.isEnd) {
            nextBtn?.classList.add("custom-swiper-button-disabled");
          } else {
            nextBtn?.classList.remove("custom-swiper-button-disabled");
          }
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      {rest.navigation && (
        <>
          <div className="custom-swiper-button custom-swiper-button-prev">
            <PrevArrow />
          </div>
          <div className="custom-swiper-button custom-swiper-button-next">
            <NextArrow />
          </div>
        </>
      )}
    </Box>
  );
};

export default CustomSwiperSlider;
