import React from 'react';
import * as Styled from './AssistiveButton.styles';

export type AssistiveButtonProps = {
  color: 'blue' | 'coral' | 'gray';
  text: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  'data-event'?: string;
  style?: React.CSSProperties;
};

const IconBefore = ({
  text,
  Icon,
}: {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => (
  <Styled.IconWrapper>
    <Icon />
    <div>{text}</div>
  </Styled.IconWrapper>
);

const IconAfter = ({
  text,
  Icon,
}: {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => (
  <Styled.IconWrapper>
    <div>{text}</div>
    <Icon />
  </Styled.IconWrapper>
);

const AssistiveButton = React.memo(
  React.forwardRef<HTMLButtonElement, AssistiveButtonProps>(
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
  ),
);

export default AssistiveButton;
