"use client";
import React, { Fragment, useEffect } from "react";
import useGetAllUserProductOrders from "@/lib/apollo/hooks/orders/useGetAllUserProductOrders";
import { SAMPLE_USER_ID, DATA_RECORDS_LIMIT } from "@/lib/utils/constants";
import TailwindLoading from "@/lib/components/tailwind/Loading";
import OrderTableList from "./OrderTableList";

const OrdersList = () => {
  const {
    GetAllUserProductOrders,
    loadingGetAllUserProductOrders,
    errorGetAllUserProductOrders,
    allUserOrders,
  } = useGetAllUserProductOrders();

  useEffect(() => {
    GetAllUserProductOrders({
      variables: {
        limit: DATA_RECORDS_LIMIT,
        page: 1,
        userId: SAMPLE_USER_ID,
      },
    });
  }, []);

  if (loadingGetAllUserProductOrders) {
    return <TailwindLoading />;
  }

  if (errorGetAllUserProductOrders) {
    throw new Error(errorGetAllUserProductOrders.message);
  }

  if (allUserOrders.length > 0) {
    return (
      <>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                My Orders
              </h1>
            </div>
          </div>
          <OrderTableList data={allUserOrders} />
        </div>
      </>
    );
  }
  return <Fragment />;
};

export default OrdersList;
