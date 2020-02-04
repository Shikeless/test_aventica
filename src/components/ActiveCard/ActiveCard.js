import React from "react";
import { connect } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { useStyles, CustomButton } from "./ActiveCard.styles.js";
import {
  getActiveCards,
  getMarkedItems,
  addToDraft,
  addToActive,
  removeFromActive,
  toggleMarker,
  countMarkedItems
} from "../../modules/App";

const MapStateToProps = state => ({
  activeCards: getActiveCards(state),
  markedItems: getMarkedItems(state)
});

const MapDispatchToProps = {
  addToDraft,
  addToActive,
  removeFromActive,
  toggleMarker,
  countMarkedItems
};

function ActiveCard(props) {
  const marker = marked => {
    if (marked) return "success.main";
    return "secondary.main";
  };

  const moveToDraft = id => {
    props.addToDraft(props.item);
    props.removeFromActive(props.id);
  };

  const toggle = () => {
    props.toggleMarker(props.id);
    let arr = props.activeCards.filter(item => item.marked === true);
    props.countMarkedItems(arr.length);
  };

  const classes = useStyles();
  return (
    <Box p={1} boxShadow={2} className={classes.activeDraft}>
      <Box display="flex" justifyContent="flex-end">
        <Box
          className={classes.completeIndicator}
          bgcolor={marker(props.item.marked)}
        ></Box>
      </Box>
      <Typography variant="body1" gutterBottom>
        {props.item.text}
      </Typography>
      <Box display="flex" justifyContent="center">
        <CustomButton
          variant="contained"
          onClick={() => {
            moveToDraft(props.id);
          }}
        >
          Draft
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={() => {
            toggle(props.id);
          }}
        >
          Mark
        </CustomButton>
      </Box>
    </Box>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(ActiveCard);
