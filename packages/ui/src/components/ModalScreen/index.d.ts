import React from 'react';
export declare type ModalScreenProps = {
    mobileFullScreen?: boolean;
    close: () => void;
    children?: React.ReactChild[] | React.ReactChild;
    dataEventClose?: string;
    paddingZero?: boolean;
    noCloseButton?: boolean;
    style?: React.CSSProperties;
};
declare const _default: React.MemoExoticComponent<({ mobileFullScreen, close, style, children, dataEventClose, paddingZero, noCloseButton, }: ModalScreenProps) => JSX.Element>;
export default _default;
