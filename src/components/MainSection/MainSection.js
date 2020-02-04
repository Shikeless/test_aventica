import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Grid } from "@material-ui/core";
import { getActiveCards, countMarkedItems } from "../../modules/App";
import ActiveCard from "../ActiveCard";

const MapStateToProps = state => ({
  activeCards: getActiveCards(state)
});

const MapDispatchToProps = { countMarkedItems };

function MainSection(props) {
  useEffect(() => {
    let arr = props.activeCards.filter(item => item.marked === true);
    props.countMarkedItems(arr.length);
  }, [props.activeCards]);

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        {props.activeCards &&
          props.activeCards.map((item, index) => (
            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
              <ActiveCard item={item} id={index} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(MainSection);
