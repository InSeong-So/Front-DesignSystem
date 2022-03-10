import Colors from '@constants/colors';
import { css } from 'styled-components';

enum ThemeEnum {
  dark = 'dark',
}

export enum ButtonKindEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

function getBackgroundColor(kind: any, theme: any) {
  if (theme === ThemeEnum.dark) {
    switch (kind) {
      case ButtonKindEnum.secondary:
        return Colors.gray2C;
      default:
        return Colors.blue6;
    }
  }

  switch (kind) {
    case ButtonKindEnum.primary:
      return Colors.blue6;
    case ButtonKindEnum.secondary:
      return Colors.gray0;
    case ButtonKindEnum.tertiary:
      return Colors.blueGray0;
    default:
      return Colors.blue6;
  }
}

function getFontColor(kind: any, theme: any) {
  if (theme === ThemeEnum.dark) {
    switch (kind) {
      case ButtonKindEnum.secondary:
        return Colors.blue6;
      default:
        return Colors.gray0;
    }
  }

  switch (kind) {
    case ButtonKindEnum.primary:
      return Colors.gray0;
    case ButtonKindEnum.secondary:
      return Colors.blue6;
    case ButtonKindEnum.tertiary:
      return Colors.gray7;
    default:
      return Colors.gray0;
  }
}

function getBorderCSS(kind: any) {
  if (kind === ButtonKindEnum.secondary) {
    return `1px solid ${Colors.blue6}`;
  }
  return null;
}

function getDisabledCSS(kind: any, theme: any) {
  if (theme === ThemeEnum.dark) {
    switch (kind) {
      case ButtonKindEnum.secondary:
        return css``;
      default:
        return css`
          opacity: 0.3;
        `;
    }
  }

  switch (kind) {
    case ButtonKindEnum.primary:
      return css`
        opacity: 0.3;
      `;
    case ButtonKindEnum.secondary:
      return css`
        opacity: 0.5;
      `;
    case ButtonKindEnum.tertiary:
      return css`
        color: ${Colors.gray3};
      `;
    default:
      return css`
        opacity: 0.3;
      `;
  }
}

function getHoverBorderCSS(kind: any) {
  if (kind === ButtonKindEnum.secondary) {
    return `1px solid ${Colors.blue7}`;
  }
  return null;
}

function getHoverBackgroundColor(kind: any, theme: any) {
  if (theme === ThemeEnum.dark) {
    switch (kind) {
      case ButtonKindEnum.secondary:
        return Colors.blue6Alpha;
      default:
        return Colors.blue7;
    }
  }

  switch (kind) {
    case ButtonKindEnum.primary:
      return Colors.blue7;
    case ButtonKindEnum.secondary:
      return Colors.blue0;
    case ButtonKindEnum.tertiary:
      return Colors.blueGray1;
    default:
      return Colors.blue7;
  }
}

function getButtonColorCSS(kind: any, theme: any, disabled: any) {
  return css`
    background-color: ${getBackgroundColor(kind, theme)};
    color: ${getFontColor(kind, theme)};
    border: ${getBorderCSS(kind)};
    ${disabled && getDisabledCSS(kind, theme)};

    ${!disabled &&
    css`
      &:hover {
        background-color: ${getHoverBackgroundColor(kind, theme)};
        border: ${getHoverBorderCSS(kind)};
      }
    `}
  `;
}

export default getButtonColorCSS;
