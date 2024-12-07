"use client";
import React from "react";
import TextInputFieldComponent from "../../components/form-fields/TextInputField";
import { useForm } from "react-hook-form";
import TailWindButton from "../../components/tailwind/Button";
import TailwindInputLabel from "../common/InputLabel";
import {useRouter} from "next/navigation";
import { APP_ROUTES } from "@/lib/utils/routes";

const OtpSignInForm = () => {
  const { control } = useForm();
  const router = useRouter();
  const handleOtpVerify=()=>{
    router.push(APP_ROUTES.ACCOUNT_VERIFY_OTP);
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Sign In With OTP
        </h2>
        <p className="w-fulltext-sm font-normal mb-6 text-gray-800">Enter your email address to receive OTP</p>
        <form action="#" method="POST" className="space-y-4">
          <TailwindInputLabel title="Email address" htmlFor="email" />
          <div className="mt-6">
            <TextInputFieldComponent
              id="email_input"
              name="email"
              control={control}
              label=""
              defaultValue=""
              rules={{}}
              textFieldProps={{
                fullWidth: true,
                size: "small",
              }}
            />
          </div>
          <div className="mt-2">
            <TailWindButton
              label="Send OTP"
              type="button"
              onClick={()=>{
                handleOtpVerify();
              }}
              btmClassName="flex w-full justify-center rounded-md bg-primary-600 px-3 py-3 text-sm/6 font-semibold text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
            />
          </div>
        </form>
      </div>
      <p className="mt-5 text-center text-sm/6 text-gray-500">
        Not a member?{" "}
        <a
          href="#"
          className="font-semibold text-primary-600 hover:text-primary-500"
        >
          Signup
        </a>
      </p>
    </div>
  );
};

export default OtpSignInForm;
