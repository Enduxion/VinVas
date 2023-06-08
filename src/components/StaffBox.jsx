import StaffContainer from "./StaffContainer";
import { useState } from "react";

import "../css/StaffBoxStyle.css";

export default function StaffBox(props) {
  const [isStaffContainerOpen, setIsStaffContainerOpen] = useState(false);
  function toggleSetIsSCOpen() {
    setIsStaffContainerOpen((prevValue) => !prevValue);
  }
  const allStaff = props.staffData.map((data) => {
    if (props.levelId.toString() === data.levelId.toString()) {
      return (
        <StaffContainer
          key={data.id}
          idKey={data.id}
          name={data.name}
          subject={data.subject}
          levelId={data.levelId}
          img={data.img}
          email={data.contact.email}
          phn={data.contact.phn}
        />
      );
    }
  });
  return (
    <div className="StaffBox--main">
      <div className="StaffBox--clickDiv" onClick={toggleSetIsSCOpen}>
        <div className="StaffBox--textBox">
          <span className="StaffBox--text StaffBox--title">{props.title}</span>
          <span className="StaffBox--text">
            Classes: {props.teachingClasses}
          </span>
        </div>
        <i className="fa-solid fa-up-right-from-square StaffBox--addButton"></i>
      </div>
      {isStaffContainerOpen ? (
        <div className="StaffBox--staffContainer">{allStaff}</div>
      ) : (
        ""
      )}
    </div>
  );
}
