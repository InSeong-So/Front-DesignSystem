declare module 'chip' {
  import React from "react";
  export type ChipProps = {
    text: string;
    closeable?: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
  };
}

declare module 'checkbox' {
  import React from "react";

  export type CheckboxValueType = string | number;

  export type CheckboxOptionType = {
    value: CheckboxValueType;
    label?: string;
  };

  export type CheckboxProps = {
    checked?: boolean;
    value?: CheckboxValueType;
    label?: string | React.ReactNode;
    description?: string;
    disabled?: boolean;
    onChange?: () => void;
    'data-event'?: string;
    style?: React.CSSProperties;
  };

  export type CheckboxGroupProps = {
    value: CheckboxValueType[];
    options?: CheckboxOptionType[] | string[];
    onChange: (value: any) => void;
    style?: React.CSSProperties;
    children?: React.ReactChild;
  };

  export type CheckboxGroupContext = {
    value: CheckboxValueType[];
    onChange: (value: CheckboxValueType) => void;
    registerValue: (value: CheckboxValueType) => void;
  };
}
