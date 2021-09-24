import { Box } from "@material-ui/core";
import PairInformation from "../../Components/PairInformation";
import SwapCard from "../../Components/SwapCard";
import WalletDetailsCard from "../../Components/WalletDetailsCard";
import { useStyles } from "./style";

const Dashboard = () => {
  const styles = useStyles();
  return (
    <Box sx={{ margin: "100px auto" }} className={styles.walletContent}>
      <WalletDetailsCard />
      <PairInformation />
      <SwapCard />
    </Box>
  );
};

export default Dashboard;
