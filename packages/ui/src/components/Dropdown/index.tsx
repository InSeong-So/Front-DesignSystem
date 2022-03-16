import { HelperText } from '../../styles/HelperText';
import { isMobileOrTablet } from '../../utils/isMobileOrTablet';
import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Dropdown.styles';
import Asterisk from '../Asterisk';

export type DropdownValue = number | string;

export type DropdownOption = {
  value?: DropdownValue;
  label: string;
};

export type DropdownProps = {
  options: DropdownOption[] | string[];
  value: DropdownValue;
  onChange: (value: DropdownValue | null) => void;
  size: Styled.DropdownSize;
  width: string;
  placeholder?: string;
  mustSelect?: boolean;
  cancelOption?: boolean;
  notScroll?: boolean;
  style?: React.CSSProperties;
  errorText?: string;
  tabletSimple?: boolean;
};

const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      options,
      value,
      onChange,
      size,
      width = '100%',
      placeholder,
      mustSelect = false,
      notScroll = false,
      style,
      errorText,
    },
    ref,
  ) => {
    // constant
    const CANCEL_OPTION = 'cancel';

    // global states
    const dropdownRef = useRef<HTMLButtonElement>() as React.MutableRefObject<HTMLButtonElement>;

    // local methods
    const getValueFrom = (option: DropdownOption | string | null) => {
      if (!option) return '';
      return (typeof option === 'string' ? option : option.value) as DropdownValue;
    };

    const getLabelFrom = (option: DropdownOption | string | null) => {
      if (!option) {
        return null;
      }
      return typeof option === 'string' ? option : option.label;
    };

    // local states
    const [active, setActive] = useState(false);

    const hasValue = value !== null && value !== '';
    const showPlaceholder = placeholder && !hasValue;
    const hasAsterisk = showPlaceholder && mustSelect;
    const label =
      typeof options[0] !== 'string'
        ? (options as DropdownOption[]).find(
            option => option.value === value || parseInt(value as string, 10) === option.value,
          )?.label
        : value;

    // side effect
    useEffect(() => {
      if (!value && !placeholder) {
        const defaultValue = (
          typeof options[0] !== 'string' ? options[0].value : options[0]
        ) as DropdownValue;
        onChange(defaultValue);
      }
    }, [onChange, options, placeholder, value]);

    // useClickOutside(
    //   ref || dropdownRef,
    //   () => {
    //     setActive(false);
    //   },
    //   [],
    // );

    // render component
    const WebDropdownMenu = () => (
      <Styled.WebSelect size={size} notScroll={notScroll}>
        {!mustSelect && (
          <Styled.WebOption subOption onClick={() => onChange(null)}>
            {placeholder}
          </Styled.WebOption>
        )}
        {
          // eslint-disable-next-line react/prop-types
          options.map(option => (
            <Styled.WebOption
              key={typeof option === 'string' ? option : option.value}
              onClick={() => onChange(getValueFrom(option))}
            >
              {getLabelFrom(option)}
            </Styled.WebOption>
          ))
        }
      </Styled.WebSelect>
    );

    const MobileDropdownMenu = () => {
      const onChangeMobileOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue = e.target.value;
        if (targetValue === CANCEL_OPTION) {
          onChange(null);
        } else {
          onChange(targetValue);
        }
      };

      const onClickMobileSelect = (e: React.MouseEvent<HTMLSelectElement>) => {
        e.stopPropagation();
      };

      return (
        <Styled.MobileSelect
          defaultValue={value || CANCEL_OPTION}
          onChange={onChangeMobileOption}
          onClick={onClickMobileSelect}
        >
          {!mustSelect && (
            <Styled.MobileOption value={CANCEL_OPTION}>{placeholder}</Styled.MobileOption>
          )}
          {
            // eslint-disable-next-line react/prop-types
            options.map(option => (
              <Styled.MobileOption
                key={typeof option === 'string' ? option : option.value}
                value={getValueFrom(option)}
              >
                {getLabelFrom(option)}
              </Styled.MobileOption>
            ))
          }
        </Styled.MobileSelect>
      );
    };

    return (
      <Styled.Column>
        <Styled.DropdownWrapper
          type="button"
          ref={ref || dropdownRef}
          size={size}
          width={width}
          active={active}
          hasValue={hasValue}
          showPlaceholder={showPlaceholder as boolean}
          onClick={() => setActive(!active)}
          style={style}
          hasError={!!errorText}
        >
          <div>
            {showPlaceholder ? placeholder : label}
            {hasAsterisk && <Asterisk />}
          </div>
          <Styled.Arrow $active={active} size={size} />
          {isMobileOrTablet() || size === 'tiny' ? (
            <MobileDropdownMenu />
          ) : (
            active && <WebDropdownMenu />
          )}
        </Styled.DropdownWrapper>
        {errorText && <HelperText error>{errorText}</HelperText>}
      </Styled.Column>
    );
  },
);

export default React.memo(Dropdown);
