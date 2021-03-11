import React from "react";
import PropTypes from "prop-types";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Skills } from "../";

import useStyles from "./styles";

const Categories = ({ skills }) => {
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
};

Categories.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      plugin: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ),
};
export default Categories;
