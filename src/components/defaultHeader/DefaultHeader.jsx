import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./DefaultHeader.scss";
const DefaultHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="default-header">
      <Navbar />
      <h1 className="path">{path.slice(1)}</h1>
    </div>
  );
};

export default DefaultHeader;
