import CardsText from "./CardsText";
import CardsFooter from "./CardsFooter";
import "./Cards.scss";

export default function Cards(props) {
  return (
    <div className="card" {...props}>
      <h3 className="card-title">{props.title}</h3>
      <CardsText text={props.text} />
      <CardsFooter
        todoash={props.todoash}
        tags={props.tags}
        color={props.color}
      />
    </div>
  );
}
