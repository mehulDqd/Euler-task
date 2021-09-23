import {
  Theme,
  makeStyles
} from "@material-ui/core/styles";

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme: Theme) => ({
  LoginContainer: {
    boxShadow: "0 0 7px #ccc",
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    marginTop: "10vh"
  },
  btn: {
    backgroundColor: "#653551",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    minWidth: "160px",
    border: "2px solid #fff",

    "&:hover": {
      color: "#653551",
      backgroundColor: "#fff"
    }
  }
}));
