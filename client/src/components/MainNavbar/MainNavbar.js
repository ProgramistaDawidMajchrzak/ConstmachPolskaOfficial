import React from 'react';
import './MainNavbar.css';
import { NavLink } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <div className='main-navbar'>
            <ul>
                <li><NavLink exact={true} to='/home'>Start</NavLink></li>
                <li><NavLink to='/products'>Produkty</NavLink></li>
                <li><NavLink to='/news'>Nowości</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}
