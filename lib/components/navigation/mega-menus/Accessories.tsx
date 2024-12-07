"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";
import TwFeaturedMenuCard from "./FeaturedMenuCard";

interface MegaAccessorieMenuProps {
  menu: any;
}

const MegaAccessorieMenu = ({ menu }: MegaAccessorieMenuProps) => {
  return (
    <Popover className="flex">
      <div className="relative flex">
        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-primary-600 data-[open]:text-primary-600">
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
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
              {menu.sections[0].items.map((item: any, index: number) => (
                <TwFeaturedMenuCard
                  key={index}
                  menuItem={item}
                  onClickButton={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default MegaAccessorieMenu;