import React from 'react';
export declare type TextButtonProps = {
    text: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    isIconAfter?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    'data-event'?: string;
    style?: React.CSSProperties;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<TextButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
