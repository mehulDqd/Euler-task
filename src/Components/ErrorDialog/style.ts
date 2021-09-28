import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  dialogTitle: {
    width: "calc(100% - 48px)",
    padding: "5px 24px",
    "& h2": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
}));
