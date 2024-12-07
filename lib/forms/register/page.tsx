"use client";
import React from "react";
import TailwindInputLabel from "../common/InputLabel";
import TextInputFieldComponent from "@/lib/components/form-fields/TextInputField";
import { useForm } from "react-hook-form";
import { Box, Grid2 } from "@mui/material";
import TailWindButton from "@/lib/components/tailwind/Button";
import FormMobileInput from "@/lib/components/form-fields/PhoneInputField";

const RegisterForm = () => {
  const { control } = useForm();
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create an Account
        </h2>
        <form action="#" method="POST" className="space-y-3">
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 6, sm: 6, md: 8, lg: 6, xl: 6 }}>
              <TailwindInputLabel title="First Name" htmlFor="First Name" />
              <div className="mt-2">
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
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 6, md: 8, lg: 6, xl: 6 }}>
              <TailwindInputLabel title="Last Name" htmlFor="Last Name" />
              <div className="mt-2">
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
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TailwindInputLabel title="Phone Number" htmlFor="phone" />
              <div className="mt-2">
                <FormMobileInput
                  id="phone-input"
                  name="email"
                  control={control}
                  label=""
                  defaultValue=""
                  rules={{}}
                />
              </div>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TailwindInputLabel title="Email Address" htmlFor="email" />
              <div className="mt-2">
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
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TailwindInputLabel title="Password" htmlFor="password" />
              <div className="mt-2">
                <TextInputFieldComponent
                  id="password_input"
                  name="password"
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
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Box mt={1}>
                <TailWindButton
                  label="Create Account"
                  type="submit"
                  btmClassName="flex w-full justify-center rounded-md bg-primary-600 px-3 py-3 text-sm/6 font-semibold text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                />
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <p className="mt-5 text-center text-sm/6 text-gray-500">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-semibold text-primary-600 hover:text-primary-500"
                >
                  Sign in
                </a>
              </p>
            </Grid2>
          </Grid2>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
