import {
  Theme,
  makeStyles
} from "@material-ui/core/styles";

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: "80px",
    position: "fixed",
    zIndex: 2,
    padding: "0 5%",
    backgroundColor: "#653551",
    top: 0
  },
  logo: {
    width: "25%"
  },
  logoText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: 600,
    whiteSpace: "nowrap",
    cursor: "pointer",
    fontSize: "26px",
    fontStyle: "italic"
  }
}));
