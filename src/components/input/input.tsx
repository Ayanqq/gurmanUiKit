import React, { MouseEvent, useState } from "react";

import { clsx } from "clsx";

import s from "./input.module.scss";

import { EyeIcon } from "../../assets/icons/outline/index";

export type InputProps = React.ComponentProps<"input"> & {
  error?: string;
  label?: string;
  help?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, disabled, error, id, label, help, type, ...rest } =
      props;
    const classNames = clsx(s.input, error && s.inputError, className);
    const isPasswordType = type === "password";
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibilityHandler = (
      e: MouseEvent<HTMLButtonElement>
    ) => {
      e.preventDefault();
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className={clsx(s.wrapper, disabled && s.disabled)}>
        {label && (
          <label className={s.label} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={clsx(s.inputWrapper, !!label && s.withLabel)}>
          <input
            className={classNames}
            disabled={disabled}
            id={id}
            ref={ref}
            type={isPasswordType && isPasswordVisible ? "text" : type}
            {...rest}
          />
          {isPasswordType && (
            <button
              className={clsx(s.eyeButton, isPasswordVisible && s.eyeActive)}
              onClick={togglePasswordVisibilityHandler}
            >
              <EyeIcon />
            </button>
          )}
        </div>
        {help && <span className={s.helpText}>{help}</span>}
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    );
  }
);
