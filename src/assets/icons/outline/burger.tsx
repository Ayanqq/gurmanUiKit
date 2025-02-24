import {Ref, SVGProps, forwardRef, memo} from "react";

const SvgComponent = (
    {height = 24, width = 24, ...rest}: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...rest}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 3.33333H0V0H28V3.33333Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 11.6666H0V8.33325H28V11.6666Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 20.0001H0V16.6667H28V20.0001Z" fill="white"/>
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
