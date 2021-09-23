import { useState } from "react";
import * as React from "react";
import onboardUser from "../Utils";

export type ContextType = {
  userLoggedIn: boolean;
  handleUserLogin(): void;
  handleLogout(): void;
  userDetails: object;
};

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const onboard = onboardUser();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const handleUserLogin = async () => {
    await onboard.walletSelect();
    if (!await onboard.getState().address) {
      await onboard.walletCheck();
      const details = await onboard.getState();
      setUserDetails(details);
    }
    const details = await onboard.getState();
    setUserDetails(details);
  };

  const handleLogout = async () => {
    await onboard.walletReset();
    setUserDetails({});
  };

  return (
    <AppContext.Provider value={{ userLoggedIn, handleUserLogin, userDetails, handleLogout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
