import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  LoginContainer: {
    boxShadow: "0 0 7px #ccc",
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    marginTop: "10vh",
  },
  btn: {
    backgroundColor: "#653551",
    color: "#fff",
    minWidth: "160px",
    border: "2px solid #fff",

    "&:hover": {
      color: "#653551",
      backgroundColor: "#fff",
    },
  },
}));
