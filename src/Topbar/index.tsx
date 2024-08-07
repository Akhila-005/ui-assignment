import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings"; 
import IconButton from "@mui/material/IconButton";
import "./styles.css";

const DarkTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#444",
    borderRadius: "15px",
    "& fieldset": {
      borderColor: "#555",
    },
    "&:hover fieldset": {
      borderColor: "#007bff", 
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007bff", 
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff", 
    padding: "8px 10px", 
  },
  "& .MuiInputLabel-root": {
    color: "#aaa", 
  },
});

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="search-container">
        <DarkTextField
          variant="outlined"
          placeholder="Search"
          size="small"
          className="search-box"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#aaa" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="icons-container">
        <IconButton className="icon-button">
          <NotificationsIcon style={{ color: "#fff" }} />
        </IconButton>
        <IconButton className="icon-button">
          <MailIcon style={{ color: "#fff" }} />
        </IconButton>
        <IconButton className="icon-button">
          <SettingsIcon style={{ color: "#fff" }} />
        </IconButton>
        <IconButton className="icon-button">
          <img
            src="../UserImage/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt="User"
            className="user-photo"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;
