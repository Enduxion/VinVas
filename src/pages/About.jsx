import DOMPurify from "dompurify";

import AsyncImage from "../components/AsyncImage";
import NavBar from "../components/NavBar";
import acHTML from "../functions/acHTML";
import FacilityContainer from "../components/FacilityContainer";

import "../css/aboutStyle.css";
import headerImage from "../assets/images/TestPicture4.jpg";
import aboutUsData from "../assets/data/aboutUsData";
import facilityData from "../assets/data/facilityData";
export default function About(props) {
  let introductionDescription = acHTML(aboutUsData);
  let facilities = facilityData.map((facility) => {
    return (
      <FacilityContainer key={facility.id} idKey={facility.id} title={facility.title} description={facility.description} img={facility.img} />
    );
  });
  return (
    <>
      <NavBar
        selectedLink="About"
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <div className="About--main">
        <div className="About--title">Shree Vindhya Vasini Seconday School</div>
        <div className="About--quote">
          - "Discipline And Dedication For Quality Education..."
        </div>
        <div className="About--imageContainer">
          <AsyncImage className="About--image" src={headerImage} />
        </div>
        <div className="About--subTitle">Introduction</div>
        <br />
        <div className="About--description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(introductionDescription)}}></div>
        <div className="About--subTitle">Facilites</div>
        <div className="About--facilitiesContainer">
          {facilities}
        </div>
      </div>
    </>
  );
}
