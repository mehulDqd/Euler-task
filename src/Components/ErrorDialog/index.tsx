import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import { useStyles } from "./style";

const ErrorDialog: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const styles = useStyles();

  useEffect(() => {
    if (localStorage.getItem("MetamaskError") === "true") {
      setError(true);
    }
  }, []);
  const handleClose = () => {
    setError(false);
  };

  return (
    <Dialog onClose={handleClose} open={error}>
      <DialogTitle className={styles.dialogTitle}>
        <Typography>Metamask not found.</Typography>
        <IconButton aria-label="Close" onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography gutterBottom>Please install metamask extension.</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorDialog;
