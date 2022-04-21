




import * as React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) =>({
  box:
  { marginTop:'6rem',height:'450px',maxWidth:'100%',position: 'relative'},
  grid:
  {border:'1px solid gray' , height:'333px',width:'1132px', position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
     boxShadow:'0px 138px 189px -76px rgba(0, 0, 0, 0.06)',borderRadius:'20px',background: '#FBFBFB',
     border: '2px solid rgba(227, 227, 227, 0.8)'
    },
    button:
    { border: "1px solid gray",  borderRadius: 16,  background: "#fff",marginRight:'1rem'}
}))


 function CardF() {
    const classes = useStyles();

  return (

<Box className={classes.box}>
  <Grid container spacing={2} xs={12} sm={11} className={classes.grid}>

<Grid item xs={4} sm={4} md={4}>

</Grid>
<Grid item xs={8} sm={8} md={8} maxWidth="100%"  style={{textAlign:'left'}}>
<CardContent>
          <Typography component='div' variant='h5' style={{ fontSize:'30px'}} >
          Be the market leader
          </Typography>
          <Typography  component='div' variant='p' style={{marginTop:'2rem'}}>
          Stay ahead of the curve; upgrading to EBC will boost your business <br/> reputation and sales, especially with high profile clients.
          </Typography>
          <div style={{padding:'2rem 0rem'}}>
          <Button variant="" className={classes.button}>
            Get started <ArrowForwardIosSharpIcon />
          </Button>
          <span>Get one month free Trial and cancel anytime</span>
          </div>
          </CardContent>

</Grid>
   </Grid>

 </Box>

  );
}
export default CardF
