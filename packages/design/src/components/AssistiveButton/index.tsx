import React from 'react';
import * as Styled from './AssistiveButton.styles';

type AssistiveButtonProps = {
  color: 'blue' | 'coral' | 'gray';
  text: string;
  icon?: typeof React.Component;
  isIconAfter?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  'data-event'?: string;
  style?: React.CSSProperties;
};

const IconBefore = ({ text, Icon }: { text: string; Icon: typeof React.Component }) => (
  <Styled.IconWrapper>
    <Icon />
    <div>{text}</div>
  </Styled.IconWrapper>
);

const IconAfter = ({ text, Icon }: { text: string; Icon: typeof React.Component }) => (
  <Styled.IconWrapper>
    <div>{text}</div>
    <Icon />
  </Styled.IconWrapper>
);

const AssistiveButton = React.forwardRef<HTMLButtonElement, AssistiveButtonProps>(
  (
    {
      color,
      text = '',
      icon = null,
      isIconAfter = false,
      onClick,
      'data-event': dataEvent,
      style,
      ...restProps
    },
    ref,
  ) => {
    let child: React.ReactChild;

    if (icon && !isIconAfter) {
      child = <IconBefore text={text} Icon={icon} />;
    } else if (icon && isIconAfter) {
      child = <IconAfter text={text} Icon={icon} />;
    } else {
      child = <>{text}</>;
    }

    return (
      <Styled.AssistiveButtonWrapper
        type="button"
        color={color}
        onClick={onClick}
        data-event={dataEvent}
        style={style}
        ref={ref}
        {...restProps}
      >
        {child}
      </Styled.AssistiveButtonWrapper>
    );
  },
);

export default React.memo(AssistiveButton);
