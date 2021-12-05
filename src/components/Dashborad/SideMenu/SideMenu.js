import { faPlusSquare, faTh, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


const SideMenu = () => {
  const match = useRouteMatch();
  
  return (
    <div className="sideMenu_area">
      <ul>
        <li>
          <Link to={`${match.url}`}>
            {" "}
            <FontAwesomeIcon icon={faTh} />
            <label>Dashboard</label>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/create`}> 
            <FontAwesomeIcon icon={faPlusSquare} />
            <label>Create Post</label>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <label>Profile</label>
        </li>
        <li>All Post</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default SideMenu;
