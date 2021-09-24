import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Route, Trade } from "@uniswap/sdk";

interface Props {
  route: Route | undefined;
  trade: Trade | undefined;
}

const SwapInformation: React.FC<Props> = ({ route, trade }) => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={`Mid Price: ${
            route?.midPrice ? route?.midPrice?.toSignificant(6) : "0"
          }`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`Mid Invert: ${
            route?.midPrice ? route?.midPrice?.invert().toSignificant(6) : "0"
          }`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`Trade Execution Price: ${
            trade?.executionPrice ? trade.executionPrice?.toSignificant(6) : "0"
          }`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`Trade Mid Price: ${
            trade?.nextMidPrice ? trade.nextMidPrice.toSignificant(6) : "0"
          }`}
        />
      </ListItem>
    </List>
  );
};

export default SwapInformation;
