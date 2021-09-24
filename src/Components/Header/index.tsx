import React from "react";
import Box from "@material-ui/core/Box";
import ConnectWallet from "../ConnectWallet";
import { useStyles } from "./style";

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.header}>
      <ConnectWallet />
    </Box>
  );
};

export default Header;
