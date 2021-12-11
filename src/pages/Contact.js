import React from 'react';

const Contact = () => {
    return (
        <div className='contact-app'>
            <div className='banner-contact'>
                <h1>CONTACT</h1>
            </div>
            <div className='contact-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.0073605268235!2d4.346317315112388!3d50.849547966409126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c387bcff947b%3A0xaa5608c86fb3bf24!2sSuperDragonToys!5e0!3m2!1sfr!2sbe!4v1639256632867!5m2!1sfr!2sbe" title="unique title" width="600" height="450" loading="lazy"></iframe>
                <div className='contact-text'>
                    <h3>Send us your message</h3>
                    <form>
                        <input type="text" placeholder='Full Name' /> <br />
                        <input type="text" placeholder='Phone Number' /> <br />
                        <input type="text" placeholder='Email Address' /> <br />
                        <textarea cols="51" rows="5" placeholder='Message...'></textarea>
                    </form>
                        <button className='btn-contact'>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;