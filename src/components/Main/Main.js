import React from "react";
import { Grid } from "@material-ui/core";

import Header from "../Header";
import DraftSection from "../DraftSection";
import MainSection from "../MainSection";

function Main() {
  return (
    <>
      <Header />
      <Grid container justify="center" spacing={1}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <DraftSection />
        </Grid>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <MainSection />
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
