import NavBar from "../components/NavBar";

export default function Staff(props) {
  return (
    <>
      <NavBar
        selectedLink="Staff"
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
    </>
  );
}
