import React from "react";
import PropTypes from "prop-types";

import Skill from "./Skill";

import { Grid } from "@material-ui/core";

const Skills = ({ skills }) => {
  return (
    <Grid container spacing={2} alignContent='stretch'>
      {skills.map((skill, index) => (
        <Grid item key={index}>
          <Skill {...skill} />
        </Grid>
      ))}
    </Grid>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      plugin: PropTypes.string.isRequired,
      examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
};
export default Skills;
