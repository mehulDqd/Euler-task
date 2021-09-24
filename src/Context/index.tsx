import React, { useState } from "react";
import onboardUser from "../Utils/connectWallet";
import {
  getUserETHBalance,
  getUserTokenBalance,
} from "../Utils/userTokenBalance";
import { daiContractAddress, decimals } from "../constants";
import { User } from "../Types/user.interface";

export type ContextType = {
  handleUserLogin(): void;
  handleLogout(): void;
  user: User;
  getUserBalance(address: User): void;
};

export const UserContext = React.createContext<ContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const onboard = onboardUser();
  const initialUserState = {
    address: "",
    appNetworkId: 0,
    balance: "0",
    daiBalance: "0",
    ethBalance: 0,
    mobileDevice: false,
    network: 0,
    wallet: {},
  };
  const [user, setUser] = useState<User>(initialUserState);

  const getUserBalance = async (details: User) => {
    const ethBalance = await getUserETHBalance();
    const daiBalance = await getUserTokenBalance(
      details.address,
      daiContractAddress,
      decimals
    );
    const detail = details.address ? details : user;
    setUser({ ...detail, ethBalance, daiBalance });
  };

  const handleUserLogin = async () => {
    if (onboard) {
      await onboard.walletSelect();
      if (!onboard.getState().address) {
        await onboard.walletCheck();
      }
      const details = await onboard.getState();
      await getUserBalance(details);
      setUser(details);
    }
  };

  const handleLogout = async () => {
    if (onboard) {
      onboard.walletReset();
      setUser(initialUserState);
    }
  };

  return (
    <UserContext.Provider
      value={{ handleUserLogin, user, handleLogout, getUserBalance }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
