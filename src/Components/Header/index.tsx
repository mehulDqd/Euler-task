import React from "react";
import { useStyles } from "./style";
import ConnectWallet from "../ConnectWallet";
import Box from "@material-ui/core/Box";

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.header}>
      <ConnectWallet />
    </Box>
  );
};

export default Header;
