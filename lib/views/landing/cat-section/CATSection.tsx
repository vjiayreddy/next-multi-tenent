import React from "react";
import NextImage from "next/image";

const CATSection = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-primary-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <NextImage
          alt="cta-image"
          fill={true}
          src="/images/landing/cta_bg.jpeg"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#f7b500" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Are you confused as to where to start from?
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            Taking your first step into custom menswear? Relax – we&apos;ve got
            you covered. Our tailoring experts will guide you from measurements
            to fabric choices, making your journey to impeccable style
            effortless and enjoyable
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CATSection;
