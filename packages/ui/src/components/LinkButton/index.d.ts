import React from 'react';
export declare type LinkButtonProps = {
    text: string;
    href?: string;
    to?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    isIconAfter?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    style?: React.CSSProperties;
    'data-event'?: string;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
