import Colors from '../constants/colors';
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["dark"] = "dark";
})(ThemeEnum || (ThemeEnum = {}));
var InputStateEnum;
(function (InputStateEnum) {
    InputStateEnum["inactive"] = "inactive";
    InputStateEnum["active"] = "active";
    InputStateEnum["focus"] = "focus";
    InputStateEnum["error"] = "error";
    InputStateEnum["disabled"] = "disabled";
})(InputStateEnum || (InputStateEnum = {}));
function getBorderColorByTheme(theme) {
    switch (theme) {
        case ThemeEnum.dark:
            return Colors.gray7;
        default:
            return Colors.blueGray2;
    }
}
export function getInputBorderColor(state, theme) {
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
//# sourceMappingURL=getInputBorderColor.js.map