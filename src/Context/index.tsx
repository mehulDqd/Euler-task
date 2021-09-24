import React, { useState } from "react";
import onboardUser from "../Utils/connectWallet";
import {
  getUserETHBalance,
  getUserTokenBalance,
} from "../Utils/userTokenBalance";
import { daiContractAddress, decimals } from "../constants";
import { UserDetails } from "../Types/userDetails.interface";
import CustomAlert from "../Components/Alert";

export type ContextType = {
  handleUserLogin(): void;
  handleLogout(): void;
  userDetails: UserDetails;
  getUserBalance(address: string): void;
};

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const onboard = onboardUser();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    address: "",
    appNetworkId: 0,
    balance: "",
    daiBalance: "",
    ethBalance: 0,
    mobileDevice: false,
    network: 0,
    wallet: {},
  });

  const getUserBalance = async (address: string) => {
    const ethBalance = await getUserETHBalance();
    const daiBalance = await getUserTokenBalance(
      address,
      daiContractAddress,
      decimals
    );
    setUserDetails({ ...userDetails, ethBalance, daiBalance });
  };

  const handleUserLogin = async () => {
    if (onboard) {
      await onboard.walletReset();
      await onboard.walletSelect();
      if (!(await onboard.getState().address)) {
        await onboard.walletCheck();
      }
      const details = await onboard.getState();
      setUserDetails(details);
      await getUserBalance(details.address);
    }
  };

  const handleLogout = async () => {
    if (onboard) {
      await onboard.walletReset();
      setUserDetails({
        address: "",
        appNetworkId: 0,
        balance: "",
        daiBalance: "",
        ethBalance: 0,
        mobileDevice: false,
        network: 0,
        wallet: {},
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ handleUserLogin, userDetails, handleLogout, getUserBalance }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
