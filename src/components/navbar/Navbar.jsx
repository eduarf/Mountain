import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import "./Navbar.scss";

const Navbar = () => {
  const { pathname } = useLocation();

  const CustomLink = ({ to, name }) => {
    return <Link to={to} className="link">{name}</Link>;
  };
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="svg-icon"></div>
      {/* Menu */}
      <div className="list">
        <CustomLink to='/' name='Home' />
        <CustomLink to='/about' name='About' />
        <CustomLink to='/services' name='Services' />
        <CustomLink to='/contact' name='Contact' />
        <Button buttonType="primary" name="Take Action" />
      </div>
    </nav>
  );
};

export default Navbar;
