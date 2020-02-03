import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { useStyles } from "./Header.styles.js";

function Header() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBox}>
        <Box width="85%">
          <Typography variant="h4" className={classes.mainTitle}>
            React app for <b>Aventica</b>
          </Typography>
        </Box>
        <Box className={classes.completeCounterIndicatorBox}>
          <Box className={classes.completeCounterIndicator}>0</Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
