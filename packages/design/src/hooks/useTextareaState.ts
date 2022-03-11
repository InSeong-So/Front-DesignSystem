import { useMemo } from 'react';

export const TextareaState = {
  inactive: 'inactive',
  active: 'active',
  focus: 'focus',
  error: 'error',
  disabled: 'disabled',
};

const useTextareaState = ({
  value,
  hasError,
  focus,
  disabled,
}: {
  value?: string;
  hasError?: boolean;
  focus: boolean;
  disabled?: boolean;
}) =>
  useMemo(() => {
    if (disabled) {
      return TextareaState.disabled;
    }
    if (hasError) {
      return TextareaState.error;
    }
    if (focus) {
      return TextareaState.focus;
    }
    return value ? TextareaState.active : TextareaState.inactive;
  }, [value, hasError, focus, disabled]);

export default useTextareaState;
