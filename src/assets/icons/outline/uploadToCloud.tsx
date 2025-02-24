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
    color="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12V20H11V12H13Z"
      fill="#A29FA1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2928 11.2929C11.6834 10.9024 12.3165 10.9024 12.7071 11.2929L15.7071 14.2929L14.2928 15.7071L12 13.4142L9.70706 15.7071L8.29285 14.2929L11.2928 11.2929Z"
      fill="#A29FA1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0625 4C8.3722 4 6.125 6.2796 6.125 9.175C6.125 9.2674 6.1273 9.35916 6.13184 9.4502C6.14548 9.72372 6.04635 9.99087 5.85758 10.1893C5.66882 10.3877 5.40694 10.5 5.13308 10.5H5.125C3.988 10.5 3 11.47 3 12.75C3 14.03 3.988 15 5.125 15H7V17H5.125C2.81022 17 1 15.0599 1 12.75C1 10.778 2.31933 9.07555 4.1456 8.61965C4.41885 4.94784 7.37844 2 11.0625 2C13.514 2 15.6511 3.31194 16.8813 5.26668C17.0237 5.25562 17.1676 5.25 17.3125 5.25C20.4902 5.25 23 7.91766 23 11.125C23 13.6109 21.5006 15.7594 19.3494 16.6118C18.8244 16.8609 18.2396 17 17.625 17H17V15H17.625C17.9425 15 18.2419 14.9269 18.5116 14.7955C18.5366 14.7833 18.5622 14.7721 18.5883 14.762C19.9796 14.2226 21 12.8113 21 11.125C21 8.94757 19.3124 7.25 17.3125 7.25C17.0532 7.25 16.8012 7.27797 16.5586 7.33088C16.1102 7.42869 15.6527 7.20866 15.4492 6.79726C14.619 5.11909 12.9544 4 11.0625 4Z"
      fill="#A29FA1"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
