import NavBar from "../components/NavBar";
import AsyncImage from "../components/AsyncImage";

import aboutUsData from "../assets/data/aboutUsData";
import headerImage from "../assets/images/TestPicture4.jpg";
import "../css/aboutStyle.css";

export default function About(props) {
  return (
    <>
      <NavBar
        selectedLink="About"
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <div className="About--main">
        <div className="About--title">Shree Vindhya Vasini Seconday School</div>
        <div className="About--quote">- "Discipline And Dedication For Quality Education..."</div>
        <div className="About--imageContainer">
          <AsyncImage className="About--image" src={headerImage} />
        </div>
        <div className="About--subTitle">Introduction</div>
        <div className="About--description">{aboutUsData}</div>
      </div>
    </>
  );
}
