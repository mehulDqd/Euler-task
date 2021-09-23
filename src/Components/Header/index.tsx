import React, { useContext } from "react";
import { useStyles } from "./style";
import Login from "../ConnectWallet";

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.logo} />
      <Login />
    </div>
  );
};

export default Header;
