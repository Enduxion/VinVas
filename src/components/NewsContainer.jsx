import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AsyncImage from "./AsyncImage";
import "../css/NewsContainerStyle.css";

const MAX_LINE_VAL = 150;

export default function NewsContainer(props) {
  const [isCopyPressed, setIsCopyPressed] = useState(false);
  const [popUpShown, setPopUpShown] = useState(false);
  function copyButtonPressed() {
    setIsCopyPressed(true);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUpShown(false);
    }, 2000);

    if (isCopyPressed) {
      let location = window.location.href + `news/article/${props.idKey}`;
      navigator.clipboard.writeText(location);
      setPopUpShown(true);
      setIsCopyPressed(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isCopyPressed]);
  let descriptionText =
    props.description.trim().length > MAX_LINE_VAL
      ? props.description.substr(0, MAX_LINE_VAL - 1) + "... "
      : props.description;
  return (
    <div className="NewsContainer">
      <div className="NewsContainer--titleBar">
        <span className="NewsContainer--title">{props.title}</span>
        <span className="NewsContainer--uploadDate">{props.date}</span>
      </div>
      <div className="NewsContainer--descriptionBox">
        {descriptionText}
        {props.description.length > MAX_LINE_VAL ? (
          <Link to={`/news/article/${props.idKey}`} className="btn--text">
            {" "}
            See more
          </Link>
        ) : (
          ""
        )}
      </div>
      {props.img ? (
        <AsyncImage
          className="NewsContainer--image"
          src={props.img}
        ></AsyncImage>
      ) : (
        ""
      )}
      <div className="NewsContainer--taskArea">
        <Link
          to={`/news/article/${props.idKey}`}
          rel="noreferrer"
          className="NewsContainer--taskArea--btn"
        >
          <i className="fa-solid fa-up-right-from-square"></i>
          <span className="NewsContainer--taskArea--text"> Open Link</span>
        </Link>
        <span
          className="NewsContainer--taskArea--btn"
          onClick={copyButtonPressed}
        >
          {popUpShown ? <span className="popUp">Copied!</span> : ""}
          <i className="fa-regular fa-clipboard"></i>
          <span className="NewsContainer--taskArea--text"> Copy Link</span>
        </span>
      </div>
    </div>
  );
}
