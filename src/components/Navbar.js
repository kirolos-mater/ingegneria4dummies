import React from 'react';

const Navbar = () => {
    return(
        
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Ingegneria spiegata in modo semplice</a>
            </div>
            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i class="material-icons right">arrow_drop_down</i></a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;