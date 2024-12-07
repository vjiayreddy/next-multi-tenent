import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import OrderItemListMenu from "./OrderListItemMenu";
import OrderListItemHeader from "./OrderListItemHeader";
import OrderListItemHeaderActions from "./OrderListItemHeaderActions";
import NextImage from "next/image";
import OrderListItemActions from "./OrderListItemActions";
import { orderType } from "@/lib/typescript/types";
import moment from "moment";

interface OrderListItemProps {
  order: orderType;
}

const OrderListItem = ({ order }: OrderListItemProps) => {
  return (
    <div
      key={order.orderId}
      className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
    >
      <h3 className="sr-only">
        Order placed on{" "}
        <time
          dateTime={moment(order.orderDateTime.timestamp).format("MMM-DD-YYY")}
        >
          {moment(order.orderDateTime.timestamp).format("MMM-DD-YYY")}
        </time>
      </h3>

      <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
        <OrderListItemHeader order={order} />
        <OrderItemListMenu order={order} />
        <OrderListItemHeaderActions order={order} />
      </div>

      {/* Products */}
      <h4 className="sr-only">Items</h4>
      <ul role="list" className="divide-y divide-gray-200">
        {order.items.map((product, index) => (
          <li key={`${product.name}-${index}`} className="p-4 sm:p-6">
            <div className="flex items-center sm:items-start">
              <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:size-20 relative">
                <NextImage
                  alt={product.name}
                  src={product?.images[0]}
                  fill={true}
                  className="size-full object-cover"
                />
              </div>
              <div className="ml-6 flex-1 text-sm">
                <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                  <h5>{product.name}</h5>
                  <p className="mt-2 sm:mt-0">{product.price}</p>
                </div>
                <p className="hidden text-gray-500 sm:mt-2 sm:block">
                  {product.price}
                </p>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:justify-between">
              <div className="flex items-center">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="size-5 text-green-500"
                />
                <p className="ml-2 text-sm font-medium text-gray-500">
                  Delivered on{" "}
                  <time dateTime={order.paidDateTime.timestamp}>
                    {moment(order.paidDateTime.timestamp).format('MMM-DD-YYY')}
                  </time>
                </p>
              </div>

              <OrderListItemActions product={product} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderListItem;
