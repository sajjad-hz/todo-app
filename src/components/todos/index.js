import "./index.scss";
import { useSelector } from "react-redux";
import Cards from "./Cards";

function Todos() {
  const todos = useSelector((state) => state.todo);
  const filteredState = useSelector((state) => state.filter);

  if (filteredState.length > 0) {
    return (
      <div className="todos">
        {todos.map((todo) =>
          todo.tags === filteredState ? (
            <Cards
              title={todo.title}
              text={todo.text}
              key={todo.todoash}
              todoash={todo.todoash}
              tags={todo.tags}
              color={todo.color}
              style={{ borderTop: `${todo.color} 4px solid` }}
            />
          ) : null
        )}
      </div>
    );
  }
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Cards
          title={todo.title}
          text={todo.text}
          key={todo.todoash}
          todoash={todo.todoash}
          tags={todo.tags}
          color={todo.color}
          style={{ borderTop: `${todo.color} 4px solid` }}
        />
      ))}
    </div>
  );
}

export default Todos;
