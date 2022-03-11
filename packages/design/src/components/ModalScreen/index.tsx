import React from 'react';
import * as Styled from './ModalScreen.styles';

type ModalWrapperProps = {
  mobileFullScreen?: boolean;
  close: () => void;
  children?: React.ReactChildren | React.ReactChild[] | React.ReactChild;
  dataEventClose?: string;
  paddingZero?: boolean;
  noCloseButton?: boolean;
  style?: React.CSSProperties;
};

const CloseButton = ({
  mobileFullScreen,
  onClick,
  dataEvent,
}: {
  mobileFullScreen?: boolean;
  onClick: () => void;
  dataEvent?: string;
}) => (
  <Styled.CloseButtonWrapper
    onClick={onClick}
    mobileFullScreen={mobileFullScreen}
    data-event={dataEvent}
  >
    <Styled.Icon24CloseWhite />
    <Styled.Icon24CloseBlack />
  </Styled.CloseButtonWrapper>
);

const ModalWrapper = ({
  mobileFullScreen,
  close,
  style,
  children,
  dataEventClose,
  paddingZero,
  noCloseButton,
}: ModalWrapperProps) => (
  <Styled.Background
    onClick={e => {
      if (!noCloseButton && e.target === e.currentTarget) {
        close();
      }
    }}
    data-event={dataEventClose}
  >
    <Styled.ModalScreenWrapper
      mobileFullScreen={mobileFullScreen}
      paddingZero={paddingZero}
      style={style}
    >
      {!noCloseButton && (
        <CloseButton
          mobileFullScreen={mobileFullScreen}
          onClick={close}
          dataEvent={dataEventClose}
        />
      )}
      {children}
    </Styled.ModalScreenWrapper>
  </Styled.Background>
);

export default React.memo(ModalWrapper);
