import React from 'react';
import * as Styled from './Asterisk.styles';

const Asterisk = ({ text = '' }: { text?: string }) => (
  <Styled.AsteriskWrapper>* {text}</Styled.AsteriskWrapper>
);

export default React.memo(Asterisk);
