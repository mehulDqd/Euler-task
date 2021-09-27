import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  pastSwapsContainer: {
    maxHeight: "400px",
    overflowY: "scroll",
  },
  listContent: {
    fontSize: "14px",
    display: "flex",
    padding: "4px 0px",
    [theme.breakpoints.up("md")]: {
      padding: "8px 16px",
    },
  },
  listContentTitle: {
    width: "70%",
    fontWeight: 600,
  },
}));
