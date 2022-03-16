"use strict";
// import React from 'react';
// import { RadioGroupContextProvider } from './Context';
// import Radio from './Radio';
// import { RadioGroupProps, RadioValueType } from './@types';
// const RadioGroup = React.forwardRef(
//   ({ options, value, onChange: onChangeProp, children }: RadioGroupProps, ref) => {
//     const onChange = (targetValue: RadioValueType) => {
//       if (targetValue !== value) {
//         onChangeProp?.(targetValue);
//       }
//     };
//     const renderRadioButtons = () => {
//       let childrenToRender: React.ReactNode = children;
//       if (options && options.length > 0) {
//         childrenToRender = options.map(option => {
//           if (typeof option === 'string') {
//             return <Radio key={option} value={option} label={option} />;
//           }
//           // { value: string, label: string }
//           return <Radio key={option.value} value={option.value} label={option.label} />;
//         });
//       }
//       return <>{childrenToRender}</>;
//     };
//     return (
//       <RadioGroupContextProvider
//         ref={ref}
//         value={{
//           value,
//           onChange,
//         }}
//       >
//         {renderRadioButtons()}
//       </RadioGroupContextProvider>
//     );
//   },
// );
// export default React.memo(RadioGroup);
//# sourceMappingURL=Group.js.map