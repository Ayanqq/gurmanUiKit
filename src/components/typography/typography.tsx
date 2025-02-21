import type { Align, ColorTypes, Size, Weight } from "./types";

import { ComponentPropsWithoutRef, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import s from "./typography.module.scss";

type Props = {
  align?: Align;
  asChild?: boolean;
  color?: ColorTypes;
  size?: Size;
  weight?: Weight;
} & ComponentPropsWithoutRef<"span">;

export const Typography = forwardRef<HTMLSpanElement, Props>(
  (
    {
      align = "inherit",
      asChild = false,
      className,
      color = "gray-10",
      size = "regular14",
      weight = "regular",
      ...props
    },

    ref
  ) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        className={clsx(
          s[size],
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
