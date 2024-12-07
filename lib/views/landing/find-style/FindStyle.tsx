import React, { Fragment } from "react";
import { homeFindYourStyle } from "@/lib/utils/constants";
import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";

const LandingFindStyle = () => {
  return (
    <Fragment>
      <div className="relative overflow-hidden bg-primary-50 py-16 lg:py-24">
        <h2 className="text-center text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Professional Styling Meets Digital Convenience
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          Experience the perfect blend of sophisticated design and modern
          functionality. Our platform brings together the elegance of
          professional styling with the ease of digital solutions.
        </p>
      </div>
      <div className="relative overflow-hidden bg-white pb-32 pt-16">
        {homeFindYourStyle.map((item, index) => (
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

export default LandingFindStyle;
