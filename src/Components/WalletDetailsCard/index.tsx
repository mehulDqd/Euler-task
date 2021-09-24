import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import React, { useContext } from "react";
import { useStyles } from "./style";
import { AppContext, ContextType } from "../../Context";

const WalletDetailsCard: React.FC = () => {
  const styles = useStyles();
  const { userDetails } = useContext(AppContext) as ContextType;

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "40%" },
        margin: { xs: "40px auto", lg: "0 40px" },
      }}
    >
      <Card className={styles.card} variant="outlined">
        <CardHeader title="Account Details" className={styles.header} />
        <Divider />
        <CardContent>
          <Box className={styles.addressContainer}>
            <span className={styles.addressTitle}>Address: </span>
            <p className={styles.addressDescription}>{userDetails.address}</p>
          </Box>
          <Box className={styles.balanceContainer}>
            <img
              src={`${process.env.PUBLIC_URL}ethereum.png`}
              width="30px"
              height="30px"
              alt="Etherium"
            />
            <Box component="span" className={styles.balanceDetails}>
              {userDetails.ethBalance && userDetails.ethBalance.toFixed(5)} ETH
            </Box>
          </Box>
          <Box className={styles.balanceContainer}>
            <img
              src={`${process.env.PUBLIC_URL}dai.png`}
              width="30px"
              height="30px"
              alt="Etherium"
            />
            <Box component="span" className={styles.balanceDetails}>
              {userDetails.daiBalance &&
                parseFloat(userDetails.daiBalance).toFixed(5)}{" "}
              DAI
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletDetailsCard;
