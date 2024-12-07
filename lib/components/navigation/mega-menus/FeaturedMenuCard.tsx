import React from "react";
import NextImage from "next/image";

interface FeaturedMenuCardProps {
  menuItem: any;
  buttonName?: string;
  onClickButton: () => void;
}

const FeaturedMenuCard = ({
  menuItem,
  buttonName = "Shop now",
  onClickButton,
}: FeaturedMenuCardProps) => {
  return (
    <div key={menuItem.name} className="group relative text-base sm:text-sm">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <NextImage
          alt={menuItem.imageAlt}
          src={menuItem.imageSrc}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <a href={menuItem.href} className="mt-6 block font-medium text-gray-900">
        <span aria-hidden="true" className="absolute inset-0 z-10" />
        {menuItem.name}
      </a>
      <p aria-hidden="true" className="mt-1" onClick={onClickButton}>
        {buttonName}
      </p>
    </div>
  );
};

export default FeaturedMenuCard;
