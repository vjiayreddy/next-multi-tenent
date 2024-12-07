import React from "react";
import NextImage from "next/image";

interface RightSideSectionProps {
  title: string;
  description: string;
  btnName: string;
  link: string;
  imgUrl: string;
}

const RightSideSection = ({
  title,
  description,
  btnName,
  link,
  imgUrl,
}: RightSideSectionProps) => {
  return (
    <div className="mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
          <div>
           
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
              <div className="mt-6">
                <a
                  href={link}
                  className="inline-flex rounded-lg bg-primary-600 px-4 py-1.5 text-base/7 font-semibold text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700"
                >
                  {btnName}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <NextImage
              width={1000}
              height={1000}
              alt="Customer profile user interface"
              src={imgUrl}
              blurDataURL={imgUrl}
              className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideSection;
