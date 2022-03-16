import styled, { css } from 'styled-components';
import Colors from '../../constants/colors';

export const IconWrapper = styled.div`
  display: flex;

  & > :last-child {
    margin-left: 2px;
  }
`;

type Props = { disabled: boolean };

export const LinkButtonWrapper = styled.button<Props>`
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${({ disabled }) => (disabled ? Colors.gray3 : Colors.blue6)};
  text-decoration: ${({ disabled }) => !disabled && 'underline'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'not-allowed'};
  }
`;
