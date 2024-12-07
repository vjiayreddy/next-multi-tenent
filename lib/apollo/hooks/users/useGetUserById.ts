import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER_BY_ID } from "../../queries/user";
import { userDataType, ERROR_TYPE } from "@/lib/typescript/types";
import { API_ERROR_STATUS } from "@/lib/typescript/enums";

const useGetUserById = () => {
  const [getUserErrorStatus, setGetUserErrorStatus] =
    useState<ERROR_TYPE | null>(null);
  const [userData, setUserData] = useState<userDataType | null>(null);
  const [
    GetUser,
    {
      loading: loadingGetUser,
      data: dataGetUser,
      error: errorGetUser,
      networkStatus,
    },
  ] = useLazyQuery<{ user: userDataType }, { userId: string }>(GET_USER_BY_ID, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (networkStatus === NetworkStatus.ready) {
      setUserData(dataGetUser?.user as userDataType);
    }
    if (networkStatus === NetworkStatus.error) {
      setGetUserErrorStatus({
        title: "Unable to load profile",
        message: "We couldn't load your profile information. Please try again.",
        status: API_ERROR_STATUS.SERVER,
      });
    }
  }, [networkStatus, errorGetUser]);

  return {
    GetUser,
    loadingGetUser,
    getUserErrorStatus,
    userData,
  };
};

export default useGetUserById;
