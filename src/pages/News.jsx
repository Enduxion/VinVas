import NavBar from "../components/NavBar";
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import HeaderImage from "../assets/images/TestPicture4.jpg";

import postData from "../assets/data/newsData";

import "../css/NewsStyle.css";

export default function News(props) {
  // Temporary Data
  let allNews = postData.map((newsData) => {
    return (
      <NewsContainer key={newsData.id} title={newsData.title} date={newsData.date} description={newsData.description} img={newsData.img} />
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
