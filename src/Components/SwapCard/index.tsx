import React, { useContext, useState, useCallback } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Route, Trade } from "@uniswap/sdk";
import { ethers } from "ethers";
import { debounce } from "lodash";
import { PricingData } from "../../Types/SwapCard.interface";
import SwapInformation from "../SwapInformation";
import { getPricingData, swapTokens } from "../../Utils/swapTransaction";
import { AppContext, ContextType } from "../../Context";
import { getDataDelayTimer } from "../../constants";
import { useStyles } from "./style";

const SwapCard: React.FC = () => {
  const styles = useStyles();
  const [route, setRoute] = useState<Route>();
  const [trade, setTrade] = useState<Trade>();
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const { userDetails, getUserBalance } = useContext(AppContext) as ContextType;
  const [amount, setAmount] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmount(e.target.value);
    if (!e.target.value) {
      setError(true);
      setErrorText("This field is required");
    } else if (+e.target.value <= 0) {
      setError(true);
      setErrorText("Value should be positive");
    } else if (
      userDetails.balance >
      ethers.utils.parseEther(e.target.value.toString()).toString()
    ) {
      setError(false);
      setErrorText("");
      const { route, trade }: PricingData = await getPricingData(
        e.target.value
      );
      setRoute(route);
      setTrade(trade);
      setButtonDisabled(false);
    } else {
      setError(true);
      setErrorText("Insufficient Balance");
    }
  };

  const getData = useCallback(debounce(handleChange, getDataDelayTimer), []);

  const handleSwapToken = async () => {
    setButtonDisabled(true);
    await swapTokens(amount, userDetails.address);
    getUserBalance(userDetails.address);
    setButtonDisabled(false);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "40%" },
        margin: { xs: "40px auto", lg: "0 40px" },
      }}
    >
      <Card className={styles.card} variant="outlined">
        <CardContent>
          <Box className={styles.inputContainer}>
            <TextField
              inputProps={{ min: 0 }}
              id="outlined-basic"
              error={error}
              fullWidth
              type="number"
              helperText={errorText}
              label="Ethereum To Swap"
              variant="outlined"
              onChange={getData}
            />
            <Button
              variant="contained"
              disabled={error || buttonDisabled}
              className={styles.btn}
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
