import React from 'react';
import './HomeContact.css';

export default function HomeContact() {

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
    )
}
