// import React from 'react';
// import Group from './Group';
// import Radio from './Radio';
// import { RadioProps } from './@types';

// export type RadioValueType = number | string | boolean;
// export type RadioOption = {
//   value: RadioValueType;
//   label: string;
// };

// export type RadioGroupProps = {
//   options?: RadioOption[] | string[];
//   value: RadioValueType;
//   onChange: (value: RadioValueType) => void;
//   style?: React.CSSProperties;
//   children?: React.ReactChildren;
// };

// export type RadioProps = {
//   value: RadioValueType;
//   label?: string;
//   style?: React.CSSProperties;
// };

// interface CompoundedComponent
//   extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>> {
//   Group: typeof Group;
// }

// const Radio = Radio;
// Radio.Group = Group;

// export default Radio;
