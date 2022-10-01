import React from 'react';
import Navbar from '../Navbar';

function Header() {

    return (
        <section className='header'>
            <section className='more-header'>
                <section className='header-name'>
                    <a href="/" className='header-rest-name'>Restaurant Name</a>
                </section>
                <section className='header-navbar'>
                    <Navbar />
                </section>
                <section className='header-bottom'>
                </section>
            </section>
        </section>
    );
}

export default Header;