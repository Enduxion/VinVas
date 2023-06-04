import NavBar from "../components/NavBar";
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import HeaderImage from "../assets/images/TestPicture4.jpg";
import TestImage from "../assets/images/TestPicture2.jpg";
import TestImage2 from "../assets/images/TestPicture3.jpg";

import "../css/NewsStyle.css";

export default function News(props) {
  // Temporary Data
  const postData = [
    {
      id: 1,
      title: "Pawan Website",
      date: "06/04/2023",
      description: "This is a dummy text! Vinvas website 2023, this can be modified by fetching data from api",
      img: TestImage
    },
    {
      id: 2,
      title: "BackEnd Not found (lol)",
      date: "09/04/2022",
      description: "I was moving and suddenly the earth started moving with me, haha it's a joke, I know right? Sounded Realistic",
      img: HeaderImage
    },
    {
      id: 3,
      title: "Hiya",
      date: "07/06/2021",
      description: "Thank you everybody for joining me! ",
      img: TestImage2
    }
    ,
    {
      id: 4,
      title: "Hellowww",
      date: "06/04/2019",
      description: "This one contains no image and we can still render the data.... We should prolly link it, right now you can't click it hehe"
    }
  ];
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
