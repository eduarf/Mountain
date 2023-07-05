import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header bg center">
      <h2>Multi-purpose Template</h2>
      <h1>Create Your Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="btn-container">
        <Button name='servives' buttonType='tertiary' />
        <Button name='about us' buttonType='secondary' />
      </div>
    </div>
  );
};

export default Header;
