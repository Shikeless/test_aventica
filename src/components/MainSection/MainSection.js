import React from "react";
import { connect } from "react-redux";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles, CustomButton } from "./MainSection.styles.js";
import { getActiveCards, addToDraft, addToActive } from "../../modules/App";

const MapStateToProps = state => ({
  activeCards: getActiveCards(state)
});

const MapDispatchToProps = { addToDraft, addToActive };

function ActiveCard(props) {
  const marker = marked => {
    if (marked) return "success.main";
    return "secondary.main";
  };

  const classes = useStyles();
  return (
    <Box p={1} boxShadow={2} className={classes.activeDraft}>
      <Box display="flex" justifyContent="flex-end">
        <Box
          className={classes.completeIndicator}
          bgcolor={marker(props.item.marked)}
        >
          &nbsp;
        </Box>
      </Box>
      <Typography variant="body1" gutterBottom>
        {props.item.text}
      </Typography>
      <Box display="flex" justifyContent="center">
        <CustomButton variant="contained">Draft</CustomButton>
        <CustomButton variant="contained">Mark</CustomButton>
      </Box>
    </Box>
  );
}

function MainSection(props) {
  const classes = useStyles();
  return (
    <Box p={4} className={classes.mainSectionBox}>
      <Grid container spacing={3}>
        {props.activeCards &&
          props.activeCards.map(item => (
            <Grid item lg={4} md={6} sm={12}>
              <ActiveCard key={item.id} item={item} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(MainSection);
