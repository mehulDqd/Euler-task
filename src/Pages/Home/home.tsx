import React, { useContext } from "react";
import Header from "../../Components/Header";
import { useStyles } from "./style";

const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.homePage}>
      <Header />
    </div>
  );
};

export default Home;
