import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../Utils/Authentication";
import { LINKS } from "../Utils/dec";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user.isAuth ? (
        <span>Welcome to Queezer!</span>
      ) : (
        <>
          <h3>Please log in to continue</h3>
          <RouterLink to={LINKS.LOGIN.PATH}>Log in</RouterLink>
        </>
      )}
    </>
  );
};

export default Home;
