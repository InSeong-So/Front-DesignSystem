import { ChipProps } from 'chip';
import React from 'react';
import * as Styled from './Chip.styles';

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <Styled.CloseButtonWrapper onClick={onClose} type="button">
    <Styled.CloseIcon24 />
  </Styled.CloseButtonWrapper>
);

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ text, closeable = false, onClose, style }, ref) => (
    <Styled.ChipWrapper ref={ref} style={style}>
      <Styled.Text closeable={closeable}>{text}</Styled.Text>
      {closeable && <CloseButton onClose={onClose} />}
    </Styled.ChipWrapper>
  ),
);

export default React.memo(Chip);
