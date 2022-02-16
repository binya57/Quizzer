import { createContext, useEffect, useState } from "react";
import { STORAGE_ITEMS } from "./dec";

const useAuthentication = () => {
  const [user, setUser] = useState({ name: null, isAuth: false });

  const logIn = (userName) => {
    setUser({ name: userName, isAuth: true });
  };
  const logOut = () => {
    setUser({ name: null, isAuth: false });
    sessionStorage.removeItem(STORAGE_ITEMS.USER);
  };

  useEffect(() => {
    const savedUser = sessionStorage.getItem(STORAGE_ITEMS.USER);
    if (user.isAuth) {
      sessionStorage.setItem(STORAGE_ITEMS.USER, JSON.stringify(user));
      return;
    }
    if (savedUser) setUser(JSON.parse(savedUser));
  }, [user]);

  return { user, logIn, logOut };
};

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const userUtils = useAuthentication();

  return (
    <UserContext.Provider value={userUtils}>{children}</UserContext.Provider>
  );
};

export default UserContext;
