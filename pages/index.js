import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TickerInput from '../components/ticker-input';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Typography variant="h2" className={styles.title} style={{color: "#33691E", fontWeight: "500",}}>Stock Search</Typography>
        
        <Typography variant="h6" className={styles.description} style={{marginTop: "20px", marginBottom: "40px"}}>
          Information about securities, fetched from &nbsp; 
          <a href="https://www.alphavantage.co/documentation/#company-overview" target="_blank">Alpha Vantage API</a>
          <br/>
          Enter the ticker symbol of the stock you want to get information about.
          <br/>
          Try <span style={{color: "red"}}>GME</span> for starters.

        </Typography>
         <TickerInput ></TickerInput>
      </main>

      <footer className={styles.footer}>
        <Typography component="span" variant="body1">
      This is a restricted free API with a limit of 5 API requests per minute and 500 requests per day. The page is built solely for educational purposes.
      <div  style={{marginTop:"10px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <a href="https://github.com/alicanyildirim/stock-search" target="_blank" style={{marginRight: "10px"}}><CodeIcon/></a>
        <a href="https://www.linkedin.com/in/alicandev/" target="_blank"><LinkedInIcon/></a>
      </div>
        </Typography>
      </footer>
    </div>
  )
}
