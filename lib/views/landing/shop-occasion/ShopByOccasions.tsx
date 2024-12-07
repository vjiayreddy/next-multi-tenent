"use client";
import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import SectionMainTitle from "./MainTitle";
import ShopByOccasionCard from "./Card";
import { SwiperSlide } from "swiper/react";
import { homeShopByOccasions } from "../../../utils/constants";
import CustomSwiperSlider from "@/lib/components/swiper/SwiperSlider";
import SliderSkeltonView from "./SkeltonView";

const ShopByOccasions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Container className="bg-slate-50" maxWidth="xl" disableGutters={true}>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 sm:pb-32 pb-24 xl:mx-auto xl:max-w-7xl"
      >
        <SectionMainTitle />

        <div className="mt-4">
          {isLoading && <SliderSkeltonView />}
          {!isLoading && (
            <CustomSwiperSlider
              slidesPerView={3}
              spaceBetween={10}
              loop={true} // Enable continuous loop
              autoplay={{
                delay: 2500,
              }}
              navigation={true}
              pagination={{
                clickable: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[]}
              className="mySwiper"
            >
              {homeShopByOccasions.map((item) => (
                <SwiperSlide key={item.image}>
                  <ShopByOccasionCard {...item} />
                </SwiperSlide>
              ))}
            </CustomSwiperSlider>
          )}
        </div>
      </section>
    </Container>
  );
};

export default ShopByOccasions;
