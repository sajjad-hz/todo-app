

const CardsText = (props) => {

    // *** seprate lines by enter key
    const t = props.text;
    const lines = t?.split("\n");


    return (
        <ul
        className="card-text"
      >
        {lines?.map((line, index) =>
          line.length > 0 ? <li key={index}>{line}</li> : null
        )}
      </ul>
    )
}

export default CardsText
