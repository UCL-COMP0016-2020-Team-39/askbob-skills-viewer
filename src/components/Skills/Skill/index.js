import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Skill = ({ name, description, examples }) => {
  const classes = useStyles();
  return (
    <Card className={classes.skill}>
      <CardContent>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h6'>{description}</Typography>
        {examples.map(example => (
          <Typography variant='body2'>{example}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skill;
