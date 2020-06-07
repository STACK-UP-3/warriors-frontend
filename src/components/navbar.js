import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <nav className="nav-wrappper blue darken-3">
        <div className="section">
            <Link to='/' className='brand-logo'>BareFoot</Link>
            <Link to="#" data-target="slide-out" className="sidenav-trigger left"><i className="material-icons">menu</i></Link>
            <ul className="right">
                <li><Link to="#" className="hide-on-med-and-down"><i className="medium material-icons">home</i></Link></li>
                <li><Link to='#' className="left"><i className="medium material-icons">notifications</i></Link></li>
            </ul>
        </div>
    </nav>
) 