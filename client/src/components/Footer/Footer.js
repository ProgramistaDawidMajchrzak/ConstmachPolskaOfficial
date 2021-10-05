import React from 'react';
import './Footer.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="about">
                <h3>CONSTMACH POLSKA</h3>
                <p>
                    jest polską firmą handlową specjalizującą się w sprzedaży oraz serwisie maszyn i urządzeń do produkcji betonu, kruszyw oraz bloczków i kostki betonowej</p>
            </div>
            <div>
                <div className="contact-localization">
                    <h3>Constmach Polska Sp. z o.o.</h3>
                    <p>ul.Obornicka 130</p>
                    <p>62-002 Suchy Las</p>
                    <div className="social-bar">
                        <FacebookIcon className='icon' />
                        <InstagramIcon className='icon' />
                        <LinkedInIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
