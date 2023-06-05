import { useEffect, useState } from "react";
import "../css/NewsContainerStyle.css";

const MAX_LINE_VAL = 150;

export default function NewsContainer(props) {
  const [descriptionText, setDescriptionText] = useState("");
  const [fullDescriptionShow, setFullDescriptionShow] = useState(false);
  // Toggle whether to show full description of not
  function toggleFullDescriptionShow() {
    setFullDescriptionShow((prevValue) => !prevValue);
  }
  // Set the "see more" trim when the program first starts
  useEffect(() => {
    if (props.description.trim().length > MAX_LINE_VAL) {
      setDescriptionText(props.description.substr(0, (MAX_LINE_VAL - 1)).trim() + "... ");
    } else {
      setDescriptionText(props.description);
      setFullDescriptionShow(true);
    }
  }, []);
  // set the description on showing full or not showing full
  useEffect(() => {
    fullDescriptionShow
      ? setDescriptionText(props.description)
      : setDescriptionText(props.description.substr(0, (MAX_LINE_VAL - 1)).trim() + "... ");
  }, [fullDescriptionShow]);
  // return
  return (
    <div className="NewsContainer">
      <div className="NewsContainer--titleBar">
        <span className="NewsContainer--title">{props.title}</span>
        <span className="NewsContainer--uploadDate">{props.date}</span>
      </div>
      <div className="NewsContainer--descriptionBox">
        {descriptionText}
        {props.description.length > MAX_LINE_VAL ? (
          <span className="btn--text" onClick={toggleFullDescriptionShow}>
            {" "}
            See {fullDescriptionShow ? "less" : "more"}
          </span>
        ) : (
          ""
        )}
      </div>
      {props.img ? (
        <img className="NewsContainer--image" src={props.img}></img>
      ) : (
        ""
      )}
    </div>
  );
}
