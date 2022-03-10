import Colors from '../constants/colors';
import { css } from 'styled-components';

enum ThemeEnum {
  dark = 'dark',
}

function getBackgroundColor(theme) {
  if (theme === ThemeEnum.dark) return Colors.gray4E;
  return Colors.gray0;
}

function getFontColor(theme, disabled) {
  if (disabled) return Colors.blueGray6;
  if (theme === ThemeEnum.dark) return Colors.gray0;
  return Colors.gray7;
}

function getPlaceholderColor(theme) {
  if (theme === ThemeEnum.dark) return Colors.gray86;
  return Colors.gray4;
}

export function getInputColorCSS(theme, disabled) {
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
