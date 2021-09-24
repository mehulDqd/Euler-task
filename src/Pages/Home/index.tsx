import { useContext } from "react";
import { Box } from "@material-ui/core";
import { AppContext, ContextType } from "../../Context";
import Dashboard from "../../Container/Dashboard";
import Header from "../../Components/Header";
import WalletNotConnected from "../../Container/WalletNotConnected";
import { useStyles } from "./style";

const Home = () => {
  const { userDetails } = useContext(AppContext) as ContextType;
  const styles = useStyles();
  return (
    <Box className={styles.homePage}>
      <Header />
      {!userDetails.address ? <WalletNotConnected /> : <Dashboard />}
    </Box>
  );
};

export default Home;
