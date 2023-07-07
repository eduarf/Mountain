import { useState } from "react";
import "./Customize.scss";
import { BsFillPaletteFill } from "react-icons/bs";

const Customize = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`customize-container ${isOpen ? 'right-0' : ''}`}>
      <div className="icon-container" onClick={() => setIsOpen(!isOpen)}>
        <BsFillPaletteFill className="icon" />
        <span>Customize</span>
      </div>
    </div>
  );
};

export default Customize;

{/* <div className="customize-container">
<div className="customize" onClick={() => setIsOpen(!isOpen)}>
  <BsFillPaletteFill
    className="customize__icon"
  />
  <span>Customize</span>
</div>

{isOpen && <div className={`customize-colors ${isOpen ? 'w-100' : ''}`}></div>}
</div>
); */}