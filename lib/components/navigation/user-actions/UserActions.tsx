import React, { Fragment } from "react";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

interface NavActionIconsProps {
  onClickMenuIcon: () => void;
}

const TwUserActionsMenu = ({ onClickMenuIcon }: NavActionIconsProps) => {
  return (
    <Fragment>
      <div className="flex flex-1 items-center lg:hidden">
        <button
          type="button"
          onClick={onClickMenuIcon}
          className="-ml-2 rounded-md bg-white p-2 text-gray-400"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* Logo (lg-) */}
      <a href="#" className="lg:hidden">
        <span className="sr-only">Your Company</span>
        <img
          alt=""
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=primary&shade=600"
          className="h-8 w-auto"
        />
      </a>

      <div className="flex flex-1 items-center justify-end">
        <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
        </a>

        <div className="flex items-center lg:ml-8">
          <a href="#" className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              aria-hidden="true"
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
            <span className="sr-only">items in cart, view bag</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default TwUserActionsMenu;
