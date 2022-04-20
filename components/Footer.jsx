import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'
import Beyin from "../public/logo.svg";


// const Grid = styled(MuiGrid)(({ theme }) => ({
//   width: "100%",

//   margin: "1rem",

// }));
// const useStyles = makeStyles(() => ({
// box :{
//   marginTop: "12rem",
//   border:'1px solid'
// }
// }))
const Footer = () => {
  // const style = useStyles()
  return (
    <Box style={{marginTop: "12rem"}}>
    <footer>
        <Container>
          <Grid container spacing={3} xs={12} style={{marginLeft:'2rem',display: 'flex',alignItems:'center',justifyContent: 'center'}}>
            <Grid item xs={3} sm={4} md={4} lg={3}>
              <Box>
              <Link underline="none" href="/" color="inherit">
              Terms and Conditions
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={4} lg={3}>
              <Box>
              <Link underline="none" href="/" color="inherit">
              Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={4} lg={3}>
              <Box>
              <Link underline="none" href="/" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={4} lg={3}>
              <Box>
              <Link underline="none" href="/" color="inherit">
              Pricing
                </Link>
              </Box>
            </Grid>
          </Grid>
        <Box style={{margin:'3rem', textAlign:'center'}}>
        <Image src={Beyin} alt='Image'  />
        </Box>
          <Box>
         <Typography component='div' variant='p' style={{textAlign:'center'}}>
         Beyin Digital Technology Limited | Abu Dhabi, Masdar city
<br/>
         © Beyin Digital Technology Limited - 2022. The trademarks, logos,
           designs, services and the content appearing herein, is exclusively<br/>
           owned by Beyin Digital Technology Limited, and/or its licensors, and
           are protected. Any unauthorized use or reproduction or<br/> distribution,
           shall attract suitable action under applicable law.
         </Typography>
          </Box>
          </Container>
    </footer>
    </Box>
    // <div className="footer">
    //   <Grid container spacing={1}>
    //     <Grid item xs>
    //       <a href="#">Terms and Conditions</a>
    //     </Grid>
    //     <Grid item xs>
    //       <a href="#">Privacy Policy</a>
    //     </Grid>
    //     <Grid item xs>
    //       <a href="#">Contact us</a>
    //     </Grid>
    //     <Grid item xs>
    //       <a href="#">Pricing</a>
    //     </Grid>
    //   </Grid>
    //   <div className='svg'>
    //     <img src={Image} alt="" />
    //   </div>

    //   <div className="beyin">
    //     <div className="container">
    //       <div className="container_contect">
    //         <p>Beyin Digital Technology Limited | Abu Dhabi, Masdar city</p>
    //       </div>
    //       <div className="footer">
    //         © Beyin Digital Technology Limited - 2022. The trademarks, logos,
    //         designs, services and the content appearing herein, is exclusively
    //         owned by Beyin Digital Technology Limited, and/or its licensors, and
    //         are protected. Any unauthorized use or reproduction or distribution,
    //         shall attract suitable action under applicable law.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
