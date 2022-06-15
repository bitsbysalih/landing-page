import { Box, Grid, Typography, ButtonBase } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../public/card.png";
import ImageIphone from "../public/iPhone.png";
import Image from "next/image";
import style from "../styles/index.module.css";

// const useStyles = makeStyles(() => ({
//   box: { margin: "9rem auto", alignItems: "center", },
//   typo: {
//     fontFamily: 'Poppins',
//     fontStyle: "normal",
//     fontWeight: 300,
//     fontSize: "40px",
//     lineHeight: "54px",
//     display: "flex",
//     alignItems: "center",
//   },
//   imgIphone: {
//     boxShadow: " 0px 67.6825px 87.2063px rgba(0, 0, 0, 0.01)",
//     borderRadius: "19.5238px",
//   },
//   imgCard: {
//     boxShadow: "0px 138px 189px -76px rgba(0, 0, 0, 0.03)",
//     borderRadius: "5.25573px",
//   },
//   typo2: { fontSize: "60px", display: "flex" },
//   gridCard: { marginLeft: "1rem" },
// }));

export default function Work() {
  // const classes = useStyles();
  return (
		<Box className={style.box} id="work">
			<Box style={{ margin: "3rem auto" }}>
				<Typography variant="h4" className={style.typo}>
					{" "}
					How it works ?
				</Typography>
			</Box>
			{/* grid card all */}
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				className={style.gridCard}
			>
				{/* one card */}
				<Grid item xs={12} sm={5} md={4} lg={4}>
					<Grid className={style.card}>
						<Grid style={{ margin: "3rem 0rem", display: "flex" }}>
							<Typography style={{ fontSize: "60px", margin: "-2rem 1rem" }}>
								1
							</Typography>
							<Typography
								style={{
									margin: "-1rem 2rem",
									fontSize: "20px",
									fontFamily: "Poppins",
								}}
							
							>
								Using your phone <br /> scan the QR code.
							</Typography>
						</Grid>
						<ButtonBase className={style.imgCard}>
							<Image src={ImageCard} alt="Card image" />
						</ButtonBase>
					</Grid>
				</Grid>
				{/* tow card */}
				<Grid
					container
					justifyContent="center"
					item
					xs={12}
					sm={7}
					md={7}
					lg={5}
				>
					<Grid>
						<ButtonBase className={style.imgIphone}>
							<Image src={ImageIphone} alt="Image Iphone" />
						</ButtonBase>
					</Grid>
					<Grid item sm={5} md={4} lg={8}>
						<Grid item>
							<Grid container spacing={2}>
								<Grid item xs={4}>
									<Typography
										style={{ fontSize: "4rem", margin: "-22px 14px" }}
										className={style.tow}
									>
										2
									</Typography>
								</Grid>
								<Grid item xs={8} sm={8} md={8} lg={6}>
									<Typography variant="body1" className={style.typoPhone}>
										Click on start, then allow the camera to scan the card.
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							sm={8}
							md={10}
							lg={10}
							style={{ margin: "2.5rem 1rem" }}
							className={style.typoPhone}
						>
							<Typography>
								The website will recognize the card and show the Extended
								Business Card.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
