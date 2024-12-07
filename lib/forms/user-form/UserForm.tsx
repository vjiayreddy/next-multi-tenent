"use client";
import React, { Fragment, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useForm } from "react-hook-form";
import TailwindInputLabel from "../common/InputLabel";
import TextInputFieldComponent from "@/lib/components/form-fields/TextInputField";
import TailwindLoading from "@/lib/components/tailwind/Loading";
import useGetUserById from "@/lib/apollo/hooks/users/useGetUserById";
import { SAMPLE_USER_ID } from "@/lib/utils/constants";

const UserForm = () => {
  const { control } = useForm();
  const { GetUser, loadingGetUser, getUserErrorStatus, userData } =
    useGetUserById();
  useEffect(() => {
    GetUser({
      variables: {
        userId: SAMPLE_USER_ID,
      },
    });
  }, []);

  if (loadingGetUser && !userData && !getUserErrorStatus) {
    return <TailwindLoading />;
  }

  if (!loadingGetUser && !userData && getUserErrorStatus) {
    throw new Error(getUserErrorStatus.message);
  }
  if (!loadingGetUser && userData && !getUserErrorStatus) {
    return (
      <>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TailwindInputLabel
                      htmlFor="first-name"
                      title="First Name"
                      className="block text-sm/6 font-medium text-gray-900"
                    />
                    <div className="mt-2">
                      <TextInputFieldComponent
                        defaultValue={userData?.firstName || ""}
                        label=""
                        id="input-first-name"
                        control={control}
                        name="firstName"
                        textFieldProps={{
                          fullWidth: true,
                          size: "small",
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <TailwindInputLabel
                      htmlFor="last-name"
                      title="Last Name"
                      className="block text-sm/6 font-medium text-gray-900"
                    />
                    <div className="mt-2">
                      <TextInputFieldComponent
                        defaultValue={userData?.lastName || ""}
                        label=""
                        id="input-last-name"
                        control={control}
                        name="lastName"
                        textFieldProps={{
                          fullWidth: true,
                          size: "small",
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <TailwindInputLabel
                      htmlFor="email-address"
                      title="Email Address"
                      className="block text-sm/6 font-medium text-gray-900"
                    />
                    <div className="mt-2">
                      <TextInputFieldComponent
                        defaultValue={userData?.email || ""}
                        label=""
                        id="input-email"
                        control={control}
                        name="email"
                        textFieldProps={{
                          fullWidth: true,
                          size: "small",
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      About
                    </label>
                    <div className="mt-2">
                      <TextInputFieldComponent
                        defaultValue={userData?.aboutMe || ""}
                        label=""
                        id="input-aboutMe"
                        control={control}
                        name="aboutMe"
                        textFieldProps={{
                          fullWidth: true,
                          size: "small",
                          multiline: true,
                          rows: 4,
                        }}
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-600">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      aria-hidden="true"
                      className="size-12 text-gray-300"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </>
    );
  }
  return <Fragment />;
};

export default UserForm;
