import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, TextField, Typography } from "@material-ui/core";
import {
  useStyles,
  DraftButton,
  SaveButton,
  RemoveButton
} from "./DraftSection.styles.js";
import { getDraftCards, addToDraft, addToActive } from "../../modules/App";

const MapStateToProps = state => ({
  draftCards: getDraftCards(state)
});

const MapDispatchToProps = { addToDraft, addToActive };

function DraftItem(props) {
  const classes = useStyles();

  return (
    <Box mb={4} boxShadow={2} className={classes.draftItem}>
      <Typography variant="body1">{props.item.text}</Typography>
      <Box display="flex" justifyContent="flex-end">
        <RemoveButton
          variant="contained"
          onClick={() => {
            console.log(props.item);
          }}
        >
          Remove
        </RemoveButton>
        <SaveButton variant="contained" className={classes.saveDraft}>
          Save
        </SaveButton>
      </Box>
    </Box>
  );
}

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
    action == "draft" ? props.addToDraft(card) : props.addToActive(card);
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
            props.draftCards.map(item => (
              <DraftItem key={item.id} item={item} />
            ))}
        </Box>
      </Box>
    </>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(DraftSection);
