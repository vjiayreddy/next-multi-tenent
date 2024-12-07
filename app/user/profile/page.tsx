"use client";
import React, { Fragment, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import TailwindLoading from "@/lib/components/tailwind/Loading";
import useGetUserById from "@/lib/apollo/hooks/users/useGetUserById";
import { SAMPLE_USER_ID } from "@/lib/utils/constants";
import NextImage from "next/image";
import ProfileCoverView from "./_ProfileCoverView";
import ProfileDataEntity from "./_ProfileDataEntity";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
  const router = useRouter();
  const { GetUser, loadingGetUser, getUserErrorStatus, userData } =
    useGetUserById();
  useEffect(() => {
    GetUser({
      variables: {
        userId: SAMPLE_USER_ID,
      },
    });
  }, [router]);

  if (loadingGetUser && !getUserErrorStatus) {
    return <TailwindLoading />;
  }
  if (!loadingGetUser && getUserErrorStatus) {
    throw new Error(getUserErrorStatus.message);
  }

  if (!loadingGetUser && userData) {
    return (
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <ProfileCoverView image={userData?.images.profile as string} />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex size-24 rounded-full ring-4 ring-white sm:size-32 relative">
                <NextImage
                  fill={true}
                  alt="user_bg"
                  src={userData?.images.profile as string}
                  className="size-24 rounded-full ring-4 ring-white sm:size-32"
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                  <h1 className="truncate text-2xl font-bold text-gray-900">
                    {userData?.fullName}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="-ml-0.5 size-5 text-gray-400"
                    />
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {userData?.firstName} {userData?.lastName}
              </h1>
            </div>
            <div className="mx-auto mt-6 max-w-5xl  pb-5">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <ProfileDataEntity
                  title="Date Of Birth"
                  data={userData?.dateOfBirth?.timestamp}
                />
                <ProfileDataEntity
                  title="Verified Mobile"
                  data={userData?.isMobileVerified ? "Yes" : "No"}
                />
                <ProfileDataEntity
                  title="Email Verified"
                  data={userData?.isEmailVerified ? "Yes" : "No"}
                />
                <ProfileDataEntity
                  title="Member Segment"
                  data={userData?.customerSegment as string}
                />
                <ProfileDataEntity
                  title="Member Id"
                  data={userData?.customerSrNo.toString() as string}
                />
                <ProfileDataEntity
                  title="Phone No"
                  data={`+${userData?.countryCode} ${userData?.phone}`}
                />

                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd
                    dangerouslySetInnerHTML={{
                      __html: userData?.aboutMe || "NA",
                    }}
                    className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                  />
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Fragment />;
};

export default UserProfilePage;
