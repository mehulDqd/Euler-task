import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
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
