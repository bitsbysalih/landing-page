import Head from "next/head";
import '../styles/globals.css'
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../components/js/createEmotionCache";
import PropTypes from "prop-types";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<CssBaseline />
			<Component {...pageProps} />
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};