import {
  faHome,
  faPlusSquare,
  faReply,
  faSignOutAlt,
  faTh,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = ({ menu, setPageTitle }) => {
  const match = useRouteMatch();

  return (
    <div className="sideMenu_area">
      <ul>
        {menu.map((mn) => (
          <li>
            <Link
              to={`${match.url}${mn.url}`}
              onClick={() => setPageTitle(`${mn.title}`)}
            >
              <FontAwesomeIcon icon={mn.icon} />
              <label>{mn.menu}</label>
            </Link>
          </li>
        ))}
      </ul>
      <div className="logout d-flex" style={{'flexDirection':"column"}}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <label>Home</label>
        </Link>
        <Link>
          <FontAwesomeIcon icon={faReply} />
          <label>Logout</label>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
