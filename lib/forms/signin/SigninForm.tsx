"use client";
import React from "react";
import TextInputFieldComponent from "../../components/form-fields/TextInputField";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TailWindButton from "../../components/tailwind/Button";
import GoogleIcon from "../../components/svg/GoogleIcon";
import { Icon } from "@iconify/react";
import OrDivider from "./OrDivider";
import TailwindInputLabel from "../common/InputLabel";
import TailwindLink from "@/lib/components/tailwind/Link";
import {useRouter} from "next/navigation";
import { APP_ROUTES } from "@/lib/utils/routes";

const SigninForm = () => {
  const { control } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const router = useRouter();

  const handleRoute=(url:string)=>{
    router.push(url)
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
        <form action="#" method="POST" className="space-y-3">
          <TailwindInputLabel title="Email address" htmlFor="email" />
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
          <div>
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
                  type: showPassword ? "text" : "password",
                  InputProps: {
                    endAdornment: (
                      <IconButton onClick={handleShowPassword} size="small">
                        {showPassword && <RemoveRedEyeIcon />}
                        {!showPassword && <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  },
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="size-4 rounded border-gray-300 text-secondary-600 focus:ring-secondary-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm/6 text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm/6">
              <TailwindLink
                href="#"
                title="Forgot password?"
                className="font-semibold"
              />
            </div>
          </div>

          <div>
            <TailWindButton
              label="Sign in"
              type="submit"
              btmClassName="flex w-full justify-center rounded-md bg-primary-600 px-3 py-3 text-sm/6 font-semibold text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"

            />
          </div>
        </form>

        <div>
          <OrDivider />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <TailWindButton icon={<GoogleIcon />} label="Google" btmClassName="px-3 py-3"/>
            <TailWindButton
              icon={<Icon icon="teenyicons:otp-outline" />}
              label="OTP"
              btmClassName="px-3 py-3"
              onClick={()=>handleRoute(APP_ROUTES.ACCOUNT_OTP_SIGNIN)}
            />
          </div>
        </div>
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

export default SigninForm;
