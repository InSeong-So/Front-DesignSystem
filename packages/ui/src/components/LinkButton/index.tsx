import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './LinkButton.styles';

export type LinkButtonProps = {
  text: string;
  href?: string;
  to?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
  'data-event'?: string;
};

const IconBefore = ({ text, Icon }: { text: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }) => (
  <Styled.IconWrapper>
    <Icon />
    <div>{text}</div>
  </Styled.IconWrapper>
);

const IconAfter = ({ text, Icon }: { text: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }) => (
  <Styled.IconWrapper>
    <div>{text}</div>
    <Icon />
  </Styled.IconWrapper>
);

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      text = '',
      href = undefined,
      to = undefined,
      icon = null,
      isIconAfter = false,
      onClick,
      disabled = false,
      style,
      'data-event': dataEvent,
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

    let as: any = 'button';
    let linkAttr = {};
    let aAttr = {};
    if (to) {
      as = Link;
      linkAttr = { to };
    } else if (href) {
      as = 'a';
      aAttr = {
        href,
        target: '_blank',
        rel: 'noreferrer',
      };
    }

    return (
      <Styled.LinkButtonWrapper
        as={as}
        type={as === 'button' && 'button'}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        style={style}
        data-event={dataEvent}
        {...linkAttr}
        {...aAttr}
      >
        {child}
      </Styled.LinkButtonWrapper>
    );
  },
);

export default React.memo(LinkButton);
