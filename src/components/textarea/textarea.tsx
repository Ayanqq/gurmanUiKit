import { ComponentPropsWithoutRef, forwardRef } from "react";

import clsx from "clsx";

import s from "./textarea.module.scss";

type TextareaType = {
  disabled?: boolean;
  error?: boolean;
  help?: string;
  errorText?: string;
  labelText?: string;
  placeholder?: string;
  value?: string;
} & ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(
  (
    {
      className,
      disabled,
      error,
      errorText,
      labelText,
      placeholder,
      value,
      help,
      ...rest
    },
    ref
  ) => {
    const classNames = clsx(
      s.textarea,
      error && s.error,
      help && s.help,
      className
    );

    return (
      <div className={s.container}>
        <label
          className={`${s.labelTextArea} ${disabled ? s.disabledLabel : ""}`}
        >
          {labelText}
        </label>
        <textarea
          className={classNames}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          value={value}
          {...rest}
        />
        {help ? <label className={s.helpText}> {help} </label> : ""}
        {error ? <label className={s.errorText}> {errorText} </label> : ""}
      </div>
    );
  }
);
