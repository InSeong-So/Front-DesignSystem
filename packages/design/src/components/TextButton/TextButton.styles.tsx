import styled from 'styled-components';
import Colors from '@constants/colors';

export const Wrapper = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  height: 40px;
  color: ${Colors.gray7};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 10px 12px;

  &:hover {
    background-color: ${Colors.blueGray0};
  }
`;

export const IconWrapper = styled.div`
  display: flex;

  & > :last-child {
    margin-left: 6px;
  }
`;
