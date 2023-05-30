import NavBar from '../components/NavBar'

export default function About(props) {
  return (
    <>
      <NavBar selectedLink="About" darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
    </>
  );
}