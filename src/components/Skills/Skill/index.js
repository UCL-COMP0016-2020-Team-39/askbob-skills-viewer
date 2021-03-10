import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Skill = ({ description, category, plugin, examples }) => {
  const classes = useStyles();
  return (
    <Card className={classes.skill}>
      <CardContent>
        <Typography variant='h5'>{description}</Typography>
        <Typography variant='h6'>{`Category: ${category}`}</Typography>
        <Typography variant='h6'>{`Plugin: ${plugin}`}</Typography>
        <Typography variant='h6'>Examples</Typography>

        {examples.map(example => (
          <Typography variant='body2'>{example}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skill;
