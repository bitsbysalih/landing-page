import Beyin from '../../public/logo.svg'
import Image from 'next/image'
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
    img:{
        flexGrow: "1",cursor: "pointer",marginLeft:'6rem',
      },
}))

export default function Logo() {
      const classes = useStyles();
return (
        <div  className={classes.img}>
      <Image src={Beyin}  alt='Beyin Logo'/>
          </div>
)

}