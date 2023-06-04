import "../css/HeaderStyle.css";

export default function Header(props) {
  const styles = {
    backgroundPosition: "center",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: `${props.width}%`,
    backgroundImage: `url(${props.img})`,
  };
  return (
    <>
      <div className="Header--div--container">
        <div
          className={`Header--div ${props.classValue ? props.classValue : ""}`}
          style={styles}
        >
          {props.text ? <span className="Header--text">{props.text}</span> : ""}
        </div>
      </div>
    </>
  );
}
