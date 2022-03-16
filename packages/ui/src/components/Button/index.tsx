import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Button.styles';

enum ThemeEnum {
  dark = 'dark',
}

enum ButtonKindEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

enum ButtonSizeEnum {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type ButtonProps = {
  kind?: keyof typeof ButtonKindEnum;
  size?: keyof typeof ButtonSizeEnum;
  text?: string;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  to?: string;
  href?: string;
  'data-event'?: string;
  style?: React.CSSProperties;
  theme?: keyof typeof ThemeEnum;
};

const Loading = ({ kind }: { kind: keyof typeof ButtonKindEnum }) => (
  <Styled.LoadingWrapper>
    {kind === ButtonKindEnum.secondary ? <Styled.LoadingIconBlue /> : <Styled.LoadingIconWhite />}
  </Styled.LoadingWrapper>
);

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

const IconOnly = ({ Icon }: { Icon: React.FC<React.SVGProps<SVGSVGElement>> }) => (
  <Styled.IconWrapper>
    <Icon />
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      kind = ButtonKindEnum.primary,
      size = ButtonSizeEnum.large,
      text = '',
      block = false,
      disabled = false,
      loading = false,
      icon = null,
      isIconAfter = false,
      onClick,
      'data-event': dataEvent,
      style,
      theme,
      to,
      href,
      ...restProps
    },
    ref,
  ) => {
    let child: React.ReactChild;

    if (loading) {
      child = <Loading kind={kind} />;
    } else if (icon && !text) {
      child = <IconOnly Icon={icon} />;
    } else if (icon && !isIconAfter) {
      child = <IconBefore text={text} Icon={icon} />;
    } else if (icon && isIconAfter) {
      child = <IconAfter text={text} Icon={icon} />;
    } else {
      child = <>{text}</>;
    }

    let as: any = 'buttonComponent';
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
      <Styled.ButtonWrapper
        as={as}
        type={(as === 'buttonComponent' && 'buttonComponent') || undefined}
        kind={kind}
        size={size}
        icon-only={(icon && !text) || undefined}
        block={block || undefined}
        disabled={disabled}
        onClick={!loading ? onClick : undefined}
        data-event={dataEvent}
        style={style}
        ref={ref}
        theme={theme}
        {...linkAttr}
        {...aAttr}
        {...restProps}
      >
        {child}
      </Styled.ButtonWrapper>
    );
  },
);

export default React.memo(Button);
