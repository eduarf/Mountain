import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CustomLink = ({ to, name }) => {
    return (
      <Link to={to} className="link">
        {name}
      </Link>
    );
  };
  return (
    <div className="nav-container">
      <div className={`hamburger ${isOpen ? 'rotate-span' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isOpen ? 'top-zero' : ''}`}>
        {/* Logo */}
        <div className="svg-icon"></div>
        {/* Menu */}
        <div className="list">
          <CustomLink to="/" name="Home" />
          <CustomLink to="/about" name="About" />
          <CustomLink to="/services" name="Services" />
          <CustomLink to="/contact" name="Contact" />
          <Button buttonType="primary" name="Take Action" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
