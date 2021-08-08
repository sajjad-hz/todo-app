
function Input(props) {

  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={(e) => {
        props.title(e.target.value);
      }}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      maxLength= {props.maxLength}
    />
  );
}

export default Input;
