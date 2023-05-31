import NavBar from '../components/NavBar';
import Header from '../components/Header';
import HeaderImage from '../assets/images/TestPicture.jpg';

export default function News(props) {
  return (
    <>
      <NavBar selectedLink="Home" darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
      <Header img={HeaderImage} />
    </>
  );
}