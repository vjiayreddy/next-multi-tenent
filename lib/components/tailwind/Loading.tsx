"use client";
import React from "react";
import { BeatLoader } from "react-spinners";

const TailwindLoading = () => {
  return (
    <div className="mx-auto  max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none min-h-96 flex items-center justify-center">
      <BeatLoader
        color={"#ff7f50"}
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default TailwindLoading;
