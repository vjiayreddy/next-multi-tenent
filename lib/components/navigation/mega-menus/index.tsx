"use client";
import { PopoverGroup } from "@headlessui/react";
import React from "react";
import TwMegaWeddingMenu from "./Wedding";
import TwMegaDailyWearMenu from "./DailyWear";
import TwMegaAccessorieMenu from "./Accessories";
import { navigationMenus } from "@/lib/utils/constants";

const TwMegaMenu = () => {
  return (
    <div className="hidden h-full lg:flex">
      <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          <TwMegaWeddingMenu menu={navigationMenus.categories[0]} />
          <TwMegaDailyWearMenu menu={navigationMenus.categories[1]} />
          <TwMegaAccessorieMenu menu={navigationMenus.categories[2]} />
        </div>
      </PopoverGroup>
    </div>
  );
};

export default TwMegaMenu;
