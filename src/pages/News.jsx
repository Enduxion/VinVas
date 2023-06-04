import NavBar from "../components/NavBar";
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import HeaderImage from "../assets/images/TestPicture4.jpg";
import TestImage from "../assets/images/TestPicture2.jpg";

import "../css/NewsStyle.css";

export default function News(props) {
  // Temporary Data
  const postData = [
    {
      title: "Pawan's Website",
      date: "06/04/2023",
      description: "Pawan gurung made this website a long time ago when he was a kid. He likes to program and likes to beat everybody. Thank you!",
      img: TestImage
    },
    {
      title: "Nolan's Website",
      date: "09/04/2023",
      description: "Nolan made this website a short time ago when he was a old man. He likes to program and likes to beat everybody. Thank you!",
      img: HeaderImage
    },
    {
      title: "Pawan's Website",
      date: "06/04/2023",
      description: "Pawan gurung made this website a long time ago when he was a kid. He likes to program and likes to beat everybody. Thank you!",
      img: TestImage
    }
    ,
    {
      title: "Pawan's Website",
      date: "06/04/2023",
      description: "Pawan gurung made this website a long time ago when he was a kid. He likes to program and likes to beat everybody. Thank you",
      // img: HeaderImage
    }
  ];
  let allNews = postData.map((newsData, index) => {
    return (
      <NewsContainer key={index} title={newsData.title} date={newsData.date} description={newsData.description} img={newsData.img} />
    );
  });
  return (
    <>
      <NavBar
        selectedLink="Home"
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <Header
        img={HeaderImage}
        width="100"
        text="Shree Vindhya Vasini Secondary School"
      />
      <div className="News--allNewsContainer">
        <span className="News--allNewsContainer--title">
          <i className="fas fa-newspaper"></i
          > News
        </span>
        { allNews }
        {
          allNews.length === 0 ? (
            <span className="News--endOfLine">No News to show</span>
          ) : (
            <span className="News--endOfLine">No more news to show</span>
          )
        }
      </div>
    </>
  );
}
