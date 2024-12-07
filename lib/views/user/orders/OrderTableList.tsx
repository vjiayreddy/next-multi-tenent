import React from "react";
import OrderTableHeader from "./OrderTableHeader";
import { orderType } from "@/lib/typescript/types";
import { cn } from "@/lib/utils/actions";
import moment from "moment";
import TailWindButton from "@/lib/components/tailwind/Button";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/lib/utils/routes";

interface OrderTableListProps {
  data: orderType[];
}

const OrderTableList = ({ data }: OrderTableListProps) => {
  const router = useRouter();
  return (
    <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <OrderTableHeader />
        <tbody>
          {data.map((order: orderType, orderIndex: number) => (
            <tr key={order._id}>
              <td
                className={cn(
                  orderIndex === 0 ? "" : "border-t border-transparent",
                  "relative py-4 pl-4 pr-3 text-sm sm:pl-6"
                )}
              >
                <div className="font-medium text-gray-900">
                  #{order.orderId}
                </div>
                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                  <span>
                    Order Date -{" "}
                    {moment(order.orderDateTime).format("MMM-DD-YYY")}
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span>{order.orderTotal}</span>
                </div>
                {orderIndex !== 0 ? (
                  <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
                ) : null}
              </td>
              <td
                className={cn(
                  orderIndex === 0 ? "" : "border-t border-gray-200",
                  "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                )}
              >
                {moment(order.orderDateTime).format("MMM-DD-YYY")}
              </td>
              <td
                className={cn(
                  orderIndex === 0 ? "" : "border-t border-gray-200",
                  "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                )}
              >
                {order.orderTotal}
              </td>
              <td
                className={cn(
                  orderIndex === 0 ? "" : "border-t border-gray-200",
                  "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                )}
              >
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Active
                </span>
              </td>
              <td
                className={cn(
                  orderIndex === 0 ? "" : "border-t border-transparent",
                  "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                )}
              >
                <TailWindButton
                  label="View"
                  onClick={() => {
                    router.push(`${APP_ROUTES.USER_ORDERS}/${order._id}`);
                  }}
                  btmClassName="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                ></TailWindButton>
                {orderIndex !== 0 ? (
                  <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTableList;
