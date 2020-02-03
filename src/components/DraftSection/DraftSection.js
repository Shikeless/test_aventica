import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./DraftSection.styles.js";

function DraftSection() {
  const classes = useStyles();
  return <Box className={classes.draftSectionBox}>123</Box>;
}

export default DraftSection;
