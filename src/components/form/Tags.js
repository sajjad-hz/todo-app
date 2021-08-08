
import SelectOption from "./SelectOption";
import "./Tags.scss";

function Tags(props) {
  return (
    <div className={`tags-container ${props.className}`}>
      <input
        className="tags-text"
        placeholder="Tag name..."
        type="text"
        name="tag-text"
        maxLength="20"
        value={props.value}
        onChange={(e) => {
          props.tags(e.target.value);
        }}
      />
      <SelectOption tags={props.tags} />
    </div>
  );
}

export default Tags;
