import styled, { css } from 'styled-components';
import Colors from '../../constants/colors';

const colorModifier = {
  blue: css`
    color: ${Colors.blue6};
    background-color: ${Colors.blue0};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${Colors.blue1};
    }
  `,
  coral: css`
    color: ${Colors.coralPink};
    background-color: #fff5f5;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #ffe2e2;
    }
  `,
  gray: css`
    color: ${Colors.gray7};
    background-color: ${Colors.blueGray1};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${Colors.blueGray2};
    }
  `,
};

export const IconWrapper = styled.div`
  display: flex;

  & > :last-child {
    margin-left: 4px;
  }
`;

export const AssistiveButtonWrapper = styled.button`
  ${({ color }: { color: 'blue' | 'coral' | 'gray' }) => colorModifier[color]};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  height: 28px;
  border-radius: 5px;
  padding: 4px 8px;
`;
