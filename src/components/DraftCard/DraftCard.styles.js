import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { blueGrey, lightGreen, red } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  draftSectionBox: {
    border: "solid 1px grey",
    borderRadius: "5px"
  },
  draftItem: {
    backgroundColor: "lightgrey",
    padding: "10px",
    borderRadius: "5px",
    overflowWrap: "break-word"
  },

  saveDraft: {
    position: "relative",
    top: "20px"
  }
}));

export const DraftButton = withStyles(theme => ({
  root: {
    backgroundColor: blueGrey[300],
    "&:hover": {
      backgroundColor: blueGrey[400]
    }
  }
}))(Button);

export const SaveButton = withStyles(theme => ({
  root: {
    backgroundColor: lightGreen[300],
    "&:hover": {
      backgroundColor: lightGreen[400]
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
