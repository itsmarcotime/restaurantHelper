import React from "react";

function Navbar () {

    return (
        <section>
            <section className="navbar">
                <a href="/" className="navbar-item">Tables</a>
                <a href="/Menu" className="navbar-item">Menu</a>
                <a href="/About" className="navbar-item">About</a>
                <a href="/Contact" className="navbar-item">Contact</a>
            </section>
        </section>
    )
}

export default Navbar;