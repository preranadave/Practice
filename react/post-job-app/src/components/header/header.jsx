import React, { useState } from 'react'
import Logo from '../../assets/image/Logo.png'
import NavMenu from './NavMenu'
import BorderButton from '../buttons/BorderButton'
import PrimaryButton from '../buttons/PrimaryButton'
import '../../assets/css/header.css'
const menuItems = [
  { label: 'AI Cover Letter Generator', href: '#' },
  { label: 'Resume Generator', href: '#' },
  { label: 'Job Search', href: '#' }
];



const header = () => {
  const [navLinks, setNavLinks] = useState([]);
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="header">

        <button className="hamburger" onClick={toggleMenu}>
        ☰
        </button>
        <div className="nav-container">
          <h1 className="logo">
            <img src={Logo} alt="PostJob" />
            PostJob
          </h1>
          <NavMenu menuItems={menuItems} isOpen={isOpen}/>
        </div>
        <div className="action-buttons desktop-only">
          <BorderButton href="#">Sign-In</BorderButton>
          <PrimaryButton href="#">Get Started</PrimaryButton>
        </div>
      </header>
    </>
  )
}

export default header