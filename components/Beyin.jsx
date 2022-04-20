import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   border:'1px solid'
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   maxHeight:'100%',
  //   maxWidth:'100%',
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   border:'3px solid red'
  // },
  image: {
    width: 128,
    height: '100%',
    
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Beyin() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{ padding: '1rem',  maxWidth:'80%', textAlign: 'center',border:'3px solid red'}}>
          <Grid xs={12} container spacing={2}>
        <Grid item>
            <Box style={{ width: 128, height: '100%', border:'1px solid'}}>
              <img style={{  margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%',}} alt="complex" src="/static/images/grid/complex.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container  spacing={2}>
              <Grid item >
                <Typography  variant="h5" style={{textAlign:'left',padding:'2px'}}>
                it keeps a lasting <br/>impression every time
                </Typography>
                <Typography variant="body2"  style={{textAlign:'left'}}>
                Be memorable! leave a card that can be<br/> experienced again and again long after<br/> you’re gone.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{ padding: '1rem',  maxWidth:'80%', textAlign: 'center', border:'3px solid red'}}>
          <Box style={{ width: 128, height: '100%', border:'1px solid'}}>
              <img style={{  margin: 'auto',  display: 'block',  maxWidth: '100%', maxHeight: '100%',}} alt="complex" src="/static/images/grid/complex.jpg" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{ padding: '1rem', maxWidth:'80%',  textAlign: 'center', border:'3px solid red'}}>
          <Grid xs={12} container spacing={2}>
        <Grid item>
            <Box style={{ width: 128, height: '100%', border:'1px solid'}}>
              <img style={{  margin: 'auto',  display: 'block',  maxWidth: '100%', maxHeight: '100%',}} alt="complex" src="/static/images/grid/complex.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container  spacing={2}>
              <Grid item >
                <Typography  variant="h5" style={{textAlign:'left'}}>
                Unlimited copies and <br/>views
                </Typography>
                <Typography variant="body2"  style={{textAlign:'left'}}>
                Distribute as many copies as you need,<br/> no strings attached!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper style={{ padding: '1rem', maxWidth:'80%', textAlign: 'center', border:'3px solid red'}}>
          <Grid xs={12} container spacing={2}>
        <Grid item>
            <Box style={{ width: 128, height: '100%', border:'1px solid'}}>
              <img style={{  margin: 'auto',  display: 'block',  maxWidth: '100%', maxHeight: '100%',}}  alt="complex" src="/static/images/grid/complex.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container  spacing={2}>
              <Grid item >
                <Typography  variant="h5" style={{textAlign:'left'}}>
                Works on all Smart devices
                </Typography>
                <Typography variant="body2"  style={{textAlign:'left'}}>
                The EBC card works on all popular smart devices like Android and IOS as long as it can run Chrome, Edge or Safari.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
