import React from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import {
  useStyles,
  DraftButton,
  SaveButton,
  RemoveButton
} from "./DraftSection.styles.js";

function DraftSection() {
  const classes = useStyles();
  return (
    <>
      <Box mb={1} className={classes.draftSectionBox}>
        <Box mx={3} my={3}>
          <TextField
            id="outlined-size-small"
            label="Add Draft"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Box my={1} display="flex" justifyContent="flex-end">
            <DraftButton variant="contained">Draft</DraftButton>
            <SaveButton variant="contained">Save</SaveButton>
          </Box>
        </Box>
      </Box>
      <Box className={classes.draftSectionBox}>
        <Box mx={3} my={3}>
          <Typography variant="h5" gutterBottom>
            Draft
          </Typography>
          <Box mb={4} boxShadow={2} className={classes.draftItem}>
            <Typography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <RemoveButton variant="contained">Remove</RemoveButton>
              <SaveButton variant="contained" className={classes.saveDraft}>
                Save
              </SaveButton>
            </Box>
          </Box>
          <Box mb={4} boxShadow={2} className={classes.draftItem}>
            <Typography variant="body1">body1. Lorem ips.</Typography>
            <Box display="flex" justifyContent="flex-end">
              <RemoveButton variant="contained">Remove</RemoveButton>
              <SaveButton variant="contained" className={classes.saveDraft}>
                Save
              </SaveButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DraftSection;
