import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import littleLemonLogo from '../../assets/images/littleLemonLogo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (anchor) => () => {
    const element = document.querySelector(`.${anchor}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const closeMenu = (e) => {
    if (e.target.tagName === 'A') {
      setMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="navbar-logo">
        <Link to="/">
          <img src={littleLemonLogo} alt="Little Lemon Logo" className="main-logo"/>
        </Link>
      </div>
      <ul className={`page-links-container ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="page-links-background" />
        <li className="page-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" onClick={handleClick("about-container")} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
          <Link to="/reservations" className={location.pathname === '/reservations' ? 'active' : ''}>Reservations</Link>
          <Link to="/order-online" className={location.pathname === '/order-online' ? 'active' : ''}>Order Online</Link>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        </li>
      </ul>
      <div className="icons-container">
        <Link aria-label="Basket">
          <svg className="basket-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#495E57">
            <path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z"/>
          </svg>
        </Link>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
