import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90%",
    height: "80px",
    position: "fixed",
    zIndex: 2,
    padding: "0 5%",
    backgroundColor: "#653551",
    top: 0,
    left: 0,
  },
}));
