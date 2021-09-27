import React, { useContext, useState, useCallback } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Route, Trade } from "@uniswap/sdk";
import { debounce } from "lodash";
import SwapInformation from "../SwapInformation";
import { PricingData } from "../../Types/SwapCard.interface";
import { User } from "../../Types/user.interface";
import { getPricingData, swapTokens } from "../../Utils/swapTransaction";
import { handleValidation } from "../../Utils/validation";
import { getDataDelayTimer } from "../../constants";
import { UserContext, ContextType } from "../../Context";
import { useStyles } from "./style";

const SwapCard: React.FC = () => {
  const styles = useStyles();
  const [route, setRoute] = useState<Route>();
  const [trade, setTrade] = useState<Trade>();
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const { user, getUserBalance } = useContext(UserContext) as ContextType;

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    user: User
  ) => {
    setAmount(e.target.value);
    const isError = handleValidation(e.target.value, user.ethBalance);
    if (isError) {
      setError(true);
      setErrorText(isError);
    } else {
      setError(false);
      setErrorText("");
      const { route, trade }: PricingData = await getPricingData(
        e.target.value
      );
      setRoute(route);
      setTrade(trade);
      setButtonDisabled(false);
    }
  };

  const getData = useCallback(debounce(handleChange, getDataDelayTimer), []);

  const handleSwapToken = async () => {
    setButtonDisabled(true);
    await swapTokens(amount, user.address);
    getUserBalance(user);
    setButtonDisabled(false);
  };

  return (
    <Box className={styles.container}>
      <Card className={styles.card} variant="outlined">
        <CardContent>
          <Box className={styles.inputContainer}>
            <TextField
              label="Ethereum To Swap"
              variant="outlined"
              id="outlined-basic"
              type="number"
              fullWidth
              inputProps={{ min: 0 }}
              error={error}
              helperText={errorText}
              onChange={(e) => getData(e, user)}
              disabled={!user.address}
            />
            <Button
              variant="contained"
              className={styles.btn}
              disabled={error || buttonDisabled}
              onClick={handleSwapToken}
            >
              Swap To DAI
            </Button>
          </Box>
          <Divider />
          <SwapInformation route={route} trade={trade} />
          <Typography component="span">
            Note: Slipage is considered to be @0.5%
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SwapCard;
