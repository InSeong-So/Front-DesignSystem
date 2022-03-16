import Asterisk from '../Asterisk';
import { HelperText } from '../../styles/HelperText';
import React from 'react';
import * as Styled from './Textarea.styles';
interface CharLimitProps {
  length?: number;
  charLimit: number;
  error: boolean;
}
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  width: string;
  height?: string;
  label?: string;
  state?: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
  description?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  charLimit?: number;
  mustInput?: boolean;
  disabled?: boolean;
  hasNotScrollBar?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  onFocus?: (e: React.ChangeEvent) => void;
  onBlur?: (e: React.ChangeEvent) => void;
  hasError?: boolean;
  style?: React.CSSProperties;
  theme?: string;
  defaultValue?: string;
}

const CharLimit = ({ length = 0, charLimit, error }: CharLimitProps) =>
  React.useMemo(
    () => (
      <Styled.CharLimitWrapper>
        <Styled.CharCount error={error}>{length}</Styled.CharCount>/{charLimit}자
      </Styled.CharLimitWrapper>
    ),
    [length, charLimit, error],
  );

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      width = '100%',
      height = '168px',
      label,
      state = 'inactive',
      description,
      placeholder,
      helperText,
      errorText,
      charLimit,
      disabled = false,
      mustInput = false,
      onChange,
      onFocus,
      onBlur,
      style,
      hasNotScrollBar,
      hasError = false,
      theme,
      defaultValue,
      ...restProps
    },
    ref,
  ) => {
    const hasFooterText = helperText || hasError;

    return (
      <Styled.TextareaWrapper width={width} style={style}>
        {label && (
          <>
            <Styled.LabelWrapper>
              <Styled.Label>
                {label}
                {mustInput && <Asterisk />}
              </Styled.Label>
              {charLimit && (
                <CharLimit
                  charLimit={charLimit}
                  length={(ref as React.MutableRefObject<HTMLTextAreaElement>).current.value.length}
                  error={hasError}
                />
              )}
            </Styled.LabelWrapper>
            {description && <Styled.Description>{description}</Styled.Description>}
          </>
        )}
        <Styled.TextareaBorder state={state} theme={theme}>
          <Styled.Textarea
            ref={ref}
            height={height}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={disabled}
            hasNotScrollBar={hasNotScrollBar}
            theme={theme}
            {...restProps}
          />
        </Styled.TextareaBorder>
        {hasFooterText && (
          <HelperText error={hasError}>{hasError ? errorText : helperText}</HelperText>
        )}
      </Styled.TextareaWrapper>
    );
  },
);

export default React.memo(Textarea);
