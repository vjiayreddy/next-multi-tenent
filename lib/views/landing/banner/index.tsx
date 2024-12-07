"use client";
import React, { useState, useEffect } from "react";
import SliderSkelton from "./SliderSkelton";
import { SwiperSlide } from "swiper/react";
import StyledBannerCard from "./SliderCard";
import { homeBannerSlides } from "../../../utils/constants";
import CustomSwiperSlider from "@/lib/components/swiper/SwiperSlider";

const LandingBannerView = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <SliderSkelton />;
  }

  return (
    <CustomSwiperSlider
      slidesPerView={3}
      spaceBetween={0}
      loop={true}
      navigation={true}
      modules={[]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
      }}
    >
      {homeBannerSlides.map((item) => (
        <SwiperSlide key={item.image}>
          <StyledBannerCard {...item} />
        </SwiperSlide>
      ))}
    </CustomSwiperSlider>
  );
};

export default LandingBannerView;
