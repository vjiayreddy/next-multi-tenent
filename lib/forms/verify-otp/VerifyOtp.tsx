"use client";
import React from "react";
import TailWindButton from "../../components/tailwind/Button";
import OtpInput from "react-otp-input";

const VerifyOtpForm = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">VerifyOtp</h2>
        <p className="w-full text-sm font-normal mb-6 text-gray-800">
          Your OTP has been sent to alex@gmail.com.
        </p>
        <form action="#" method="POST" className="space-y-4">
          <div className="mt-6">
            <OtpInput
              value={"123456"}
              onChange={() => {}}
              numInputs={6}
              containerStyle="w-full"
              inputStyle={{
                width: "100%",
                border: "1px solid #dfe4ea",
                borderRadius: "5px",
                height: 45,
              }}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="mt-2">
            <TailWindButton
              label="Send OTP"
              type="submit"
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

export default VerifyOtpForm;
