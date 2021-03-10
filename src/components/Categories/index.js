import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Skills } from "../";

const useStyles = makeStyles(theme => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: "1rem",
  },
}));

export default function Categories({ skills }) {
  const classes = useStyles();

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <>
      {categories.map((category, index) => {
        const pluginSkills = skills.filter(
          skill => skill.category === category
        );

        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h5'>{category}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant='h5'>Skills</Typography>
              <Skills skills={pluginSkills} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
