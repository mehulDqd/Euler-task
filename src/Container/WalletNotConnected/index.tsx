import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { useStyles } from "./style";

const WalletNotConnected = () => {
  const styles = useStyles();
  return (
    <Box className={styles.notConnectedContainer}>
      <Typography variant="h4" align="center">
        Wallet Not Connected
      </Typography>
    </Box>
  );
};

export default WalletNotConnected;
