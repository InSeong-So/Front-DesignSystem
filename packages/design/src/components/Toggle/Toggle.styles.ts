import styled from 'styled-components';
import Colors from '@constants/colors';

export const Wrapper = styled.button`
  position: relative;
  display: inline-block;
  width: 28px;
  height: 16px;
`;

export const Background = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #a5abba;
  transition: 0.4s;
  border-radius: 10px;

  &::before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: #fefefe;
    transition: 0.4s;
    box-sizing: border-box;
    border: 1px solid #e8ecf2;
    border-radius: 10px;
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + span {
    background-color: ${Colors.blue6};
  }

  &:checked + span::before {
    transform: translateX(12px);
  }
`;
