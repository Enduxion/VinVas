import { Link } from "react-router-dom";

export default function NavBarLinks(props) {
  let classes = 'navBar--links--link';
  let path = '/';
  if (props.selectedLink.toUpperCase() === props.value.split(" ")[0].toUpperCase()) {
    classes += ' navBar--links--link--selected';
  }
  if (props.value.split(" ")[0].toUpperCase() != "HOME") {
    path += props.value.split(" ")[0].toLowerCase();
  }
  return (
    <Link to={path} className={classes}>{props.value}</Link>
  );
}