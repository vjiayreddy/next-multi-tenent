"use client";
import React from "react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { APP_ROUTES } from "@/lib/utils/routes";
import { cn } from "@/lib/utils/actions";
import NextLink from "next/link";

const secondaryNavigation = [
  {
    name: "Profile",
    href: APP_ROUTES.USER_PROFILE,
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "Orders",
    href: APP_ROUTES.USER_ORDERS,
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: "Appointments",
    href: APP_ROUTES.USER_APPOINTMENTS,
    icon: BellIcon,
    current: false,
  },
  {
    name: "Measurments",
    href: APP_ROUTES.USER_MEASURMENTS,
    icon: CubeIcon,
    current: false,
  },
  {
    name: "Settings",
    href: APP_ROUTES.USER_SETTINGS,
    icon: CreditCardIcon,
    current: false,
  },
];

const UserSideMenu = () => {
  return (
    <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
      <nav className="flex-none px-4 sm:px-6 lg:px-0">
        <ul
          role="list"
          className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
        >
          {secondaryNavigation.map((item) => (
            <li key={item.name}>
              <NextLink
                href={item.href}
                className={cn(
                  item.current
                    ? "bg-gray-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary-600",
                  "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm/6 font-semibold"
                )}
              >
                <item.icon
                  aria-hidden="true"
                  className={cn(
                    item.current
                      ? "text-primary-600"
                      : "text-gray-400 group-hover:text-primary-600",
                    "size-6 shrink-0"
                  )}
                />
                {item.name}
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default UserSideMenu;
