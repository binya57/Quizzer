import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../../Utils/Authentication";
import { LINKS } from "../../Utils/dec";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (user.isAuth)
    return (
      <>
        <Outlet />
      </>
    );
  else
    return (
      <Navigate to={LINKS.LOGIN.PATH} state={{ from: location }} replace />
    );
};

export default Protected;
