import React from "react";
import "./navbar.scss";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import logo from "./../../assets/png/logo.png";
import micro from "./../../assets/png/microsxem.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <img className="micro" src={micro} />
            <img className="logo" src={logo} />
          </div>
          <Paper
            className="paper"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Поиск"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className="icon">
            <div className="create">
              <CreateIcon className="createIcon"></CreateIcon>
            </div>
            <div className="person">
              <PersonIcon className="personIcon"></PersonIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
