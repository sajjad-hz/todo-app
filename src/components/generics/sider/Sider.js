import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../../utils/ColorPicker";
import "./sider.scss";
import TagsAll from './TagsAll'
import TagItems from './TagItems'

function Sider() {
  

  return (
    <aside>
      <h1>Tasks</h1>
      <div className="side-menu">
      <TagsAll/>
      <TagItems/>
      </div>
    </aside>
  );
}

export default Sider;
