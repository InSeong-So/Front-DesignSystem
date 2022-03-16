import React from 'react';
declare enum ThemeEnum {
    dark = "dark"
}
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
export declare type ButtonProps = {
    kind?: keyof typeof ButtonKindEnum;
    size?: keyof typeof ButtonSizeEnum;
    text?: string;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    isIconAfter?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    to?: string;
    href?: string;
    'data-event'?: string;
    style?: React.CSSProperties;
    theme?: keyof typeof ThemeEnum;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
