import { BackgroundBeams } from "@/lib/acternity/background-beams";
import { FlipWords } from "@/lib/acternity/flip-words";
import DottedPattren from "@/lib/components/dotted-pattren/DottedPattren";
import { Typography } from "@mui/material";
import React from "react";

const words = ["Casual", "Formal", "Modren", "Party"];

const ExpertHelpComponent = () => {
  return (
    <div className="isolate overflow-hidden w-full py-20 sm:py-24 lg:py-32  bg-secondary-900 relative flex flex-col items-center justify-center antialiased">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <Typography
                  variant="h1"
                  className=" mb-8 text-left lg:text-7xl leading-7block text-white text-3xl font-semibold tracking-wide sm:text-7xl"
                >
                  Get expert help for
                  <FlipWords words={words} />
                  look
                </Typography>

                <p className="mb-6 max-w-[480px] text-gray-100 text-body-color dark:text-dark-6">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mt-8 inline-flex items-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-500"
                    >
                      Talk To Stylist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-2/12" />
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0779/1765/files/Stylist--hangers-luxury-premium-high-quality-best-wooden-clothes-coat-suit-personalised-wedding-wardrobe-hanger-package-collection_600x600.jpg?v=1604022959"
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-tl-3xl"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <DottedPattren />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default ExpertHelpComponent;
