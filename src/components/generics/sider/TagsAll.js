
import { useSelector, useDispatch } from "react-redux";
import {getAlltags} from '../../utils/TagsHandler';

const TagsAll = () => {
    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const allTags = getAlltags(state)

  
    return (
      <div className="all-tags">
        <label>
          <input type="radio" name="li" defaultChecked />
          <h3
            className="all-tags__name"
            onClick={() => {
              dispatch({ type: "FILTER", payload: "" });
            }}
          >
            All Tasks
          </h3>
        </label>
        <span className="all-tags__count">{allTags.length}</span>
      </div>
    );
  };

export default TagsAll;
