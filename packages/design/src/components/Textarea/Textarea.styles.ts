import styled, { css } from 'styled-components';
import Colors from '@constants/colors';
import { getInputBorderColor, getInputColorCSS } from '@utils/index';
import { ThinScrollBar } from '@styles/index';

enum ThemeEnum {
  dark = 'dark',
}

enum InputStateEnum {
  inactive = 'inactive',
  active = 'active',
  focus = 'focus',
  error = 'error',
  disabled = 'disabled',
}

export const TextareaBorder = styled.div(
  ({ state, theme }: { state: keyof typeof InputStateEnum; theme?: keyof typeof ThemeEnum }) => css`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${getInputBorderColor(state, theme)};
    border-radius: 5px;
    ${state === InputStateEnum.disabled && 'cursor: not-allowed'};

    :not(:first-child) {
      margin-top: 8px;
    }
  `,
);

export const Textarea = styled.textarea(
  ({
    disabled,
    hasNotScrollBar,
    theme,
    height,
  }: {
    disabled?: boolean;
    hasNotScrollBar?: boolean;
    theme?: keyof typeof ThemeEnum;
    height: string;
  }) => css`
    width: 100%;
    height: ${height};
    padding: 10px 12px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    border-radius: 5px;
    ${ThinScrollBar};
    ${disabled && 'cursor: not-allowed'};
    ${hasNotScrollBar && `overflow: hidden;`}

    ${getInputColorCSS(theme, disabled)}
  `,
);

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

export const HelperText = styled.span(
  ({ error }: { error: boolean }) => css`
    margin-top: 4px;
    margin-left: 16px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${error ? Colors.error : Colors.gray7};
  `,
);

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

export const CharCount = styled.span(
  ({ error }: { error: boolean }) => css`
    color: ${error ? Colors.error : Colors.gray7};
  `,
);
