import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, TextField, Typography } from "@material-ui/core";
import { useStyles, DraftButton, SaveButton } from "./DraftSection.styles.js";
import { getDraftCards, addToDraft, addToActive } from "../../modules/App";
import DraftCard from "../DraftCard";

const MapStateToProps = state => ({
  draftCards: getDraftCards(state)
});

const MapDispatchToProps = { addToDraft, addToActive };

function DraftSection(props) {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleAction = action => {
    let card;
    setId(id + 1);
    if (input === "" || !input.replace(/\s/g, "").length) {
      card = { id: id, text: "*empty*", marked: false };
    } else {
      card = { id: id, text: input, marked: false };
    }
    action === "draft" ? props.addToDraft(card) : props.addToActive(card);
    return setInput("");
  };

  return (
    <>
      <Box mb={1} className={classes.draftSectionBox}>
        <Box mx={3} my={3}>
          <TextField
            id="outlined-size-small"
            label="Add Draft"
            variant="outlined"
            value={input}
            size="small"
            fullWidth
            onChange={handleChange}
          />
          <Box my={1} display="flex" justifyContent="flex-end">
            <DraftButton
              variant="contained"
              onClick={() => {
                handleAction("draft");
              }}
            >
              Draft
            </DraftButton>
            <SaveButton
              variant="contained"
              onClick={() => {
                handleAction("save");
              }}
            >
              Save
            </SaveButton>
          </Box>
        </Box>
      </Box>
      <Box className={classes.draftSectionBox}>
        <Box mx={3} my={3}>
          <Typography variant="h5" gutterBottom>
            Draft
          </Typography>
          {props.draftCards &&
            props.draftCards.map((item, index) => (
              <DraftCard key={index} item={item} id={index} />
            ))}
        </Box>
      </Box>
    </>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(DraftSection);
