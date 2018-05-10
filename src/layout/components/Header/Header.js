import React from 'react';
import './Header.scss';

const Header = ({ children }) => (
    <div className="container-fluid header sect">
        <div className="row header-in">
            {children}
        </div>
    </div>
);

export default Header;