import React, { ButtonHTMLAttributes } from 'react';
export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    checked: boolean;
    handleClick: (checked: boolean) => void;
    style?: React.CSSProperties;
    'data-event'?: string;
}
declare const Toggle: React.MemoExoticComponent<React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>>;
export default Toggle;
