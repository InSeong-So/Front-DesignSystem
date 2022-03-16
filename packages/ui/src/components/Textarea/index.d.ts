import React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string;
    width: string;
    height?: string;
    label?: string;
    state?: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
    description?: string;
    placeholder?: string;
    helperText?: string;
    errorText?: string;
    charLimit?: number;
    mustInput?: boolean;
    disabled?: boolean;
    hasNotScrollBar?: boolean;
    onChange?: (e: React.ChangeEvent) => void;
    onFocus?: (e: React.ChangeEvent) => void;
    onBlur?: (e: React.ChangeEvent) => void;
    hasError?: boolean;
    style?: React.CSSProperties;
    theme?: string;
    defaultValue?: string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>>;
export default _default;
