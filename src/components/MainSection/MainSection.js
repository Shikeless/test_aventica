import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles, CustomButton } from "./MainSection.styles.js";

function MainSection() {
  const classes = useStyles();
  return (
    <Box p={4} className={classes.mainSectionBox}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} sm={12}>
          <Box p={1} boxShadow={2} className={classes.activeDraft}>
            <Box display="flex" justifyContent="flex-end">
              <Box className={classes.completeIndicator}>&nbsp;</Box>
            </Box>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Box display="flex" justifyContent="center">
              <CustomButton variant="contained">Draft</CustomButton>
              <CustomButton variant="contained">Mark</CustomButton>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} sm={8}>
          <Box bgcolor="blue">123</Box>
        </Grid>
        <Grid item lg={4} md={6} sm={8}>
          <Box bgcolor="blue">123</Box>
        </Grid>
        <Grid item lg={4} md={6} sm={8}>
          <Box bgcolor="blue">123</Box>
        </Grid>
        <Grid item lg={4} md={6} sm={8}>
          <Box bgcolor="blue">123</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainSection;
