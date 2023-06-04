import "../css/NewsContainerStyle.css";
export default function NewsContainer(props) {
  return (
    <div className="NewsContainer">
      <div className="NewsContainer--titleBar">
        <span className="NewsContainer--title">{props.title}</span>
        <span className="NewsContainer--uploadDate">{props.date}</span>
      </div>
      <div className="NewsContainer--descriptionBox">{props.description}</div>
      {props.img ? (
        <img className="NewsContainer--image" src={props.img}></img>
      ) : (
        ""
      )}
    </div>
  );
}
