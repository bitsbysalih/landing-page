import '../styles/globals.css'
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LanguageContextProvider } from "../context/languageContext"
function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}
const theme = createTheme();


function MyApp({ Component, pageProps }) {

  return (

     <>


        <LanguageContextProvider>
     <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
      </LanguageContextProvider>
     </>

  )
}

export default MyApp