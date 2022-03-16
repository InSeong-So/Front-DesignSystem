"use strict";
// import { CheckboxGroupContext, CheckboxProps } from 'checkbox';
// import React, { useEffect } from 'react';
// const CheckboxGroupContext = React.createContext<CheckboxGroupContext>(null);
// type GroupCheckboxProps = {
//   Group?: typeof Group;
// };
// const Checkbox: React.FC<CheckboxProps | GroupCheckboxProps> = React.memo(
//   React.forwardRef<HTMLInputElement, CheckboxProps>(
//     (
//       {
//         checked: checkedProp,
//         value,
//         label = value,
//         disabled = false,
//         onChange: onChangeProp,
//         'data-event': dataEvent,
//         style,
//       },
//       ref,
//     ) => {
//       const checkboxGroup = React.useContext(CheckboxGroupContext);
//       const checked =
//         checkboxGroup && value ? checkboxGroup.value.indexOf(value) !== -1 : checkedProp;
//       // eslint-disable-next-line no-nested-ternary
//       const onChange = disabled
//         ? // eslint-disable-next-line no-empty-function
//           () => {}
//         : checkboxGroup
//         ? () => checkboxGroup?.onChange(value)
//         : onChangeProp;
//       useEffect(() => {
//         if (checkboxGroup && value) {
//           checkboxGroup.registerValue(value);
//         }
//       }, []);
//       return (
//         <Wrapper disabled={disabled} style={style} ref={ref}>
//           <Input
//             type="checkbox"
//             checked={checked}
//             onChange={onChange}
//             readOnly={disabled}
//             data-event={dataEvent}
//           />
//           <Check disabled={disabled} />
//           {label && <Label>{label}</Label>}
//         </Wrapper>
//       );
//     },
//   ),
// );
// export const CheckboxGroup = React.memo(
//   React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
//     ({ options = [], value = [], onChange: onChangeProp, children }, ref) => {
//       const [allValue, setAllValue] = React.useState([]);
//       const parsedOptions = options?.map(option => {
//         if (typeof option === 'string') {
//           return {
//             label: option,
//             value: option,
//           };
//         }
//         return option;
//       });
//       const registerValue = val => {
//         setAllValue(prev => [...prev, val]);
//       };
//       const onChange = (targetValue: CheckboxValueType) => {
//         const optionIndex = value.indexOf(targetValue);
//         const nextValue = [...value];
//         if (optionIndex === -1) {
//           nextValue.push(targetValue);
//         } else {
//           nextValue.splice(optionIndex, 1);
//         }
//         onChangeProp?.(
//           nextValue
//             .filter(val => allValue.indexOf(val) !== -1)
//             .sort((a, b) => {
//               const indexA = parsedOptions.findIndex(opt => opt.value === a);
//               const indexB = parsedOptions.findIndex(opt => opt.value === b);
//               return indexA - indexB;
//             }),
//         );
//       };
//       const renderCheckbox = () => {
//         let childrenToRender = children;
//         if (options && options.length > 0) {
//           childrenToRender = parsedOptions.map(option => (
//             <Checkbox
//               key={option.value.toString()}
//               checked={value?.indexOf(option.value) !== -1}
//               value={option.value}
//               label={option.label}
//             />
//           ));
//         }
//         return <>{childrenToRender}</>;
//       };
//       const context = {
//         value,
//         registerValue,
//         onChange,
//       };
//       return (
//         <CheckboxGroupContextProvider ref={ref} value={context}>
//           {renderCheckbox()}
//         </CheckboxGroupContextProvider>
//       );
//     },
//   ),
// );
// const TypeCheckbox = Checkbox;
// TypeCheckbox.Group = CheckboxGroup;
// export default TypeCheckbox;
//# sourceMappingURL=Checkbox.js.map