import "./Button.scss";
const Button = ({ buttonType, name }) => {
  return <button className={`${buttonType} button`}>{name}</button>;
};

export default Button;
