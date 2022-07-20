import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles"; // works with @material-ui/core/styles, if you prefer to use it.


export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Sailspad Digital Technology" />
					<meta
						name="description"
						content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
					/>
					<meta data-rh="true" name="google" content="translate" />
					<meta
						data-rh="true"
						name="keywords"
						content="Businesses card, virtual business card, online business card"
					/>
					<meta
						data-rh="true"
						name="keywords"
						content="Augmented Reality business card,AR businesses card,VR businesses card,Virtual Reality Business card,Extended reality business card"
					/>
					<meta
						data-rh="true"
						name="keywords"
						content="webxr,mobile apps,webvr,augmented reality technology,augmented reality apps,my business card"
					/>
					<meta
						data-rh="true"
						name="keywords"
						content="business card design,phone app,app development,free business cards,custom business cards,order business cards"
					/>
					<meta
						data-rh="true"
						name="keywords"
						content="mobile application development,business cards online,best android apps,business site,ar technology,ar app,best business cards"
					/>

					<meta data-rh="true" name="robots" content="index, follow" />
					<meta name="Linkedin:site" content="@beyin-tech" />
					<meta name="instagram:site" content="@beyin.me" />
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="google-site-verification"
						content="th0w1IxRhRL1luM22xO2EhIv_Gi_erWm5shJS5_L4H4"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}


MyDocument.getInitialProps = async (ctx) => {


	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,

		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	};
};
