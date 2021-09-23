import React, { useContext } from "react";
import { useStyles } from "./style";
import ConnectWallet from "../ConnectWallet";

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.logo} />
      <ConnectWallet />
    </div>
  );
};

export default Header;
