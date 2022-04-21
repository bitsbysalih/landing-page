import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageCard from "../public/card.png";
import ImageIphone from "../public/iPhone.png";
import Image from "next/image";

const useStyles = makeStyles(() => ({
box:
{margin:'5rem 2rem'}
}));

// const Item = styled(Paper)(({ theme }) => ({

// }));

export default function Work() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
          <Box style={{margin:'3rem 1rem'}}>
          <Typography component="h2" variant=""> How it works ?</Typography>
          </Box>
      <Grid container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
       columns={12}>
        <Grid item xs={12} sm={12} md={4} lg={6} >
          <Grid>
            <Grid sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <Typography variant="span" style={{ fontSize: "4rem", display: "flex" }}>
                  1
                  <Typography component="div" variant="h6" style={{ margin: "18px 3rem"}}>
                    Using your phone <br /> scan the QR code.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Box style={{height: "22vh" ,maxWidth: "50%"}}>
            <Image src={ImageCard} alt="Card"   />
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={5} item  style={{marginLeft:'4rem' }}  >
          <Grid xs={2}>
            <Image src={ImageIphone}  style={{maxWidth:'100%', height:'120%'}}/>
          </Grid>
          <Grid xs={6} rows={12}>
            <Grid xs={12} >
              <Grid container  columns={12}>
                <Grid
                  item
                  xs={3}
                 >
                  <Typography style={{ fontSize: "4rem",marginLeft:'1rem' }}>2</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography component='div' variant='p' >
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{marginLeft: "1rem" }}>
                <Typography component='div' >
                The website will recognize the card and show the Extended Business
              Card.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

