import React from 'react';
import './Contact.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        // emailjs.sendForm('service_fa2r0jy', 'template_7ctey1i', e.target, 'user_L1OauPxwE4IkKaDjV2sYM')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset();
    }

    return (
        <div className='contact-container'>
            <div className="contact-localization">
                <h3>Constmach Polska Sp. z o.o.</h3>
                <p>ul.Obornicka 130</p>
                <p>62-002 Suchy Las</p>
                <div className="social-bar">
                    <FacebookIcon className='icon' />
                    <InstagramIcon className='icon' />
                    <LinkedInIcon className='icon' />
                </div>
                <br />
                <h3>Grzegorz Czaplicki - Przedstawiciel Handlowy</h3>
                <div className="phone-bar">
                    <PhoneIcon className='icon' />
                    <p>123456789</p>
                </div>
                <div className="mail-bar">
                    <MailOutlineIcon className='icon' />
                    <p>biuro@constmachpolska.pl</p>
                </div>

            </div>
            <div className="contact-form">



                <form className='home-contact-form' action='' onSubmit={sendEmail}>

                    <div className="home-contact-flex">
                        <div className="home-contact-form-element">
                            <label htmlFor='Imię'>Imię</label>
                            <input id='Imię' type='text' name='Imię' />
                        </div>
                        <div className="home-contact-form-element">
                            <label htmlFor='Nazwa Firmy'>Nazwa Firmy</label>
                            <input id='Nazwa Firmy' type='text' name='Firma' />
                        </div>
                    </div>

                    <div className="home-contact-flex">
                        <div className="home-contact-form-element">
                            <label htmlFor='E-mail'>E-mail</label>
                            <input id='E-mail' type='text' name='E-mail' />
                        </div>
                        <div className="home-contact-form-element">
                            <label htmlFor='Telefon'>Telefon</label>
                            <input id='Telefon' type='text' name='Telefon' />
                        </div>
                    </div>
                    <div className="home-contact-form-element-textarea">
                        <label htmlFor="Wiadomość">Wiadomość</label>
                        <textarea className='textarea' id="Wiadomość" cols="30" rows="10" name="Wiadomość" ></textarea>
                    </div>
                    <input className='home-contact-form-btn' type="submit" value='Wyślij' />
                </form>

            </div>
        </div>
    )
}
