import React from 'react';
import * as Styled from './Toggle.styles';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
  'data-event'?: string;
};

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked, onChange, style, 'data-event': dataEvent, ...restProps }, ref) => (
    <Styled.Wrapper
      type="button"
      ref={ref}
      onClick={() => onChange(!checked)}
      style={style}
      data-event={dataEvent}
      {...restProps}
    >
      <Styled.Input type="checkbox" checked={checked} readOnly />
      <Styled.Background />
    </Styled.Wrapper>
  ),
);

export default React.memo(Toggle);
