import { useMemo } from 'react';

enum InputStateEnum {
  inactive = 'inactive',
  active = 'active',
  focus = 'focus',
  error = 'error',
  disabled = 'disabled',
}

interface Props {
  value?: string;
  hasError?: boolean;
  focus: boolean;
  disabled?: boolean;
}

const useInputState = ({ value, hasError, focus, disabled }: Props) =>
  useMemo(() => {
    if (disabled) return InputStateEnum.disabled;
    if (hasError) return InputStateEnum.error;
    if (focus) return InputStateEnum.focus;

    return value ? InputStateEnum.active : InputStateEnum.inactive;
  }, [value, hasError, focus, disabled]);

export default useInputState;
