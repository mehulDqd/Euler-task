import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Route, Trade } from "@uniswap/sdk";
import { useStyles } from "./style";

interface Props {
  route: Route | undefined;
  trade: Trade | undefined;
}

const SwapInformation: React.FC<Props> = ({ route, trade }) => {
  const styles = useStyles();
  return (
    <List>
      <ListItem className={styles.listContent}>
        <Typography className={styles.listContentTitle}>Mid Price:</Typography>{" "}
        {route?.midPrice ? route?.midPrice?.toSignificant(6) : "0"}
      </ListItem>
      <ListItem className={styles.listContent}>
        <Typography className={styles.listContentTitle}>Mid Invert:</Typography>{" "}
        {route?.midPrice ? route?.midPrice?.invert().toSignificant(6) : "0"}
      </ListItem>
      <ListItem className={styles.listContent}>
        <Typography className={styles.listContentTitle}>
          Trade Execution Price:
        </Typography>{" "}
        {trade?.executionPrice ? trade.executionPrice?.toSignificant(6) : "0"}
      </ListItem>
      <ListItem className={styles.listContent}>
        <Typography className={styles.listContentTitle}>
          Trade Mid Price:
        </Typography>{" "}
        {trade?.nextMidPrice ? trade.nextMidPrice.toSignificant(6) : "0"}
      </ListItem>
    </List>
  );
};

export default SwapInformation;
