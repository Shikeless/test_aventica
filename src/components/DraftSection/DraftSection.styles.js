import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { grey, lightGreen, red } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  draftSectionBox: {
    border: "solid 2px black",
    marginBottom: "8px"
  },
  draftItem: {
    backgroundColor: "lightgrey",
    padding: "10px"
  },

  saveDraft: {
    position: "relative",
    top: "20px"
  }
}));

export const DraftButton = withStyles(theme => ({
  root: {
    backgroundColor: grey[400],
    "&:hover": {
      backgroundColor: grey[500]
    }
  }
}))(Button);

export const SaveButton = withStyles(theme => ({
  root: {
    backgroundColor: lightGreen[400],
    "&:hover": {
      backgroundColor: lightGreen[500]
    },
    marginLeft: "10px"
  }
}))(Button);

export const RemoveButton = withStyles(theme => ({
  root: {
    backgroundColor: red[200],
    "&:hover": {
      backgroundColor: red[300]
    },
    position: "relative",
    top: "20px"
  }
}))(Button);
