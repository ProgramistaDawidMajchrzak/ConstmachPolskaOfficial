import React from 'react';
import './TopContactInfo.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function TopContactInfo() {
    return (
        <div className='top-contact-info'>
            <div className="social-bar">
                <FacebookIcon className='icon' />
                <InstagramIcon className='icon' />
                <LinkedInIcon className='icon' />
            </div>
            <div className="contact-bar">
                <div className="phone-bar">
                    <PhoneIcon className='icon' />
                    <p>123456789</p>
                </div>
                <div className="mail-bar">
                    <MailOutlineIcon className='icon' />
                    <p>biuro@constmachpolska.pl</p>
                </div>
            </div>
        </div>
    )
}
