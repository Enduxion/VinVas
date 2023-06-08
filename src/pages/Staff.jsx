import NavBar from "../components/NavBar";
import StaffBox from "../components/StaffBox";
import staffData from "../assets/data/staffData";

import "../css/StaffStyle.css";
export default function Staff(props) {
  const levels = [
    "Nursery Level",
    "Primary Level",
    "Secondary Level",
    "Higher Secondary Level",
    "Non-Teaching Staff",
  ];
  const levelClasses = [
    "Pre-nursery(baby), Nursery, L.K.G, U.K.G",
    "1, 2, 3, 4, 5, 6, 7",
    "9, 10",
    "11, 12",
  ];
  const allStaffBoxes = levels.map((level, index) => {
    return (
      <StaffBox
        key={index}
        title={level}
        levelId={index}
        teachingClasses={levelClasses[index]}
        staffData={staffData}
      />
    );
  });
  return (
    <>
      <NavBar
        selectedLink="Staff"
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <div className="Staff--main">
        <span className="Staff--title">Staff Members</span>
        <div className="Staff--StaffBoxContainer">{allStaffBoxes}</div>
      </div>
    </>
  );
}
