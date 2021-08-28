import React from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <div className='main-navbar'>
            <ul>
                <li><Link to='/home'>Start</Link></li>
                <li><Link to='/products'>Produkty</Link></li>
                <li><Link to='/news'>Nowości</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>
            </ul>
        </div>
    )
}
