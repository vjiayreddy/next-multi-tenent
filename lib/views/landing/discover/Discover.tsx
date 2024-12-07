import React, { Fragment } from "react";
import NextImage from "next/image";
import { Typography } from "@mui/material";
import { homeElivateYourStyle } from "@/lib/utils/constants";
import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";

const LandingDiscover = () => {
  return (
    <Fragment>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <NextImage
          alt="elevate"
          fill={true}
          blurDataURL="/images/elevate_style.jpeg"
          src="/images/elevate_style.jpeg"
          className="absolute inset-0 -z-30 size-full object-cover  filter brightness-50 mix-blend-lighten"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#edc948] to-[#e2a014] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#edc948] to-[#e2a014] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-10 text-pretty text-lg font-medium text-white sm:text-xl/8"></p>
          <Typography
            variant="h1"
            className="text-3xl font-semibold tracking-wide text-white sm:text-6xl"
          >
            <span className="text-primary-600">Elevate Your</span> Style
            Signature <br /> With My{" "}
            <span className="text-primary-600">Perfect Fit</span>
          </Typography>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white pb-32 pt-16">
        {homeElivateYourStyle.map((item, index) => (
          <Fragment key={index}>
            {index % 2 === 0 ? (
              <LeftSideSection {...item} />
            ) : (
              <RightSideSection {...item} />
            )}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default LandingDiscover;
