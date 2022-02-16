import LinksTree from "./LinksTree";
import "./styles/SideNav.css";

// material ui components:
import { default as MuiDrawer } from "@mui/material/Drawer";
import { default as MuiBox } from "@mui/material/Box";

const SideNav = ({ isOpen, handleClose }) => {
  return (
    <MuiDrawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
      PaperProps={{ sx: { minWidth: "25%" } }}
    >
      <MuiBox>
        <LinksTree closeDrawer={handleClose} />
      </MuiBox>
    </MuiDrawer>
  );
};

export default SideNav;
