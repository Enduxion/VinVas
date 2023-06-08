import AsyncImage from "./AsyncImage";

export default function StaffContainer(props) {
  return (
    <div className="StaffContainer--main">
      <div className="StaffContainer--top">
        <span className="Staff--container--title">{props.title}</span>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="StaffContainer--body">
        <div className="StaffContainer--psImageContainer">
            <AsyncImage src={props.img} className="StaffContainer--psImage" />
        </div>
        <span className="StaffContainer--name StaffContainer--propField">{props.name}</span>
        <span className="StaffContainer--subject StaffContainer--propField">{props.subject}</span>
        <span className="StaffContainer--field StaffContainer--propField">{props.field}</span>
        <span className="StaffContainer--classes StaffContainer--propField">{props.classes}</span>
        <div className="StaffContainer--contactContainer">
            <span className="StaffContainer--contactEmail StaffContainer--propField">{props.email}</span>
            <span className="StaffContainer--contactPhone StaffContainer--propField">{props.phn}</span>
        </div>
      </div>
    </div>
  );
}
