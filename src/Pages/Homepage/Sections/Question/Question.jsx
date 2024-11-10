import './Question.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Question() {
  

  return (
    <div className='question'>
        <div className='container question_container'>
            <h1 className="question_title">Frequently asked questions</h1>
            <p className="question_text">If you have any further questions, please contact us </p>
           <div className="accardion">
           <div className='accardion_wrap'>
           <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Will I receive lifetime access to the courses?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
           <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Can I use the materials for community teaching?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
           <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Is there a free trial for the courses?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
           </div>
          <div className="accardion_wrap">
          <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Can I use the materials for community teaching?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
           <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Who can benefit from these courses?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
           <div className="accardion_item">
           <Accordion style={{border: "2px solid #686868",padding:"15px 0px"}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography style={{fontSize:"22px",color:"black"}}>Who can benefit from these courses?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
          Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>
          </div>
    </div>
    </div>    
    </div>
  )
}

export default Question