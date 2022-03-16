import React from 'react';
import * as Styled from './Dropdown.styles';
export declare type DropdownValue = number | string;
export declare type DropdownOption = {
    value?: DropdownValue;
    label: string;
};
export declare type DropdownProps = {
    options: DropdownOption[] | string[];
    value: DropdownValue;
    onChange: (value: DropdownValue | null) => void;
    size: Styled.DropdownSize;
    width: string;
    placeholder?: string;
    mustSelect?: boolean;
    cancelOption?: boolean;
    notScroll?: boolean;
    style?: React.CSSProperties;
    errorText?: string;
    tabletSimple?: boolean;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
