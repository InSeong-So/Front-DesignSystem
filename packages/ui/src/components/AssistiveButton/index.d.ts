import React from 'react';
export declare type AssistiveButtonProps = {
    color: 'blue' | 'coral' | 'gray';
    text: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    isIconAfter?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    'data-event'?: string;
    style?: React.CSSProperties;
};
declare const AssistiveButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<AssistiveButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default AssistiveButton;
