import type { Align, ColorTypes, Variant, Weight } from "./types";

import { ComponentPropsWithoutRef, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import * as s from "./typography.module.scss";

type Props = {
  align?: Align;
  asChild?: boolean;
  color?: ColorTypes;
  variant?: Variant;
  weight?: Weight;
} & ComponentPropsWithoutRef<"span">;

export const Typography = forwardRef<HTMLSpanElement, Props>(
  (
    {
      align = "inherit",
      asChild = false,
      className,
      color = "gray-10",
      variant = "regular14",
      weight = "regular",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";
    console.log(`color-${color}`);

    return (
      <Comp
        className={clsx(
          s[variant],
          s[`color-${color}`],
          align && s[`text-align-${align}`],
          weight && s[`font-weight-${weight}`],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
