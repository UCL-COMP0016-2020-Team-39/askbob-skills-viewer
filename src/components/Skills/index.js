import React from "react";
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

export default Skills;
