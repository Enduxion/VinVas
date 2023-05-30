import NavBar from '../components/NavBar'

export default function News(props) {
  return (
    <>
      <NavBar selectedLink="Home" darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
    </>
  );
}