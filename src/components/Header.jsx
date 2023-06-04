import "../css/HeaderStyle.css";

export default function Header(props) {
  return (
    <>
      <div className={`Header--div ${props.classValue ? props.classValue : "" }`}>
        <img className="Header--image" src={props.img} />
      </div>
    </>
  );
}