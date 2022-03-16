export declare const Label: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InnerLabel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SearchIcon: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {}, never>;
export declare const ErrorIcon: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {}, never>;
declare type InputWrapperProps = {
    width: string;
};
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, InputWrapperProps, never>;
declare type InputBorderProps = {
    state: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
    theme?: 'dark';
    height: string;
};
export declare const InputBorder: import("styled-components").StyledComponent<"div", any, InputBorderProps, never>;
declare type InputProps = {
    disabled: boolean;
    theme?: string;
    textAlignRight: boolean;
};
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export declare const InputContents: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const UnitText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
