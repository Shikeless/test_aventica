import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  headerBox: {
    width: "100vw",
    display: "flex",
    backgroundColor: "#bcaaa4",
    padding: "5px",
    marginBottom: "8px"
  },

  mainTitle: {
    textAlign: "center",
    position: "relative",
    marginLeft: "15%"
  },
  completeCounterIndicatorBox: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },

  completeCounterIndicator: {
    marginRight: "15px",
    backgroundColor: "#EDEDED",
    borderRadius: "5px",
    padding: "10px"
  }
}));
