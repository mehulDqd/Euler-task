import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { AppContext, ContextType } from "../../Context";

const ConnectWallet: React.FC = () => {
  const styles = useStyles();
  const { handleUserLogin, userDetails, handleLogout } = useContext(
    AppContext
  ) as ContextType;
  return (
    <Box>
      {userDetails.address ? (
        <Button
          variant="contained"
          onClick={handleLogout}
          className={styles.btn}
        >
          Disconnect Wallet
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleUserLogin}
          className={styles.btn}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};

export default ConnectWallet;
