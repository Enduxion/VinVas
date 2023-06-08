import NavBar from "../components/NavBar";
import StaffContainer from "../components/StaffContainer";
import staffData from "../assets/data/staffData";
import "../css/StaffStyle.css";
export default function Staff(props) {
  const staffMembers = staffData.map((data) => {
    return;
  })
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
