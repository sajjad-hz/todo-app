
const Textarea = (props) => {

  // *** to auto resize new input height based on user text
  const textareaResize = (e) => {
    let observe = function (element, event) {
      element.addEventListener("on" + event, resize);
    };

    let text1 = e.target;

    function resize() {
      text1.style.height = "auto";
      text1.style.height = text1.scrollHeight + "px";
    }

    observe(text1, "change");
    observe(text1, "cut");
    observe(text1, "paste");
    observe(text1, "drop");
    observe(text1, "keydown");

    resize();
  };

  return (
    <>
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.text(e.target.value);
          textareaResize(e);
        }}
      />
    </>
  );
};

export default Textarea;
