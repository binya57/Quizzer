import React, { useState } from "react";
import { UserContextProvider } from "./Utils/Authentication";
import { SideNav, TopMenu } from "./Components/Navigation";
import AppRoutes from "./Components/Navigation/AppRoutes";
import "./index.css";

// material ui components:
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const openCloseSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <TopMenu handleOpen={openCloseSideNav} />
        <SideNav isOpen={isSideNavOpen} handleClose={openCloseSideNav} />
        <AppRoutes />
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default App;
