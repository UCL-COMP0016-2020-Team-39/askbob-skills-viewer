import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

import useStyle from "./styles";

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position='static' className={classes.header}>
      <Toolbar>
        <Typography variant='h4'>AskBob - Skills</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
