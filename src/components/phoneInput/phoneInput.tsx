import React, { MutableRefObject } from "react";
import {
  PhoneInput as PhoneInputComponent,
  PhoneInputRefType,
} from "react-international-phone";
import "react-international-phone/style.css";
import { clsx } from "clsx";

import s from "./phonInput.module.scss";

export type PhoneInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
};

export const PhoneInput = React.forwardRef<PhoneInputRefType, PhoneInputProps>(
  (props, ref) => {
    const { className, disabled, error, id, label, placeholder } = props;
    const classNames = clsx(s.input, error && s.inputError, className);

    return (
      <div className={clsx(s.wrapper, disabled && s.disabled)}>
        {label && (
          <label className={s.label} htmlFor={id}>
            {label}
          </label>
        )}

        <PhoneInputComponent
          className={classNames}
          defaultCountry="kz"
          inputRef={ref as MutableRefObject<HTMLInputElement>}
          disabled={disabled}
          placeholder={placeholder}
        />
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    );
  }
);
