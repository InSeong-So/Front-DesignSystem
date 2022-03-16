import Colors from '../constants/colors';
import { css } from 'styled-components';

enum ThemeEnum {
  dark = 'dark',
}

function getBackgroundColor(theme: string) {
  if (theme === ThemeEnum.dark) return Colors.gray4E;
  return Colors.gray0;
}

function getFontColor(theme: string, disabled: boolean) {
  if (disabled) return Colors.blueGray6;
  if (theme === ThemeEnum.dark) return Colors.gray0;
  return Colors.gray7;
}

function getPlaceholderColor(theme: string) {
  if (theme === ThemeEnum.dark) return Colors.gray86;
  return Colors.gray4;
}

export function getInputColorCSS(theme: string, disabled: boolean) {
  return css`
    background-color: ${getBackgroundColor(theme)};
    color: ${getFontColor(theme, disabled)};
    /* required on iOS */
    -webkit-text-fill-color: ${getFontColor(theme, disabled)};

    ::placeholder {
      color: ${getPlaceholderColor(theme)};
    }
  `;
}
