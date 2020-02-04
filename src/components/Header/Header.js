import React from "react";
import { connect } from "react-redux";
import { Typography, Box } from "@material-ui/core";
import { useStyles } from "./Header.styles.js";
import { getMarkedItems } from "../../modules/App";

const MapStateToProps = state => ({
  markedItems: getMarkedItems(state)
});

const MapDispatchToProps = {};

function Header(props) {
  const classes = useStyles();
  return (
    <>
      <Box py={1} className={classes.headerBox}>
        <Box width="85%">
          <Typography variant="h4" className={classes.mainTitle}>
            React app for <b>Aventica</b>
          </Typography>
        </Box>
        <Box className={classes.completeCounterIndicatorBox}>
          <Box className={classes.completeCounterIndicator}>
            &nbsp;{props.markedItems}&nbsp;
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);
