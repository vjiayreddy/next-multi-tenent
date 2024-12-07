"use client";
import React, { useState } from "react";
import MegaMenu from "./mega-menus";
import { Dialog, DialogBackdrop } from "@headlessui/react";
import MobileNavigation from "./mobile-menu";
import TwUserActionsMenu from "./user-actions/UserActions";
// import TwMobileNavigationMenu from "./mobile-menu";
// import { Dialog, DialogBackdrop } from "@headlessui/react";
// import TwUserActionsMenu from "./user-actions/UserActions";

const NavigationComponent = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="bg-white sticky top-0 z-40">
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=primary&shade=600"
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>
                  <MegaMenu />
                  <TwUserActionsMenu
                    onClickMenuIcon={() => {
                      setOpenMobileMenu(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {openMobileMenu && (
        <Dialog
          open={openMobileMenu}
          onClose={() => {
            setOpenMobileMenu(false);
          }}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <MobileNavigation
            onClickCloseIcon={() => {
              setOpenMobileMenu(false);
            }}
          />
        </Dialog>
      )}
    </div>
  );
};

export default NavigationComponent;
