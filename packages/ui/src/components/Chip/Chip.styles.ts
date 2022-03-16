import Colors from '../../constants/colors';
import { text12 } from '../../constants/typograph';
import styled, { css } from 'styled-components';
export { ReactComponent as CloseIcon24 } from './static/icon-24-closeIcon.svg';

export const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseButtonWrapper = styled.button`
  margin-left: 4px;
  margin-right: 12px;
`;

type TextProps = {
  closeable: boolean
};

export const Text = styled.span<TextProps>`
  ${text12};
  color: ${Colors.blueGray6};
  ${({ closeable }) =>
    !closeable &&
    css`
      margin-right: 8px;
    `}
`;
