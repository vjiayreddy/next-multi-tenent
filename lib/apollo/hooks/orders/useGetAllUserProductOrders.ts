import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_ALL_USER_PRODUCT_ORDERS } from "../../queries/orders";
import { useEffect, useState } from "react";
import { SAMPLE_USER_ID } from "@/lib/utils/constants";
import { ERROR_TYPE, orderType } from "@/lib/typescript/types";
import { API_ERROR_STATUS } from "@/lib/typescript/enums";

const useGetAllUserProductOrders = () => {
  const [allUserOrders, setAllUserOrders] = useState<orderType[]>([]);
  const [errorGetAllUserProductOrders, setErrorGetAllUserProductOrders] =
    useState<ERROR_TYPE | null>(null);
  const [
    GetAllUserProductOrders,
    {
      loading: loadingGetAllUserProductOrders,
      data: dataGetAllUserProductOrders,
      error,
      networkStatus,
    },
  ] = useLazyQuery<
    { getAllUserProductOrders: orderType[] },
    { userId: string; page: number; limit: number }
  >(GET_ALL_USER_PRODUCT_ORDERS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    GetAllUserProductOrders({
      variables: {
        userId: SAMPLE_USER_ID,
        page: 1,
        limit: 100,
      },
    });
  }, []);

  useEffect(() => {
    if (networkStatus === NetworkStatus.ready) {
      if (dataGetAllUserProductOrders?.getAllUserProductOrders) {
        setAllUserOrders(dataGetAllUserProductOrders?.getAllUserProductOrders);
      }
    }
    if (networkStatus === NetworkStatus.error) {
      setErrorGetAllUserProductOrders({
        title: "Unable to load orders",
        message: "We couldn't load your orders. Please try again.",
        status: API_ERROR_STATUS.SERVER,
      });
    }
  }, [dataGetAllUserProductOrders, networkStatus, error]);

  return {
    GetAllUserProductOrders,
    allUserOrders,
    loadingGetAllUserProductOrders,
    errorGetAllUserProductOrders,
  };
};

export default useGetAllUserProductOrders;
