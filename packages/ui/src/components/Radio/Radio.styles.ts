import Colors from '../../constants/colors';
import styled from 'styled-components';

export const RadioWrapper = styled.label`
  height: 20px;
  display: flex;
  align-content: center;
  cursor: pointer;
`;

export const Label = styled.span`
  width: 100%;
  display: flex;
  margin-left: 8px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${Colors.gray7};
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;

  /* change hover background-color  */
  &:checked + span::after {
    background-color: ${Colors.blue1};
  }

  /* check design */
  &:checked + span::before {
    display: unset;
  }

  &:checked + span {
    border: 1px solid ${Colors.blue6};
  }
`;

export const Check = styled.span`
  position: relative;
  top: 2px;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 1px solid ${Colors.gray7};
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  /* hover background */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${Colors.blueGray1};
    z-index: -1;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  /* check design */
  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${Colors.blue6};
  }
`;
