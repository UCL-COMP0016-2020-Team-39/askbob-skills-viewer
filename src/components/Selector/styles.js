import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    marginBottom: "1rem",
  },

  selector: {
    display: "flex",
    flexDirection: "column",
  },

  formControl: {
    marginBottom: "1rem",
    "& *": {
      margin: 0,
      padding: 0,
    },
  },
}));
