import React from 'react';
import './Header.css';
import TopContactInfo from './TopContactInfo/TopContactInfo';
import Logo from './Logo.png'


export default function Header() {
    return (
        <div>
            <TopContactInfo />
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                <div className="slider">SLIDER</div>
            </div>
        </div>
    )
}
