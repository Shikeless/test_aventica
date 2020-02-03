import React from "react";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "./Main.styles.js";
import Header from "../Header";
import DraftSection from "../DraftSection";
import MainSection from "../MainSection";

function Main() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container justify="center">
        <Grid item lg={3} md={3} sm={5} xs={8}>
          <DraftSection />
        </Grid>
        <Grid item lg={9} md={9} sm={7} xs={12}>
          <MainSection />
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
