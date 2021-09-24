import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  notConnectedContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    height: "calc(100vh - 90px)",
    color: "#653551",
  },
}));
