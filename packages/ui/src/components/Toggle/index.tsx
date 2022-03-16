import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './Toggle.styles';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  handleClick: (checked: boolean) => void;
  style?: React.CSSProperties;
  'data-event'?: string;
}

const Toggle = React.memo(
  React.forwardRef<HTMLButtonElement, ToggleProps>(
    ({ checked, handleClick, style, 'data-event': dataEvent, ...restProps }, ref) => (
      <Styled.Wrapper
        type="button"
        ref={ref}
        onClick={() => handleClick}
        style={style}
        data-event={dataEvent}
        {...restProps}
      >
        <Styled.Input type="checkbox" checked={checked} readOnly />
        <Styled.Background />
      </Styled.Wrapper>
    ),
  ),
);

export default Toggle;
