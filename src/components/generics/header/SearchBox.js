import { useState } from "react";

import { _SEARCH } from "../../files/icons/icons";
import "./SearchBox.scss";

const SearchBox = () => {
  const [bordered, setBordered] = useState({});

  const handleFocus = () => {
    setBordered({ border: "solid 1px #eee" ,boxShadow: '0px 0px 10px 0px #ddd'} );
  };

  const handleBlur = () => {
    setBordered(null);
  };

  return (
    <div className="search-box" style={bordered}>
      {_SEARCH}
      <input
      
        onFocus={handleFocus}
        onBlur={handleBlur}
        
        name=""
        className="search-box__input"
        placeholder="Search Tasks"
      />
    </div>
  );
};

export default SearchBox;
