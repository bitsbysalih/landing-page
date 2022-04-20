import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Row, Column, Item } from "@mui-treasury/components/flex";
import CheckIcon from '@material-ui/icons/Check';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// const useStyles = makeStyles((theme) => ({
// root:{
//     height:"66%",width:'100%',
//     marginTop:'4rem',
//     border:'1px solid'
// }
// }));
const useCardHeaderStyles = makeStyles(() => ({

    card: {

        borderColor: "#E3E3E3",
        borderRadius: '8.05664px',
        transition: "0.4s",
        width: "270px",
        margin:'1rem 2rem',
        '&:hover': {
          transform:'scale(1.1)',
          border: '2.671387px solid #E3E3E3',
          boxShadow: '0px 67px 141px -34px rgba(0, 0, 0, 0.25)',
          borderRadius: '8.05664px'
        },
      },
      button:{
        margin: "2rem 4rem",
        border: "1px solid #E3E3E3",
        borderRadius: '37px',
        background: "#E3E3E3",
        fontFamily: 'Poppins'
      }

}))


export default function CenteredGrid() {
  const classes = useCardHeaderStyles();
  // const classes = useStyles();
  return (
    <Box style={{ marginTop:'4rem', border:'1px solid'}}>
        <div style={{margin: '2rem' }}>
        <Typography component='div' variant='h3' >
        We made sure you get the best prices so you<br/> can thrive !
        </Typography>
        </div>
        <Typography component='div' variant='h6' style={{margin:'2rem'}}>
        Our Extended Business Card is extremely affordable at every scale. Our goal is to provide<br/> amazing technology for everyone for the lowest price possible.
        </Typography>

              <Grid>
              <Grid container xs={12}>
               <Grid item >
                    <Paper item className={classes.card}>
                            <CardHeader
                                    action={
                                        <Typography component='div' variant='h5'>  1-10 <br/> <small>card</small> </Typography>  } title="Personal Subscription " />
                               <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   $2 per card monthly
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />    Customizable card and logo
                                    </Typography>
                                </CardContent>
                                <Box>
                                    <Button
                                      className={classes.button} variant="">
                                       $2/M only
                                    </Button>
                               </Box>
                    </Paper>
                </Grid>
                    <Grid item >
                    <Paper item className={classes.card} >
                            <CardHeader
                                    action={
                                        <Typography component='div' variant='h5'>  10-50 <br/> <small>cards</small> </Typography>  } title="Startup Subscription " />
                               <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />  $1.5 percard monthly
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   Customizable card and logo
                                    </Typography>
                                </CardContent>
                                <Box>
                                    <Button
                                       className={classes.button} variant="">
                                      $15/M only
                                    </Button>
                               </Box>
                    </Paper>
                    </Grid>
                    <Grid  item >
                    <Paper item className={classes.card}>
                            <CardHeader
                                    action={
                                        <Typography component='div' variant='h5'>  50-100 <br/> <small>cards</small> </Typography>  } title="SME  Subscription" />
                               <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   $1.2 per user monthly
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   Customizable card and logo
                                    </Typography>
                                </CardContent>
                                <Box>
                                    <Button
                                       className={classes.button} variant="">
                                    $60/M only
                                    </Button>
                               </Box>
                    </Paper>
                    </Grid>
                    <Grid item  >
                    <Paper item className={classes.card}>
                            <CardHeader
                                    action={
                                        <Typography component='div' variant='h5'>  100-200 <br/> <small>cards</small> </Typography>  } title="SME+ Subscription " />
                               <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />  $1.2 per user monthly
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   Customizable card and logo
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   Fully customizable loading page
                                    </Typography>
                                </CardContent>
                                <Box>
                                    <Button
                                       className={classes.button} style={{marginTop:'1rem'}} variant="">
                                      $120/M only
                                    </Button>
                               </Box>
                    </Paper>
                    </Grid>
                    <Grid item >
                    <Paper item className={classes.card}>
                            <CardHeader
                                    action={
                                        <Typography component='div' variant='h5'>  200+ <br/> <small>cards</small> </Typography>  } title="Agency
                                        Subscription " />
                               <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   $1 per user
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />   Customizable card and logo
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <CheckIcon style={{fontSize:'small', margin:'3px'}} />  Fully customizable loading page
                                    </Typography>
                                </CardContent>
                                <Box>
                                    <Button
                                       className={classes.button} style={{marginTop:'1rem'}} variant="">
                                     $200/M only
                                    </Button>
                               </Box>
                    </Paper>
                    </Grid>
               </Grid>
              </Grid>

    </Box>
  );
}
