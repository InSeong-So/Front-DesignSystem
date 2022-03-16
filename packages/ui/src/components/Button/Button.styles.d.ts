export { ReactComponent as LoadingIconBlue } from './static/icon-26-loading-blue.svg';
export { ReactComponent as LoadingIconWhite } from './static/icon-26-loading-white.svg';
declare enum ButtonKindEnum {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
declare enum ButtonSizeEnum {
    large = "large",
    medium = "medium",
    small = "small"
}
export declare const ButtonWrapper: import("styled-components").StyledComponent<"button", any, {
    kind: keyof typeof ButtonKindEnum;
    size: keyof typeof ButtonSizeEnum;
    'icon-only': boolean;
    disabled: boolean;
    block?: boolean | undefined;
    theme?: "dark" | undefined;
}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LoadingWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
