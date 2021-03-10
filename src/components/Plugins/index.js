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

export default function Plugins({ plugins, skills }) {
  const classes = useStyles();

  return (
    <>
      {plugins.map((p, index) => {
        const { plugin, description, author } = p;

        const pluginSkills = skills.filter(skill => skill.plugin === plugin);

        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h5'>{plugin}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant='h5'>description</Typography>
              <Typography variant='h5' className={classes.title}>
                {description || "N/A"}
              </Typography>
              <Typography variant='h5'>Author</Typography>
              <Typography variant='h5' className={classes.title}>
                {author || "N/A"}
              </Typography>
              <Typography variant='h5'>Skills</Typography>
              <Skills skills={pluginSkills} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
