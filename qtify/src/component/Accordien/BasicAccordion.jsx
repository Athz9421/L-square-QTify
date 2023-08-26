import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { indigo } from "@mui/material/colors";

export default function BasicAccordion({ faqQuestions }) {
  return (
    <div >
      {faqQuestions.map((ele,ind) => {
        return (
          <Accordion key={ind}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{ele.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{ele.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
