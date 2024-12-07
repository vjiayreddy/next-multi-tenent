"use client";
import { navigationMenus } from "@/lib/utils/constants";
import {
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import NextImage from "next/image";

interface MobileNavigationMenuProps {
  onClickCloseIcon: () => void;
}

const MobileNavigationMenu = ({onClickCloseIcon}:MobileNavigationMenuProps) => {
  return (
    <div className="fixed inset-0 z-40 flex">
      <DialogPanel
        transition
        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
      >
        <div className="flex px-4 pb-2 pt-5">
          <button
            type="button"
            onClick={onClickCloseIcon}
            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <TabGroup className="mt-2">
          <div className="border-b border-gray-200">
            <TabList className="-mb-px flex space-x-8 px-4">
              {navigationMenus.categories.map((category) => (
                <Tab
                  key={category.name}
                  className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-primary-600 data-[selected]:text-primary-600"
                >
                  {category.name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels as={Fragment}>
            {navigationMenus.categories.map((category) => (
              <TabPanel
                key={category.name}
                className="space-y-10 px-4 pb-8 pt-10"
              >
                <div className="grid grid-cols-2 gap-x-4">
                  {category.featured.map((item) => (
                    <div key={item.name} className="group relative text-sm">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <NextImage
                          alt={item.imageAlt}
                          src={item.imageSrc}
                          fill={true}
                          className="object-cover object-center"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 z-10"
                        />
                        {item.name}
                      </a>
                      <p aria-hidden="true" className="mt-1">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
                {category.sections.map((section) => (
                  <div key={section.name}>
                    <p
                      id={`${category.id}-${section.id}-heading-mobile`}
                      className="font-medium text-gray-900"
                    >
                      {section.name}
                    </p>
                    <ul
                      role="list"
                      aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                      className="mt-6 flex flex-col space-y-6"
                    >
                      {section.items.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-2 block p-2 text-gray-500"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          {navigationMenus.pages.map((page) => (
            <div key={page.name} className="flow-root">
              <a
                href={page.href}
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                {page.name}
              </a>
            </div>
          ))}
        </div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
              Sign in
            </a>
          </div>
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
              Create account
            </a>
          </div>
        </div>
      </DialogPanel>
    </div>
  );
};

export default MobileNavigationMenu;
