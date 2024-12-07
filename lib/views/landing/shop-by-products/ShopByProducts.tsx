"use client";
import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import SectionMainTitle from "./MainTitle";
import ShopByProductCard from "./Card";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homeShopByProducts } from "../../../utils/constants";
import "swiper/css/autoplay";
import CustomSwiperSlider from "@/lib/components/swiper/SwiperSlider";
import SliderSkeltonView from "./SkeltonView";

const ShopByProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Container className="bg-white" maxWidth="xl" disableGutters={true}>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 sm:pb-32 pb-24 xl:mx-auto xl:max-w-7xl"
      >
        <SectionMainTitle />

        <div className="mt-4">
          {isLoading && <SliderSkeltonView />}
          {!isLoading && (
            <CustomSwiperSlider
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
              spaceBetween={10}
              slidesPerView={4}
              modules={[]}
              navigation={true}
            >
              {homeShopByProducts.map((item) => (
                <SwiperSlide key={item.image}>
                  <ShopByProductCard {...item} />
                </SwiperSlide>
              ))}
            </CustomSwiperSlider>
          )}
        </div>
      </section>
    </Container>
  );
};

export default ShopByProducts;
