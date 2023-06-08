import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import NavBar from "../components/NavBar";
import AsyncImage from "../components/AsyncImage";

import "../css/FacilityStyle.css";

import facilityData from "../assets/data/facilityData";
import acHTML from "../functions/acHTML";

export default function Facility(props) {
  const { id } = useParams();
  const facility = facilityData.find((data) => {
    return data.id == id;
  });
  let description = acHTML(facility.description);
  return (
    <>
      <NavBar
        selectedLink=""
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <div className="Facility--main">
        <div className="Facility--title">{facility.title}</div>
        <div className="Facility--middle">
          {facility.img ? (
            <div className="Facility--imageContainer">
              <AsyncImage src={facility.img} className="Facility--image" />
            </div>
          ) : (
            ""
          )}
          <div
            className="Facility--description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          ></div>
        </div>
        <div className="Facility--taskArea">
          <Link to="/about" className="btn-s">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            <span className="btn--text-s"> Go Back</span>
          </Link>
        </div>
      </div>
    </>
  );
}
