import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./MainSection.styles.js";

function MainSection() {
  const classes = useStyles();
  return <Box className={classes.mainSectionBox}>123</Box>;
}

export default MainSection;
