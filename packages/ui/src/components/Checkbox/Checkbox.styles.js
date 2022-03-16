"use strict";
// import Colors from '../../constants/colors';
// import styled from 'styled-components';
// export const CheckboxWrapper = styled.label`
//   position: relative;
//   display: inline-flex;
//   padding: 2px;
//   cursor: pointer;
//   color: ${Colors.gray7};
//   z-index: 0;
//   ${({ disabled }) =>
//     disabled &&
//     `
//     cursor: not-allowed;
//     opacity: 0.3;
//   `};
// `;
// export const CheckboxDescription = styled.div`
//   padding-left: 22px;
// `;
// export const CheckboxLabel = styled.span`
//   font-size: 14px;
//   line-height: 20px;
//   margin-left: 6px;
// `;
// export const CheckboxInput = styled.input`
//   display: none;
//   z-index: 1;
//   &:checked + label {
//     display: unset;
//   }
//   &:checked + span::after {
//     background-color: ${Colors.blue1};
//   }
//   & + span ::before {
//     position: absolute;
//     content: '';
//     display: block;
//     top: 2px;
//     left: 5px;
//     width: 5px;
//     height: 8px;
//     border-style: solid;
//     border-color: #fefefe;
//     border-width: 0 1px 1px 0;
//     transform: rotate(45deg) scale(1);
//     opacity: 0;
//   }
//   &:checked + span {
//     display: unset;
//     color: #fefefe;
//     border-color: ${Colors.blue6};
//     background: ${Colors.blue6};
//   }
//   &:checked + span::before {
//     opacity: 1;
//   }
// `;
// export const Checkbox = styled.span`
//   position: relative;
//   width: 16px;
//   height: 16px;
//   flex-shrink: 0;
//   margin-top: 2px;
//   border-radius: 3px;
//   border: 1px solid #656565;
//   transition: opacity 0.3s ease-in-out;
//   cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}
//   &::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 28px;
//     height: 28px;
//     border-radius: 50%;
//     background-color: #e8ecf2;
//     z-index: -1;
//     opacity: 0;
//   }
//   &:hover::after {
//     opacity: ${({ disabled }) => disabled && 1};
//   }
// `;
//# sourceMappingURL=Checkbox.styles.js.map