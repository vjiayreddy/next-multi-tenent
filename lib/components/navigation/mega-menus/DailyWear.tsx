"use client";
import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import FeaturedMenuCard from "./FeaturedMenuCard";
import MegaMenuListItem from "./MenuList";

interface MegaDailyWearMenuProps {
  menu: any;
}

const MegaDailyWearMenu = ({ menu }: MegaDailyWearMenuProps) => {
  return (
    <Popover className="flex">
      <div className="relative flex">
        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800  data-[open]:border-yellow-600 data-[open]:text-yellow-600">
          {menu.name}
        </PopoverButton>
      </div>
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 top-1/2 bg-white shadow"
        />

        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                {menu.featured.map((item: any, index: number) => (
                  <FeaturedMenuCard
                    key={index}
                    menuItem={item}
                    onClickButton={() => {}}
                  />
                ))}
              </div>
              <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                {menu.sections.map((section: any, index: number) => (
                  <MegaMenuListItem key={index} menuItem={section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default MegaDailyWearMenu;
