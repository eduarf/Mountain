import "./Footer.scss";
import { AiFillFacebook, AiFillMail, AiFillTwitterSquare } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        {/* Adress */}
        <div className="footer__adress">
          <div className="svg-icon"></div>
          <h2>1600 Pennsylvania Ave Nw, Washington, Dc 20500</h2>
          <div className="icon-container">
              <AiFillFacebook className="icon" />
              <AiFillMail className="icon" />
              <AiFillTwitterSquare className="icon" />
          </div>
        </div>

        {/* About Us */}
        <div className="footer__about-us">
          <h2>About Us</h2>
          <ul>
            <li>Company Profile</li>
            <li>CSR Initiatives</li>
            <li>Read Articles</li>
            <li>Media Kit</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer__connect">
          <h2>Connect</h2>
          <ul>
            <li>Employee Portal</li>
            <li>Customer Portal</li>
            <li>Offices</li>
            <li>Know More</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2023 Mountain | Powered by Mountain</p>
      </div>
    </div>
  );
};

export default Footer;
