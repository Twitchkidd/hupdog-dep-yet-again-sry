import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preload'
						href='/fonts/NotoSans-Regular.ttf'
						as='font'
						type='font/ttf'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/NotoSerif-Regular.ttf'
						as='font'
						type='font/ttf'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/OpenSans-VariableFont_wdth,wght.ttf'
						as='font'
						type='font/ttf'
						crossOrigin='anonymous'
					/>
					<script
						defer
						data-domain='hupdog.com'
						src='https://plausible.io/js/plausible.js'></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
