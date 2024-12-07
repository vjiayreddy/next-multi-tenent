import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { orderType } from "@/lib/typescript/types";

interface OrderItemListMenuProps {
  order: orderType;
}

const OrderItemListMenu = ({ order }: OrderItemListMenuProps) => {
  return (
    <Menu as="div" className="relative flex justify-end lg:hidden">
      <div className="flex items-center">
        <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Options for order {order.orderId}</span>
          <EllipsisVerticalIcon aria-hidden="true" className="size-6" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href={"#"}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              View
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href={"#"}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Invoice
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default OrderItemListMenu;
