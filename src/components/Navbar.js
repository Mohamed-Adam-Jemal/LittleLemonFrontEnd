import React, { useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import littleLemonLogo from '../assets/images/littleLemonLogo.jpg';

const Navbar = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) return;

      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)"; // Show header
      } else {
        headerElement.style.transform = "translateY(-100%)"; // Hide header
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      <div className="NavBarlogo">
        <img src={littleLemonLogo} alt="Little Lemon Logo" className="main-logo"/>
      </div>
      <ul className="page-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>

  );
};

export default Navbar;
