import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    margin: "40px auto",
    [theme.breakpoints.up("md")]: {
      width: "calc(25% - 80px)",
      margin: "0 40px",
    },
  },
  card: {
    height: "100%",
    margin: "auto",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  btn: {
    backgroundColor: "#653551",
    margin: "15px 0",
    color: "#fff",

    "&:hover": {
      color: "#653551",
      backgroundColor: "#fff",
    },
  },
}));
