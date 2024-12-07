import { orderType } from "@/lib/typescript/types";
import React from "react";

interface OrderListItemHeaderActionsProps {
  order: orderType;
}

const OrderListItemHeaderActions = ({
  order,
}: OrderListItemHeaderActionsProps) => {
  return (
    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
      <a
        href={"#"}
        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span>View Order</span>
        <span className="sr-only">{order.orderId}</span>
      </a>
      <a
        href={"#"}
        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span>View Invoice</span>
        <span className="sr-only">for order {order.orderId}</span>
      </a>
    </div>
  );
};

export default OrderListItemHeaderActions;
