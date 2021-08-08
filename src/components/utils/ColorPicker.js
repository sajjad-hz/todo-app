import { useState } from "react";
import { useDispatch } from "react-redux";

import colorIcon from "../files/icons/color.png";
import "./colorPicker.scss";

function ColorPicker(props) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const picker = (e) => {
    const data = {
      tags: props.tag,
      color: e.target.dataset.name,
    };
    console.log(data);
    dispatch({ type: "COLOR", payload: data });
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <span className='color'>
      <img
        className="color-icon"
        src={colorIcon}
        alt=""
        onClick={toggleActive}
      />
      {isActive ? (
        <div className="color-picker" onClick={toggleActive}>
          <span onClick={picker} data-name="peachpuff"></span>
          <span onClick={picker} data-name="salmon"></span>
          <span onClick={picker} data-name="khaki"></span>
          <span onClick={picker} data-name="orange"></span>
          <span onClick={picker} data-name="lightgreen"></span>
          <span onClick={picker} data-name="mediumseagreen"></span>
          <span onClick={picker} data-name="paleturquoise"></span>
          <span onClick={picker} data-name="lightskyblue"></span>
          <span onClick={picker} data-name="lavender"></span>
          <span onClick={picker} data-name="mediumpurple"></span>
          <span onClick={picker} data-name="plum"></span>
          <span onClick={picker} data-name="palevioletred"></span>
        </div>
      ) : (
        ""
      )}
    </span>
  );
}

export default ColorPicker;
