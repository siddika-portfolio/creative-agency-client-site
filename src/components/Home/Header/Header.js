import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className="header ">
            <div className="container">
                <Navbar />
                <HeaderMain />
            </div>

        </div>
    );
};

export default Header;