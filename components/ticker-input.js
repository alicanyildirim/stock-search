import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react';
import ShowTickerInfo from './show-ticker-info';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/Home.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '25ch',
    },
  },
  input: {
      margin: theme.spacing(1),
      height: 72
  },
  button: {
      margin: theme.spacing(1),
      height: 56
  }
}));

export default function TickerInput() {
  const classes = useStyles();
  const [ticker,setTicker] = useState('IBM');
  const [tickerInfo, setTickerInfo] = useState([]);
  const [disableClick, setDisableClick] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker) {
      setDisableClick(true);
      console.log(ticker);
      setTicker(ticker);
      getTicker();
    } 
  };
  
  const getTicker = async () => {
    const demo = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo'
    const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + ticker +'&apikey=' + process.env.API_KEY;
    const response = await fetch(ticker ? url : demo );
    const tickerInfo = await response.json();
    setTickerInfo(tickerInfo);
    console.log(tickerInfo);
    setDisableClick(false);
  };
  
  useEffect(() => {
    getTicker();
  }, []);

  return (
    <>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Ticker Symbol" variant="outlined" defaultValue="IBM" className={classes.input}
        onChange={(e) => setTicker(e.target.value)}
      >
        {ticker}
      </TextField>
      <Button variant="contained" color="primary" className={classes.button} type="submit" disabled={disableClick}>
        <SearchIcon></SearchIcon>
      </Button>
    </form>
     <section className={styles.grid}>
     <CircularProgress style={{margin: "auto", display: !disableClick ? "none" : "block"}} />
    <ShowTickerInfo ticker={tickerInfo} isLoading={disableClick}></ShowTickerInfo>
    </section>
    </>
  );
}
