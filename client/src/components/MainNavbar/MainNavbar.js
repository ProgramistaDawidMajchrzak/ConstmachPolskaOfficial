import React from 'react';
import './MainNavbar.css';
import { NavLink } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <div className='main-navbar'>
            <ul>
                <li><NavLink exact to='/'>Start</NavLink></li>
                <li><NavLink to='/products'>Produkty</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}
