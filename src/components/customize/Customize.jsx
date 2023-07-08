import { useState } from "react";
import "./Customize.scss";
import { BsFillPaletteFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import ColorPalet from "../colorpalette/ColorPalet";
import { useDispatch } from "react-redux";
import { setTheme } from "../../features/theme/themeSlice";

const Customize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={`customize ${isOpen ? "right-0" : ""}`}>
      {/* Header */}
      <div className="customize__header">
        <h3>Mountain</h3>
        <ImCross className="icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
      {/*  */}
      {/* Palet */}
      <div className="default-container" onClick={() => dispatch(setTheme('default'))}>
        <span>Default Colors</span>
        <div className="default-palet">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="customize__palets">
        <ColorPalet
          primary="rgb(142,67,240)"
          secondary="rgb(99,0,226)"
          name="purple"
        />
        <ColorPalet
          primary="rgb(255,66,179)"
          secondary="rgb(255,0,153)"
          name="pink"
        />
        <ColorPalet
          primary="rgb(255,122,61)"
          secondary="rgb(255,81,0)"
          name="orange"
        />
        <ColorPalet primary="rgb(48,199,181)" secondary="rgb(0,172,151)"  name='green' />
        <ColorPalet primary="rgb(47,193,255)" secondary="rgb(8,172,242)" name='turquoise' />
        <ColorPalet primary="rgb(65,117,252)" secondary="rgb(8,74,243)" name='blue' />
        <ColorPalet primary="rgb(27,174,112)" secondary="rgb(6,117,46)" name='darkgreen' />
        <ColorPalet primary="rgb(249,195,73)" secondary="rgb(255,177,0)" name='yellow' />
        <ColorPalet primary="rgb(255,106,151)" secondary="rgb(250,3,107)" name='red' />
        <ColorPalet primary="rgb(239,77,72)" secondary="rgb(217,7,0)" name='darkred' />
      </div>
      {/*  */}
      <div className="icon-container" onClick={() => setIsOpen(!isOpen)}>
        <BsFillPaletteFill className="icon" />
        <span>Customize</span>
      </div>
    </div>
  );
};

export default Customize;
