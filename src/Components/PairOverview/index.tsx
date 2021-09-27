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
    <Box className={styles.container}>
      {data ? (
        <List>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Token 1 Name:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {data?.token0?.name}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Token 1 symbol:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {data?.token0?.symbol}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Token 2 Name:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {data.token1.name}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Token 2 Symbol:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {data.token1.symbol}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Reserved In ETH:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {parseFloat(data.reserveETH).toFixed(5)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Reserved in USD:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {parseFloat(data.reserveUSD).toFixed(5)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Total Supply:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {parseFloat(data.totalSupply).toFixed(5)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContent}>
            <Typography className={styles.listContentTitle}>
              Total Volume in USD:
            </Typography>
            <Typography className={styles.listContentDesc}>
              {parseFloat(data.volumeUSD).toFixed(5)}
            </Typography>
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
