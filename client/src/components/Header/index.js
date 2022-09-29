import React from 'react';

function Header() {

    return (
        <header>
            <nav>
                <div>

                    <ul>
                        <li>
                            <h1>
                                Restaunt Name goes here
                            </h1>
                        </li>
                    </ul>

                </div>

                <div>

                    <ul>
                        <li>
                            <a href="#lobby">Tables</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                    </ul>

                </div>

                <div>

                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>

            </nav>
        </header>
    );
}

export default Header;