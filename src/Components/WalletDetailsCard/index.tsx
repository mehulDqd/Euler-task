import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import { UserContext, ContextType } from "../../Context";
import { useStyles } from "./style";

const WalletDetailsCard: React.FC = () => {
  const styles = useStyles();
  const { user } = useContext(UserContext) as ContextType;

  return (
    <Box className={styles.container}>
      <Card className={styles.card} variant="outlined">
        <CardHeader title="Account Details" className={styles.header} />
        <Divider />
        <CardContent>
          <Box className={styles.addressContainer}>
            <span className={styles.addressTitle}>Address: </span>
            <p className={styles.addressDescription}>
              {user.address ? user.address : "Please Connect Wallet"}
            </p>
          </Box>
          <Box className={styles.balanceContainer}>
            <img
              src={`${process.env.PUBLIC_URL}ethereum.png`}
              className={styles.currencySymbol}
              alt="Etherium"
            />
            <Box component="span" className={styles.balanceDetails}>
              {user.ethBalance && parseFloat(user.ethBalance).toFixed(5)} ETH
            </Box>
          </Box>
          <Box className={styles.balanceContainer}>
            <img
              src={`${process.env.PUBLIC_URL}dai.png`}
              className={styles.currencySymbol}
              alt="DAI"
            />
            <Box component="span" className={styles.balanceDetails}>
              {user.daiBalance && parseFloat(user.daiBalance).toFixed(5)} DAI
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletDetailsCard;
