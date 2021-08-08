import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.scss";
import Tags from "./Tags";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => setFocused(true);

  const onBlur = () => {
    setFocused(false);
    setTitle("");
    setText("");
    setTags("");
  };

  const idMaker = () => {
    return Math.floor(Math.random() * 100000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      text: text,
      tags: tags,
      todohash: idMaker(),
    };
    if (data.title.length > 0 || data.text.length > 0) {
      dispatch({ type: "ADD", payload: data });
    } else {
      alert("error");
    }
    onBlur();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className="form-title"
          placeholder="Title..."
          value={title}
          maxLength="24"
          title={setTitle}
          onFocus={handleFocus}
          {...props}
        />
        {focused ? (
          <>
            <Textarea
              className="form-text"
              placeholder="Task..."
              value={text}
              text={setText}
              {...props}
            />
            <div className="form-footer">
              <Tags
                {...props}
                tags={setTags}
                value={tags}
              />
              <div className="form-btns">
                <button onClick={onBlur}>Cancel</button>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Form;
