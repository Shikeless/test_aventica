import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  activeDraft: {
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    overflowWrap: "break-word"
  },
  completeIndicator: {
    width: "10px",
    height: "10px",
    borderRadius: "3px"
  }
}));

export const CustomButton = withStyles(theme => ({
  root: {
    backgroundColor: blueGrey[300],
    "&:hover": {
      backgroundColor: blueGrey[400]
    },
    marginLeft: "10px"
  }
}))(Button);
