import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    margin: "40px auto",
    [theme.breakpoints.up("md")]: {
      width: "calc(50% - 80px)",
      margin: "0 40px",
    },
    height: "calc(100vh - 180px)",
  },
  panelContainer: {
    height: "calc(100% - 96px)",
  },
  card: {
    height: "100%",
    margin: "auto",
  },
  activeTab: {
    color: "#653551 !important",
  },
  inActiveTab: {
    color: "#888",
  },
  tabContainer: {
    borderBottom: "1px solid #ddd",
  },
}));
