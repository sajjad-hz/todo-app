import { useDispatch } from "react-redux";

import deleteIcon from "../files/icons/delete.png";


const CardsFooter = (props) => {
  const dispatch = useDispatch();

    const remove = (id) => {
        dispatch({ type: "DEL", payload: id });
      };

  return (
    <div className="card-footer">
      <img
        src={deleteIcon}
        alt=""
        onClick={() => {
          remove(props.todoash);
        }}
      />
      {props.tags ? (
        <span className="card-tag" style={{ backgroundColor: props.color }}>
          {props.tags}
        </span>
      ) : null}
    </div>
  );
};

export default CardsFooter;
