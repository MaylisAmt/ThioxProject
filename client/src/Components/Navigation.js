import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>About</li>
                </NavLink>
                <NavLink to='/galerie' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Photos</li>
                </NavLink>
                <NavLink to='/videos' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Videos</li>
                </NavLink>
                {/* <NavLink to='/contact' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink> */}
                <NavLink to='/devis' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Demande de devis</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;