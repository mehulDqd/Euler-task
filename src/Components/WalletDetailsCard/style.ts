import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    margin: "40px auto",
    [theme.breakpoints.up("md")]: {
      width: "calc(25% - 80px)",
      margin: "0 40px",
    },
    height: "380px",
  },
  card: {
    margin: "auto",
    height: "100%",
  },
  header: {
    color: "#653551",
  },
  currencySymbol: {
    width: "30px",
    height: "30px",
  },
  addressContainer: {
    margin: "10px 0",
  },
  addressTitle: {
    color: "#653551",
    fontWeight: 500,
  },
  addressDescription: {
    margin: 0,
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "#888",
  },
  balanceContainer: {
    margin: "30px 0",
    display: "flex",
    alignItems: "center",
  },
  balanceDetails: {
    marginLeft: "25px",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));
