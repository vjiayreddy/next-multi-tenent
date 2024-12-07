import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";

interface LeftSideSectionProps {
  title: string;
  description: string;
  btnName: string;
  link: string;
  imgUrl: string;
}

const LeftSideSection = ({
  title,
  description,
  btnName,
  link,
  imgUrl,
}: LeftSideSectionProps) => {
  return (
    <div className="relative mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
          <div>
            
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
              <div className="mt-6">
                <NextLink
                  href={link}
                  className="inline-flex rounded-lg bg-primary-600 px-4 py-1.5 text-base/7 font-semibold text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700"
                >
                  {btnName}
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <NextImage
              alt="great-fabrics"
              src={imgUrl}
              width={1000}
              blurDataURL={imgUrl}
              height={1000}
              className="w-full rounded-xl shadow-xl ring-1 ring-black/5 lg:absolute lg:left-0 lg:h-full  lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideSection;
