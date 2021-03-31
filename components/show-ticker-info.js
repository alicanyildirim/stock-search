import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  disabled: {
      pointerEvents: "none",
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '50%',
    flexShrink: 0,
    color: "#EF6C00",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: "#33691E",
  },
}));

export default function ShowTickerInfo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const thousandsSeperator = (x) => {
    return (x+"").toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  if( Object.keys(props.ticker).length === 0 && props.ticker.constructor === Object) {
    return (
    <div className={classes.root} style={{display: props.isLoading ? "none": "flex"}}>
      <Typography variant="h4" style={{textAlign: 'center', color: "#263238", marginBottom: "20px", color: "red"}}>
        I couldn't find the ticker you have entered.

      </Typography>

    </div>
    );
  } else if((props.ticker).hasOwnProperty('Note')) {
    return (
      <Typography variant="h4" style={{textAlign: 'center', color: "#263238", marginBottom: "20px", color: "red"}}>
        API limit has been reached. Please try again after a few minutes.
      </Typography>

    );
  } else {
    return (
      <div className={classes.root} style={{display: props.isLoading ? "none": "flex"}}>
        <Typography variant="h4" style={{textAlign: 'center', color: "#263238", marginBottom: "20px"}}>{props.ticker.Name}</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'justify', width: '90%',margin: 'auto'}}>
                  {props.ticker.Description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion 
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Sector</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.Sector}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Industry</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.Industry}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>P/E Ratio</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PERatio}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>PEG Ratio</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PEGRatio}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Price to Book Ratio</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PriceToBookRatio}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Payout Ratio</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PayoutRatio}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Insider Ownership</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PercentInsiders}%
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Institutions Ownership</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.PercentInstitutions}%
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Book Value</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.BookValue} {props.ticker.Currency}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>52 Week High</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker["52WeekHigh"]} {props.ticker.Currency}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>52 Week Low</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker["52WeekLow"]} {props.ticker.Currency}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Shares Float</Typography>
            <Typography className={classes.secondaryHeading}>
              {thousandsSeperator(props.ticker.SharesFloat)}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Shares Outstanding</Typography>
            <Typography className={classes.secondaryHeading}>
              {thousandsSeperator(props.ticker.SharesOutstanding)}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Shares Short</Typography>
            <Typography className={classes.secondaryHeading}>
              {thousandsSeperator(props.ticker.SharesShort)}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Shares Short Previous Month</Typography>
            <Typography className={classes.secondaryHeading}>
              {thousandsSeperator(props.ticker.SharesShortPriorMonth)}
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Short Percent Float</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.ShortPercentFloat}%
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Short Percent Outstanding</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.ShortPercentOutstanding}%
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion
            className={classes.disabled}
        >
          <AccordionSummary>
            <Typography className={classes.heading}>Short Ratio</Typography>
            <Typography className={classes.secondaryHeading}>
              {props.ticker.ShortRatio}
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    );

  }
}
