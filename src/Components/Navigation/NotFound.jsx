import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LINKS } from "../../Utils/dec";

// mui components:
import { default as MuiLink } from "@mui/material/Link";

const NotFound = () => {
  return (
    <div>
      <h1>couldn't find the page you are looking for</h1>
      <MuiLink component={RouterLink} to={LINKS.HOME.PATH}>
        Home
      </MuiLink>
    </div>
  );
};

export default NotFound;
