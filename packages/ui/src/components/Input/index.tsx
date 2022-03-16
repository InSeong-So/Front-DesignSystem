import React, { InputHTMLAttributes } from 'react';
import * as Styled from './Input.styles';
import Asterisk from '../Asterisk';
import { HelperText } from '../../styles/HelperText';

type InputState = 'inactive' | 'active' | 'focus' | 'error' | 'disabled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
  width?: string;
  height?: string;
  label?: string;
  state?: InputState;
  description?: string;
  innerLabel?: string;
  placeholder?: string;
  autoComplete?: string;
  helperText?: string;
  errorText?: string;
  unitText?: string;
  mustInput?: boolean;
  hasError?: boolean;
  autoFocus?: boolean;
  textAlignRight?: boolean;
  disabled?: boolean;
  hasSearchIcon?: boolean;
  icon?: React.ReactSVGElement;
  style?: React.CSSProperties;
  theme?: 'dark';
  readOnly: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      type = 'text',
      width = '100%',
      height = '48px',
      label,
      state,
      description,
      innerLabel,
      placeholder,
      unitText,
      helperText,
      errorText,
      textAlignRight = false,
      mustInput = false,
      hasError = false,
      disabled = false,
      hasSearchIcon,
      icon,
      style,
      theme,
      autoComplete,
      ...props
    },
    ref,
  ) => {
    const hasFooterText = helperText || hasError;
    const showInnerLabel = innerLabel;
    const showSearchIcon = hasSearchIcon && !hasError;

    return (
      <Styled.InputWrapper width={width} style={style}>
        {label && (
          <>
            <Styled.Label>
              {label}
              {mustInput && <Asterisk />}
            </Styled.Label>
            {description && <Styled.Description>{description}</Styled.Description>}
          </>
        )}
        <Styled.InputBorder state={state as InputState} theme={theme} height={height}>
          {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
          <Styled.InputContents>
            {showInnerLabel && <Styled.InnerLabel>{innerLabel}</Styled.InnerLabel>}
            <Styled.Input
              {...props}
              ref={ref}
              value={value}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={disabled}
              theme={theme}
              autoComplete={autoComplete}
              textAlignRight={textAlignRight}
            />
          </Styled.InputContents>
          {unitText && <Styled.UnitText>{unitText}</Styled.UnitText>}
          {showSearchIcon && <Styled.SearchIcon />}
          {hasError && <Styled.ErrorIcon />}
        </Styled.InputBorder>
        {hasFooterText && (
          <HelperText error={hasError}>{hasError ? errorText : helperText}</HelperText>
        )}
      </Styled.InputWrapper>
    );
  },
);

export default Input;
