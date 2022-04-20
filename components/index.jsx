import React from "react";
import { Box, Grid } from "@material-ui/core";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageCard from "../public/card.png";
import ImageIphone from "../public/iPhone.png";
import Image from "next/image";

// const useStyles = makeStyles(() => ({
//   h2: { textAlign: "left", margin: "5rem" },


//   p2: {
//     margin: "5px 3rem",
//     fontSize: "20px",
//     textAlign: "left",
//     width: "11rem",
//   },
//   // div: { maxWidth: "100%", height: "85%", marginTop: "20px" },
//   // media: { height: "260px", borderRadius: "1rem",border:'1px solid red'  },
//   grid: { display: "flex", flexDirection: "row", marginLeft: "1rem" },
// }));

// const Item = styled(Paper)(({ theme }) => ({

// }));

export default function Work() {
  // const styles = useStyles();
  return (
    <Box style={{margin:'5rem 0rem',border:'1px solid'}}>
          <Box style={{margin:'3rem 1rem'}}>
          <Typography component="h2" variant=""> How it works ?</Typography>
          </Box>
      <Grid container spacing={2} columns={12} style={{marginLeft:'2rem'}}>
        <Grid item xs={5} sm={12} md={4} lg={5} >
          <Grid>
            <Grid sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <span style={{ fontSize: "4rem", display: "flex", flexDirection: "row" }}>
                  1
                  <p style={{ margin: "18px 3rem", fontSize: "20px", textAlign: "left",lineHeight: "23px", color: "#252D38" }}>
                    Using your phone <br /> scan the QR code.
                  </p>
                </span>
              </Typography>
            </Grid>

            <Image src={ImageCard} alt="Card"  />
          </Grid>
        </Grid>
        <Grid container xs={6} sm={12} md={6} lg={6} item  style={{marginLeft:'4rem' }}  >
          <Grid xs={2}  style={{ width:'70px'}}>
            <Image src={ImageIphone}  style={{maxWidth:'100%', maxHeight:'100%'}}/>
          </Grid>
          <Grid xs={6} style={{width:'40%'}} rows={12}>
            <Grid xs={12} style={{ width: "100%", height: "45%"}}>
              <Grid container  columns={12}>
                <Grid
                  item
                  xs={3}
                  style={{textAlign: "left" }}>
                  <Typography style={{ fontSize: "4rem" }}>2</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography component='div' variant='p' >
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{ maxWidth: "100%", maxHeight: "100%",  marginLeft: "1rem" }}>
                <Typography component='div' variant='p'>
                The website will recognize the card and show the Extended Business
              Card.
              </Typography>
            </Grid>
          </Grid>

          {/* <div>
          <Grid item xs={12} sm={12} md={6} lg={10}  sx={{
            display: "flex",
            marginLeft: "1rem",
          }}
        >

<CardMedia>
<Image component="img" style={{width: "125px"}}  src={ImageIphone} alt="Beyin Started" />

</CardMedia>
          <Grid items>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <Grid style={{ display: "flex", flexDirection: "row" }}>
                  <span className={styles.span}
                    // style={{
                    //   fontSize: "3rem",
                    //   display: "flex",
                    //   flexDirection: "row",
                    // }}
                  >
                    2
                    <p className={styles.p2}>
                      Click on start, then allow the camera to scan the card.
                    </p>
                  </span>
                </Grid>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                style={{ marginTop: "40px", textAlign: "left", width: "16rem" }}
              >
                The website will recognize the card and show the Extended
                Business Card.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

          </div> */}
        </Grid>
      </Grid>
    </Box>
  );
}

