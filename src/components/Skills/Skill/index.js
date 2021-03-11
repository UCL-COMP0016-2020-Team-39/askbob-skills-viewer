import React from "react";
import PropTypes from "prop-types";
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

        {examples.map((example, index) => (
          <Typography variant='body2' key={index}>
            {example}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

Skill.propTypes = {
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  plugin: PropTypes.string.isRequired,
  examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Skill;
