export declare type DropdownSize = 'small' | 'medium' | 'large' | 'tiny';
export declare const Column: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type DropdownWrapperProps = {
    size: DropdownSize | 'tiny';
    width: string;
    hasValue: boolean;
    active: boolean;
    showPlaceholder: boolean;
    hasError?: boolean;
};
export declare const DropdownWrapper: import("styled-components").StyledComponent<"button", any, DropdownWrapperProps, never>;
declare type ArrowProps = {
    $active: boolean;
    size?: DropdownSize | 'tiny';
};
export declare const Arrow: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, ArrowProps, never>;
declare type WEbOptionProps = {
    subOption?: boolean;
};
export declare const WebOption: import("styled-components").StyledComponent<"li", any, WEbOptionProps, never>;
declare type WebSelectProps = {
    notScroll: boolean;
    size: DropdownSize;
};
export declare const WebSelect: import("styled-components").StyledComponent<"ul", any, WebSelectProps, never>;
export declare const AsteriskWrapper: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const MobileOption: import("styled-components").StyledComponent<"option", any, {}, never>;
export declare const MobileSelect: import("styled-components").StyledComponent<"select", any, {}, never>;
export {};
