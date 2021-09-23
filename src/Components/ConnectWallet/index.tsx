import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import _ from "lodash";
import { useStyles } from "./styles";
import { AppContext, ContextType } from "../../Context";

const ConnectWallet: React.FC = () => {
  const styles = useStyles();
  const { handleUserLogin, userLoggedIn, userDetails, handleLogout } = useContext(AppContext) as ContextType;
  return (
    <div>
      {!_.isEmpty(userDetails) ? (
        <Button variant="contained" onClick={handleLogout} className={styles.btn}>
          Disconnect Wallet
        </Button>
      ) : (
        <Button variant="contained" onClick={handleUserLogin} className={styles.btn}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default ConnectWallet;
