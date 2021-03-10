import React from "react";
import {
  Card,
  CardContent,
  Select,
  FormControl,
  FormLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";

const Selector = ({ searchValue, setSearchValue }) => {
  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Sort By</FormLabel>
          <Select
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
            }}
          >
            <MenuItem value='Plugins'>Plugins</MenuItem>
            <MenuItem value='Categories'>Categories</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Selector;
