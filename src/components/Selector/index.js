import React from "react";
import PropTypes from "prop-types";

import useStyles from "./styles";

import {
  Card,
  CardContent,
  Select,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";

const Selector = ({ sortBy, setSortBy, url, setUrl, errorText }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.selector}>
        <FormControl className={classes.formControl}>
          <FormLabel>Sort By</FormLabel>
          <Select
            value={sortBy}
            onChange={e => {
              setSortBy(e.target.value);
            }}
          >
            <MenuItem value='Plugins'>Plugins</MenuItem>
            <MenuItem value='Categories'>Categories</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel>Url</FormLabel>
          <TextField
            placeholder='Add AskBob skills endpoint URL'
            value={url}
            helperText={errorText}
            error={!!errorText}
            onChange={e => {
              setUrl(e.target.value);
            }}
          />
        </FormControl>
      </CardContent>
    </Card>
  );
};

Selector.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};
export default Selector;
