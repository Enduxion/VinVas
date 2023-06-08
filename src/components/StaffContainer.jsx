import AsyncImage from "./AsyncImage";
import "../css/StaffContainerStyle.css";
export default function StaffContainer(props) {
  return (
    <div className="StaffContainer--main">
      <div className="StaffContainer--imageContainer">
        <AsyncImage src={props.img} className="StaffContainer--image" />
      </div>
      <div className="StaffContainer--body">
        <span>
          <span className="StaffContainer--text">Name: </span>
          <span className="StaffContainer--value">{props.name}</span>
        </span>
        <span>
          <span className="StaffContainer--text">Subject: </span>
          <span className="StaffContainer--value">{props.subject}</span>
        </span>
        {props.email ? (
          <span>
            <span className="StaffContainer--text">Email: </span>
            <span className="StaffContainer--value">{props.email}</span>
          </span>
        ) : (
          ""
        )}
        {props.phn ? (
          <span>
            <span className="StaffContainer--text">Phone number: </span>
            <span className="StaffContainer--value">{props.phn}</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
