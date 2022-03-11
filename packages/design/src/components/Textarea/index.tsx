import React, { useRef, useState } from 'react';
import useInputState from '../../hooks/useInputState';
import * as Styled from './Textarea.styles';

enum ThemeEnum {
  dark = 'dark',
}

interface CharLimitProps {
  length: number;
  charLimit: number;
  error: boolean;
}

type TextareaProps = {
  value: string;
  width: string;
  height?: string;
  label?: string;
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
  theme?: keyof typeof ThemeEnum;
  defaultValue?: string;
};

const Asterisk = React.memo(() => <Styled.AsteriskWrapper>*</Styled.AsteriskWrapper>);

const CharLimit = ({ length, charLimit, error }: CharLimitProps) =>
  React.useMemo(
    () => (
      <Styled.CharLimitWrapper>
        <Styled.CharCount error={error}>{length || 0}</Styled.CharCount>/{charLimit}자
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
      hasError: hasErrorProp,
      theme,
      defaultValue,
      ...restProps
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const [focus, setFocus] = useState(false);
    const [length, setLength] = useState(defaultValue?.length || 0);

    const hasError = hasErrorProp || !!(charLimit && length > charLimit);
    const hasFooterText = helperText || hasError;

    const state = useInputState({
      value: value || innerRef?.current?.value || ref?.current?.value, // inputRef?.current?.value: 비제어컴포넌트 value
      hasError,
      focus,
      disabled,
    });

    const inputRef = React.useMemo(
      () =>
        typeof ref === 'function'
          ? e => {
              ref(e);
              innerRef.current = e;
            }
          : ref,
      [ref],
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        setLength(e.target.value?.length || 0);

        if (typeof onChange === 'function') {
          onChange(e);
        }
      }
    };

    const handleFocus = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        if (typeof onFocus === 'function') {
          onFocus(e);
        }
        setFocus(true);
      }
    };

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        if (typeof onBlur === 'function') {
          onBlur(e);
        }
        setFocus(false);
      }
    };

    return (
      <Styled.TextareaWrapper width={width} style={style}>
        {label && (
          <>
            <Styled.LabelWrapper>
              <Styled.Label>
                {label}
                {mustInput && <Asterisk />}
              </Styled.Label>
              {charLimit && <CharLimit length={length} charLimit={charLimit} error={hasError} />}
            </Styled.LabelWrapper>
            {description && <Styled.Description>{description}</Styled.Description>}
          </>
        )}
        <Styled.TextareaBorder state={state} theme={theme}>
          <Styled.Textarea
            ref={inputRef}
            height={height}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={disabled}
            hasNotScrollBar={hasNotScrollBar}
            theme={theme}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
        </Styled.TextareaBorder>
        {hasFooterText && (
          <Styled.HelperText error={hasError}>
            {hasError ? errorText : helperText}
          </Styled.HelperText>
        )}
      </Styled.TextareaWrapper>
    );
  },
);

export default React.memo(Textarea);
