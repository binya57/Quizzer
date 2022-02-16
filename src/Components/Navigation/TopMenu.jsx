import { useState } from "react";
import SideNav from "./SideNav";

// mui components:
import { default as MuiAppBar } from "@mui/material/AppBar";
import { default as MuiIconButton } from "@mui/material/IconButton";
import { default as MuiMenuIcon } from "@mui/icons-material/Menu";

const TopMenu = ({ handleOpen }) => {
  return (
    <div className="top-bar">
      <MuiAppBar position="static">
        <MuiIconButton onClick={handleOpen} sx={{ width: "fit-content" }}>
          <MuiMenuIcon fontSize="large"></MuiMenuIcon>
        </MuiIconButton>
      </MuiAppBar>
    </div>
  );
};

export default TopMenu;
