import React, { InputHTMLAttributes } from 'react';
declare type InputState = 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
    width?: string;
    height?: string;
    label?: string;
    state?: InputState;
    description?: string;
    innerLabel?: string;
    placeholder?: string;
    autoComplete?: string;
    helperText?: string;
    errorText?: string;
    unitText?: string;
    mustInput?: boolean;
    hasError?: boolean;
    autoFocus?: boolean;
    textAlignRight?: boolean;
    disabled?: boolean;
    hasSearchIcon?: boolean;
    icon?: React.ReactSVGElement;
    style?: React.CSSProperties;
    theme?: 'dark';
    readOnly: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
