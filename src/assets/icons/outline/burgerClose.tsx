import {Ref, SVGProps, forwardRef, memo} from "react";

const SvgComponent = (
    {height = 24, width = 24, ...rest}: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...rest}>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.833008 15.8401L15.8399 0.833252L17.1663 2.15969L2.15944 17.1666L0.833008 15.8401Z" fill="#3E0930"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M17.1665 15.8401L2.15961 0.833252L0.83317 2.15969L15.8401 17.1666L17.1665 15.8401Z" fill="#3E0930"/>
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
