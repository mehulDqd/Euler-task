import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { PairData } from "../../Types/PairData.interface";
import { useStyles } from "./style";

interface Props {
  data: PairData | undefined;
}

const PairOverview: React.FC<Props> = ({ data }) => {
  const styles = useStyles();
  return (
    <Box>
      {data ? (
        <List>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Token 1 Name:{" "}
            </Typography>{" "}
            {data?.token0?.name}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Token 1 symbol:{" "}
            </Typography>{" "}
            {data?.token0?.symbol}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Token 2 Name:{" "}
            </Typography>{" "}
            {data.token1.name}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Token 2 Symbol:{" "}
            </Typography>{" "}
            {data.token1.symbol}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Reserved In ETH:{" "}
            </Typography>{" "}
            {parseFloat(data.reserveETH).toFixed(5)}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Reserved in USD:{" "}
            </Typography>{" "}
            {parseFloat(data.reserveUSD).toFixed(5)}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Total Supply:{" "}
            </Typography>{" "}
            {parseFloat(data.totalSupply).toFixed(5)}
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography display="block" className={styles.listContentTitle}>
              Total Volume in USD:{" "}
            </Typography>{" "}
            {parseFloat(data.volumeUSD).toFixed(5)}
          </ListItem>
        </List>
      ) : (
        <Box className={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default PairOverview;
