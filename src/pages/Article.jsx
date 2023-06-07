import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AsyncImage from "../components/AsyncImage";

import postData from "../assets/data/newsData";

import "../css/ArticleStyle.css";
import React from "react";

export default function Article(props) {
  // copy button
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
      let location = window.location.href;
      navigator.clipboard.writeText(location);
      setPopUpShown(true);
      setIsCopyPressed(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isCopyPressed]);
  // getting news
  const { id } = useParams();
  const news = postData.find((data) => {
    return data.id == id;
  });
  // settings images
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = news.img;
    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, []);
  return (
    <>
      <NavBar
        selectedLink=""
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <div className="Article--main">
        <div className="Article--top">
          <div className="Article--title">{news.title}</div>
          <div className="Article--date">{news.date}</div>
          <div className="Article--punchline">{news.punchline}</div>
        </div>
        <div className="Article--middle">
          {news.img ? (
            <div
              className={`Article--imageContainer ${
                isLandscape ? "" : "Article--protraitContainer"
              }`}
            >
              <AsyncImage
                src={news.img}
                className={`Article--image ${
                  isLandscape ? "" : "Article--protrait"
                }`}
              />
            </div>
          ) : (
            ""
          )}
          <div className="Article--description" dangerouslySetInnerHTML={{__html: replacedText}}></div>
        </div>
        <div className="Article--taskArea">
          <Link to="/" className="Article--taskArea--btn">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            <span className="Article--taskArea--text"> Go Back</span>
          </Link>
          <span className="Article--taskArea--btn" onClick={copyButtonPressed}>
            {popUpShown ? <span className="popUp">Copied!</span> : ""}
            <i className="fa-regular fa-clipboard"></i>
            <span className="Article--taskArea--text"> Copy Link</span>
          </span>
        </div>
      </div>
    </>
  );
}
