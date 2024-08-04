import React, { useEffect, useRef } from "react";
import '../styling/header.css';
import littleLemonLogo from '../assets/images/littleLemonLogo.jpg';

const Header = () => {
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
    <header ref={headerRef}>
        <img id="main-image" src={littleLemonLogo} alt="Little Lemon Logo" />
        <nav>
            <ul>
                <li><a href="/#home" onClick={handleClick("")}>HOME</a></li>
                <li><a href="/#about" onClick={handleClick("")}>ABOUT</a></li>
                <li><a href="/#menu" onClick={handleClick("")}>MENU</a></li>
                <li><a href="/#reservations" onClick={handleClick("")}>RESERVATIONS</a></li>
                <li><a href="/#order-online" onClick={handleClick("")}>ORDER ONLINE</a></li>
                <li><a href="/#login" onClick={handleClick("")}>LOG IN</a></li>
            </ul>
        </nav>
    </header>

  );
};

export default Header;
