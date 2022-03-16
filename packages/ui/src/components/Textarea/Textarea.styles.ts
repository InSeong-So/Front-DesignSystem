import styled, { css } from 'styled-components';
import Colors from '../../constants/colors';
import { getInputBorderColor, getInputColorCSS } from '../../utils/index';
import { ThinScrollBar } from '../../styles/index';

type TextareaBorderProps = {
  state: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
  theme?: string;
};

export const TextareaBorder = styled.div<TextareaBorderProps>`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ state, theme }) => getInputBorderColor(state, theme as string)};
  border-radius: 5px;
  ${({ state }) => state === 'disabled' && 'cursor: not-allowed'};

  :not(:first-child) {
    margin-top: 8px;
  }
`;

type TextareaProps = {
  disabled?: boolean;
  hasNotScrollBar?: boolean;
  theme?: string;
  height: string;
};

export const Textarea = styled.textarea<TextareaProps>`
  width: 100%;
  height: ${({ height }) => height};
  padding: 10px 12px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  border-radius: 5px;
  ${ThinScrollBar};
  ${({ disabled }) => disabled && 'cursor: not-allowed'};
  ${({ hasNotScrollBar }) => hasNotScrollBar && `overflow: hidden;`}
  ${({ theme, disabled }) => getInputColorCSS(theme as string, disabled as boolean)}
`;

export const TextareaWrapper = styled.div(
  ({ width }: { width: string }) => css`
    width: ${width};
    display: flex;
    flex-direction: column;
  `,
);

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${Colors.gray8};
`;

export const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${Colors.gray7};
`;

export const AsteriskWrapper = styled.span`
  color: ${Colors.error};
`;

export const CharLimitWrapper = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${Colors.gray7};
  margin-top: 4px;
`;

type CharCountProps = {
  error: boolean;
};

export const CharCount = styled.span<CharCountProps>`
  color: ${({ error }) => (error ? Colors.error : Colors.gray7)};
`;
