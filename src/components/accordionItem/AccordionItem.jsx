import { useState } from "react";
import "./Accordion.scss";
import { BiSolidUpArrow } from "react-icons/bi";

const AccordionItem = ({ header, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 style={{ color: isOpen ? "black" : "" }}>{header}</h2>
        {isOpen && <BiSolidUpArrow className="icon" />}
      </div>{" "}
      <div
        className={`accordion__description ${isOpen ? "accordion-open" : ""}`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
