import { useSelector } from "react-redux";
import {getAlltags, getListTags } from '../utils/TagsHandler'

const SelectOption = (props) => {

  const state = useSelector((state) => state.todo);

  let allTags = getAlltags(state)
  let listTags = getListTags(state, allTags)


  return (
    <select
      onChange={(e) => {
        props.tags(e.target.value);
      }}
    >
      <option></option>
      {listTags.map((tag, index) =>
        tag.length > 0 ? <option key={index}>{tag}</option> : null
      )}
    </select>
  );
};

export default SelectOption;
