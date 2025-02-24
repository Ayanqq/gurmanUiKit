import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={width}
    height={height}
    ref={ref}
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H18C21.0376 0.5 23.5 2.96243 23.5 6V18C23.5 21.0376 21.0376 23.5 18 23.5H6C2.96243 23.5 0.5 21.0376 0.5 18V6Z"
      stroke="#D0CFD0"
    />
    <path
      d="M14 8L10 12L14 16"
      stroke="#A39FA2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
