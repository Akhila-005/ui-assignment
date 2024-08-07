import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="dashboard-icon">
        <DashboardIcon />
      </div>
      <div className="icon-container">
        <div className="icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </div>
      <div className="logout-button">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
    </div>
  );
};

export default Sidebar;
