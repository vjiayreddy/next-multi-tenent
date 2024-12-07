import React from "react";
import {
  Button as BaseButton,
  ButtonOwnerState,
  ButtonProps,
} from "@mui/base/Button";

const FormButton = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: (state: ButtonOwnerState) => ({
          className: `hover:text-cyan-500 transition-colors ${
            state.focusVisible ? "outline-0 ring-2 ring-cyan-500" : ""
          }`,
        }),
      }}
      ref={ref}
    />
  );
});

export default FormButton;
