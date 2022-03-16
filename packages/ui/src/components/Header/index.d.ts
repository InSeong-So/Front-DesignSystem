import React from 'react';
export interface HeaderProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
