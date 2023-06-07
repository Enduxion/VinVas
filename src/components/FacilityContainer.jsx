import { Link } from "react-router-dom";
import "../css/FacilityContainerStyle.css";
import { useState } from "react";
export default function FacilityContainer(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  function mouseIncome() {
    setShowPopUp(true);
  }
  function mouseOutGone() {
    setShowPopUp(false);
  }
  let description =
    props.description.length > 100
      ? props.description.trim().substr(0, 99) + "... "
      : props.description;
  return (
    <div className="FacilityContainer--main">
      {showPopUp ? (
        <div className="popUp--imageContainer">
          <img className="popUp--image" src={props.img} />
        </div>
      ) : (
        ""
      )}
      <div className="FacilityContainer--text">
        <span className="FacilityContainer--title">{props.title}</span>
        <div className="FacilityContainer--description">{description}</div>
      </div>
      <Link
        to={`/about/facility/${props.idKey}`}
        rel="noreferrer"
        className="btn FacilityContainer--button"
        onMouseEnter={mouseIncome}
        onMouseLeave={mouseOutGone}
      >
        <i className="fa-solid fa-up-right-from-square"></i>
        <span className="btn--text FacilityContainer--button--text"> Open Link</span>
      </Link>
    </div>
  );
}
