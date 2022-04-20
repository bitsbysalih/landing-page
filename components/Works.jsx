
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";

import Button from '@material-ui/core/Button';
// import  Column from '@mui-treasury/components';
// import  Row from '@mui-treasury/components';

const useStyles = makeStyles(() => ({
  // card: {
  //   width:'100%',
  //   height:'40vh',
  //   border: '2px solid rgba(227, 227, 227, 0.8)',
  //   background: '#FBFBFB',
  //   borderRadius: '20px',
  //  display: 'flex',
  //  justifyContent: 'center',
  //   alignItems: 'center',
  //  boxShadow: '0px 138px 189px -76px rgba(0, 0, 0, 0.06)',

  //   // '&:hover': {
  //   //   borderColor: '#5B9FED',
  //   // },
  // },
  // title: {
  //       margin:'5rem auto ',
  //       fontWeight: 400,
  //       textAlign: 'center',
  //       border:'1px solid'
  //     },

}));

export const Works = (()=> {
  const styles = useStyles();
  return (


<Box style={{ margin:'5rem auto ', fontWeight: 400, textAlign: 'center'}}>
  <Grid container justify={'center'}>
    <Card style={{width: '1132px',boxShadow: '0px 138px 189px -76px rgba(0, 0, 0, 0.06)',}}>
        <Grid item  style={{  border: '2px solid rgba(227, 227, 227, 0.8)', background: '#FBFBFB', borderRadius: '20px',  maxWidth: '1132px' , height: '330px'}} >
            <Typography component='div' variant='h5' style={{  fontSize: '48px', color: '#122740',marginTop:'1rem'}}>
                Let’s make your business<br /> card close more deals
            </Typography>
              <Button
              style={{ margin: "4rem auto", border: "2px solid gray", borderRadius: "23rem", padding: "10px" }} variant="light"
              >
              Get started <ArrowForwardIosSharpIcon />{" "}
              </Button>
        </Grid>
    </Card>
  </Grid>
</Box>


  );
});

export default Works