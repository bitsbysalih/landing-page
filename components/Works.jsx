// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import StyleButton from "./Button/StyleButton";
import Link from "next/link";
// import {makeStyles} from '@material-ui/core'
import style from "../styles/works.module.css";


export const Works = () => {
//   const style = useStyles();
  return (
		<Box id="works" className={style.box}>
			<Grid>
				<Grid className={style.card}>
					<Typography component="div" variant="h2" className={style.typo}>
						Let’s make your business card close more deals
					</Typography>
				</Grid>

				<Grid className={style.grid}>
					<Link href="https://app.sailspad.com/signup">
						<a className={style.link}>
							<StyleButton />
						</a>
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Works;
