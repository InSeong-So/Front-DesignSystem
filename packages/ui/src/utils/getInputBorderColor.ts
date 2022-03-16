import Colors from '../constants/colors';

enum ThemeEnum {
  dark = 'dark',
}

enum InputStateEnum {
  inactive = 'inactive',
  active = 'active',
  focus = 'focus',
  error = 'error',
  disabled = 'disabled',
}

function getBorderColorByTheme(theme: string) {
  switch (theme) {
    case ThemeEnum.dark:
      return Colors.gray7;

    default:
      return Colors.blueGray2;
  }
}

export function getInputBorderColor(state: string, theme: string) {
  switch (state) {
    case InputStateEnum.error:
      return Colors.error;
    case InputStateEnum.focus:
      return Colors.blue6;
    case InputStateEnum.disabled:
      return Colors.blueGray2;
    case InputStateEnum.inactive:
      return getBorderColorByTheme(theme);
    default:
      return getBorderColorByTheme(theme);
  }
}
