import { useContext } from "react";
import { Box } from "@material-ui/core";
import { UserContext, ContextType } from "../../Context";
import Dashboard from "../../Container/Dashboard";
import Header from "../../Components/Header";
import { useStyles } from "./style";

const Home = () => {
  const { user } = useContext(UserContext) as ContextType;
  const styles = useStyles();
  return (
    <Box className={styles.homePage}>
      <Header />
      <Dashboard />
    </Box>
  );
};

export default Home;
