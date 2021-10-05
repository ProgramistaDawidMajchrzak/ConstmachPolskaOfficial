import React from 'react';
import './Header.css';
import TopContactInfo from './TopContactInfo/TopContactInfo';
import Logo from './Logo.png';
import Slider from './Slider';

export default function Header() {

    
    return (
        <>
            <TopContactInfo />
            <div className="logo-container">
                <img className='header-logo' src={Logo} alt="logo" />
                <Slider />
            </div>
        </>
    )
}





