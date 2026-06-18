import React, { useState } from 'react';
import BorderButton from '../buttons/BorderButton';
import PrimaryButton from '../buttons/PrimaryButton';

const NavMenu = ({ menuItems, isOpen }) => {
    return (
        <>
            <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
                <div className="action-buttons mobile-only">
                    <BorderButton href="#">Sign-In</BorderButton>
                    <PrimaryButton href="#">Get Started</PrimaryButton>
                </div>
            </nav>
        </>
    )
}

export default NavMenu