import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Skills } from "../";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Plugins({ plugins, skills }) {
  const classes = useStyles();

  return (
    <>
      {plugins.map(p => {
        const { plugin, description, author, icon } = p;

        const pluginSkills = skills.filter(skill => skill.plugin === plugin);

        return (
          <Accordion key={plugin}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h5' className={classes.heading}>
                {plugin}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Skills skills={pluginSkills} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
