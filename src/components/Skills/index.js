import React from "react";
import Skill from "./Skill";

import { Grid } from "@material-ui/core";

const Skills = ({ skills }) => {
  return (
    <Grid container wrap spacing={2} alignContent='stretch'>
      {skills.map(skill => (
        <Grid item>
          <Skill key={skill.id} {...skill} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
