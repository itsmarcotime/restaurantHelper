import React from "react";

function Navbar () {

    return (
        <section>
            <section className="navbar">
                <a href="/" className="navbar-item">Tables</a>
                <a href="/menu" className="navbar-item">Menu</a>
                <a href="/about" className="navbar-item">About</a>
                <a href="/contact" className="navbar-item">Contact</a>
            </section>
        </section>
    )
}

export default Navbar;