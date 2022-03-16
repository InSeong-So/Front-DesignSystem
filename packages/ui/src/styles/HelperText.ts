import styled, { css } from 'styled-components';
import Colors from '../constants/colors';

interface Props {
  error: boolean;
}

export const HelperText = styled.span<Props>`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  ${({ error }) => css`
    color: ${error ? Colors.error : Colors.gray7};
  `}
`;
