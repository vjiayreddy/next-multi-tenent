import React from "react";
import StatsCard from "./StatsCard";
import { homeStatsData } from "@/lib/utils/constants";

const LandingStats = () => {
  return (
    <div className="bg-primary-50 pt-12 sm:pt-32 relative isolate -z-10 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-primary-600">Experience</span> Excellence{" "}
            <br /> India&apos;s Leading
            <span className="text-primary-600"> Custom</span> Menswear
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Looking your best gets easy with My Perfect Fit by your side.
            Discover a whole new way to shop for menswear with custom clothing,
            stylist assistance, premium fabrics, online measurements and so much
            more. Begin your journey to a perfectly styled future today.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-32">
        <div className="relative">
          <div className="absolute bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                {homeStatsData.map((data) => (
                  <StatsCard key={data.count} {...data} />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingStats;
