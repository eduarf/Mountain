import { useDispatch } from "react-redux";
import "./ColorPalet.scss";
import { setTheme } from "../../features/theme/themeSlice";
const ColorPalet = ({ primary, secondary, name }) => {
  const dispatch = useDispatch();
  console.log(name);
  return (
    <div className="palet-container" onClick={() => dispatch(setTheme(name))}>
      <div style={{ backgroundColor: `${primary}` }}></div>
      <div style={{ backgroundColor: `${secondary}` }}></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ColorPalet;
