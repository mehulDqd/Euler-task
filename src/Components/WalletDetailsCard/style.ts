import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  card: {
    margin: "auto",
    height: "100%",
  },
  header: {
    color: "#653551",
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
    textOverflow: "elipsis",
    color: "#888",
  },
  balanceContainer: {
    margin: "30px 0",
    display: "flex",
    alignItems: "center",
  },
  balanceDetails: {
    marginLeft: "25px",
    textOverflow: "elipsis",
  },
}));
