import styled from 'styled-components';
import Colors from '../../constants/colors';
import { ReactComponent as Icon20Alert } from './static/icon-20-alert.svg';
import { ReactComponent as Icon24Search } from './static/icon-24-search.svg';
import { getInputBorderColor } from '../../utils/getInputBorderColor';
import { getInputColorCSS } from '../../utils/getInputColorCSS';

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${Colors.gray8};
`;

export const InnerLabel = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${Colors.blue6};
`;

export const IconWrapper = styled.div`
  margin-left: 12px;
`;

export const SearchIcon = styled(Icon24Search)`
  margin-right: 12px;
`;

export const ErrorIcon = styled(Icon20Alert)`
  margin-right: 12px;
`;

type InputWrapperProps = {
  width: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
`;

type InputBorderProps = {
  state: 'inactive' | 'active' | 'focus' | 'error' | 'disabled';
  theme?: 'dark';
  height: string;
};

export const InputBorder = styled.div<InputBorderProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: ${({ height }) => height};
  background-color: ${Colors.gray0};
  border: 1px solid ${({ state, theme }) => getInputBorderColor(state, theme as string)};
  border-radius: 5px;
  ${({ state }) => state === 'disabled' && `cursor: not-allowed;`};

  :not(:first-child) {
    margin-top: 8px;
  }
`;

type InputProps = {
  disabled: boolean;
  theme?: string;
  textAlignRight: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  border-radius: 5px;
  opacity: 1;
  ${({ textAlignRight }) => textAlignRight && 'text-align: right'};
  ${({ disabled }) => disabled && 'cursor: not-allowed'};
  ${({ theme, disabled }) => getInputColorCSS(theme as string, disabled)};
`;

export const InputContents = styled.div`
  width: 100%;
  margin: 0 12px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const UnitText = styled.span`
  margin-right: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.gray7};
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
