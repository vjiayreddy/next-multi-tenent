import { orderType } from "@/lib/typescript/types";
import moment from "moment";
import React from "react";

interface OrderListItemHeaderProps {
  order: orderType;
}

const OrderListItemHeader = ({ order }: OrderListItemHeaderProps) => {
  return (
    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
      <div>
        <dt className="font-medium text-gray-900">Order number</dt>
        <dd className="mt-1 text-gray-500">{order.orderId}</dd>
      </div>
      <div className="hidden sm:block">
        <dt className="font-medium text-gray-900">Date placed</dt>
        <dd className="mt-1 text-gray-500">
          <time
            dateTime={moment(order.orderDateTime.timestamp).format(
              "MMM-DD-YYY"
            )}
          >
            {moment(order.orderDateTime.timestamp).format("MMM-DD-YYY")}
          </time>
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">Total amount</dt>
        <dd className="mt-1 font-medium text-gray-900">{order.orderTotal}</dd>
      </div>
    </dl>
  );
};

export default OrderListItemHeader;
