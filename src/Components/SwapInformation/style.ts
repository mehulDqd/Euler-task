import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  pastSwapsContainer: {
    maxHeight: "400px",
    overflowY: "scroll",
  },
  listContent: {
    fontSize: "14px",
    display: "flex",
  },
  listContentTitle: {
    width: "70%",
    fontWeight: 600,
  },
}));
