import React from 'react';
import './Header.css';
import TopContactInfo from '../TopContactInfo/TopContactInfo';
// import Logo from './constmach-polska-logo';


export default function Header() {
    return (
        <div>
            <TopContactInfo />
            {/* <Logo /> */}
            <div className="logo">LOGO</div>
        </div>
    )
}
