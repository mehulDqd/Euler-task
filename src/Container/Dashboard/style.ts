import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  walletContent: {
    width: "90%",
    margin: "100px auto 40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));
