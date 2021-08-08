import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../../utils/ColorPicker";
import {getAlltags, getListTags, getTagsCount } from '../../utils/TagsHandler';



const TagItems = () => {
    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
  
    let allTags = getAlltags(state)
    let listTags = getListTags(state, allTags)
    let tagsCount = getTagsCount(allTags,listTags)
  
    return (
        <ul className="tags">
          {listTags.map((tag, index) => (
            <li key={index} className="list-tags">
              <label>
                <input type="radio" name="li" />
                <span
                  className="list-tags__name"
                  onClick={() => {
                    dispatch({ type: "FILTER", payload: tag });
                  }}
                >
                  {tag}
                </span>
              </label>

              <div className="tags-right">
                <ColorPicker tag={tag} />

                <span
                  className="list-tags__count"
                >
                  {tagsCount[tag]}
                </span>
              </div>
            </li>
          ))}
        </ul>
    )
}

export default TagItems
