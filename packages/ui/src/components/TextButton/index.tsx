import React from 'react';
import * as Styled from './TextButton.styles';

// @see: https://stackoverflow.com/questions/31815633/what-does-the-error-jsx-element-type-does-not-have-any-construct-or-call
interface IconProps {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type TextButtonProps = {
  text: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  'data-event'?: string;
  style?: React.CSSProperties;
};

const IconBefore = ({ text, Icon }: IconProps) => (
  <Styled.IconWrapper>
    <Icon />
    <div>{text}</div>
  </Styled.IconWrapper>
);

const IconAfter = ({ text, Icon }: IconProps) => (
  <Styled.IconWrapper>
    <div>{text}</div>
    <Icon />
  </Styled.IconWrapper>
);

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
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
      <Styled.Wrapper
        type="button"
        onClick={onClick}
        data-event={dataEvent}
        style={style}
        ref={ref}
        {...restProps}
      >
        {child}
      </Styled.Wrapper>
    );
  },
);

export default React.memo(TextButton);
