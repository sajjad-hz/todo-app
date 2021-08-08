import Todos from "../../todos/index";
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <ul className="todos-list">
        <Todos />
      </ul>
    </div>
  );
};

export default Home;
