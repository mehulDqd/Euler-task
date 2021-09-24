import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  listContent: {
    fontSize: "14px",
  },
  listContentTitle: {
    width: "30%",
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
