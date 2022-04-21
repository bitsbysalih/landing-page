import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({

    box:
    { margin:'5rem auto ', fontWeight: 400, textAlign: 'center'},
    card:
    {width: '1132px',boxShadow: '0px 138px 189px -76px rgba(0, 0, 0, 0.06)',},
    grid:
    {  border: '2px solid rgba(227, 227, 227, 0.8)', background: '#FBFBFB', borderRadius: '20px',  maxWidth: '1132px' , height: '330px'},
    button:
    { margin: "4rem auto", border: "2px solid gray", borderRadius: "23rem", padding: "10px" },
   typo:
   {  fontSize: '48px', color: '#122740',marginTop:'2rem'}


}));

export const Works = (()=> {
  const classes = useStyles();
  return (
<Box className={classes.box}>
  <Grid container justify={'center'}>
    <Card className={classes.card}>
        <Grid item className={classes.grid} >
            <Typography component='div' variant='h5' className={classes.typo}>
                Let’s make your business<br /> card close more deals
            </Typography>
              <Button variant="light" className={classes.button}>
              Get started <ArrowForwardIosSharpIcon />{" "}
              </Button>
        </Grid>
    </Card>
  </Grid>
</Box>
  );
});

export default Works