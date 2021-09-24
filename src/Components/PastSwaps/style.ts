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
    width: "20%",
    fontWeight: 600,
  },
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "360px",
  },
}));
