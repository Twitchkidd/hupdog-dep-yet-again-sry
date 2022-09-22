import Layout from 'components/Layout';
import Global from 'components/Global';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Global />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
