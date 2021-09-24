import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { UserContext, ContextType } from "../../Context";
import { useStyles } from "./styles";

const ConnectWallet: React.FC = () => {
  const styles = useStyles();
  const { handleUserLogin, user, handleLogout } = useContext(
    UserContext
  ) as ContextType;
  return (
    <Box>
      {user.address ? (
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
