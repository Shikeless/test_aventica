import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import { useStyles, SaveButton, RemoveButton } from "./DraftCard.styles.js";
import {
  getDraftCards,
  removeFromActive,
  removeFromDraft,
  toggleMarker,
  countMarkedItems,
  addToActive,
  editDraftCard
} from "../../modules/App";

const MapStateToProps = state => ({
  draftCards: getDraftCards(state)
});

const MapDispatchToProps = {
  addToActive,
  removeFromActive,
  toggleMarker,
  countMarkedItems,
  removeFromDraft,
  editDraftCard
};

function DraftCard(props) {
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(props.item.text);
  const moveToActive = id => {
    var unmarked = Object.assign(props.draftCards[id], { marked: false });
    props.addToActive(unmarked);
    props.removeFromDraft(props.id);
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  const cancel = () => {
    setEditing(!editing);
    setInput(props.item.text);
  };

  const applyChanges = () => {
    setEditing(!editing);
    if (input === "" || !input.replace(/\s/g, "").length) {
      props.editDraftCard({ text: "*empty*", id: props.id });
    } else {
      props.editDraftCard({ text: input, id: props.id });
    }
  };

  return (
    <Box mb={4} boxShadow={2} className={classes.draftItem}>
      {!editing ? (
        <Typography
          variant="body1"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {props.item.text}
        </Typography>
      ) : (
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={input}
            onChange={handleChange}
            endAdornment={
              <>
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => {
                      cancel();
                    }}
                  >
                    <Cancel />
                  </IconButton>
                </InputAdornment>
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => {
                      applyChanges();
                    }}
                  >
                    <CheckCircle />
                  </IconButton>
                </InputAdornment>
              </>
            }
            labelWidth={70}
          />
        </FormControl>
      )}

      <Box display="flex" justifyContent="flex-end">
        <RemoveButton
          disabled={editing}
          variant="contained"
          onClick={() => {
            props.removeFromDraft(props.id);
          }}
        >
          Remove
        </RemoveButton>
        <SaveButton
          disabled={editing}
          variant="contained"
          className={classes.saveDraft}
          onClick={() => {
            moveToActive(props.id);
          }}
        >
          Save
        </SaveButton>
      </Box>
    </Box>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(DraftCard);
